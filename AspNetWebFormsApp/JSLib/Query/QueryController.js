var QueryController = /** @class */ (function () {
    function QueryController(queryView, queryModel, queryService, retrieveService, wadoUriService, delowRsProxy, viewer, studyPagerView) {
        this._queryView = queryView;
        this._queryModel = queryModel;
        this._queryService = queryService;
        this._retrieveService = retrieveService;
        this._wadoUriService = wadoUriService;
        this._delowRsProxy = delowRsProxy;
        this._viewer = viewer;
        this._studyPagerView = studyPagerView;
        this._studyPagerModel = studyPagerView.model;
        this._studyPagerView.hide();
        this.registerEvents();
    }
    QueryController.prototype.registerEvents = function () {
        var _this = this;
        this._queryView.instanceViewRequest.on(function (args) {
            var dicomInstance = {
                studyUID: args.InstanceParams.StudyInstanceUid,
                seriesUID: args.InstanceParams.SeriesInstanceUID,
                instanceUID: args.InstanceParams.SopInstanceUid
            };
            _this._viewer.loadInstance(dicomInstance);
        });
        this._queryView.previewStudy.on(function (args) {
            var query = new StudyParams();
            query.StudyInstanceUid = args.StudyParams.StudyInstanceUid;
            _this._viewer.loadStudy(query);
        });
        this._queryView.qidoStudy.on(function (args) {
            var query = new StudyParams();
            query.StudyInstanceUid = args.StudyInstanceUID;
            var request = _this.getQidoQueryParam(query, args.MediaType);
            _this._queryService.findInstances(request)
                .done(function (xhr, data) {
                _this.showDialog("QIDO-RS Study", args.MediaType, data);
            }).fail(function (xhr) {
                new ModalDialog().showError("Error (HTTPS Status: " + xhr.status + ")", xhr.responseText);
            });
        });
        this._queryView.qidoSeries.on(function (args) {
            var query = new SeriesParams();
            var request = _this.getQidoQueryParam(query, args.MediaType);
            query.StudyInstanceUid = args.StudyInstanceUID;
            query.SeriesInstanceUID = args.SeriesInstanceUID;
            _this._queryService.findInstances(request)
                .done(function (xhr, data) {
                _this.showDialog("QIDO-RS Series", args.MediaType, data);
            })
                .fail(function (xhr) {
                new ModalDialog().showError("Error (HTTPS Status: " + xhr.status + ")", xhr.responseText);
            });
        });
        this._queryView.qidoInstance.on(function (args) {
            var query = new InstanceParams();
            var request = _this.getQidoQueryParam(query, args.MediaType);
            query.StudyInstanceUid = args.StudyInstanceUID;
            query.SeriesInstanceUID = args.SeriesInstanceUID;
            query.SopInstanceUid = args.SopInstanceUID;
            _this._queryService.findInstances(request)
                .done(function (xhr, data) {
                _this.showDialog("QIDO-RS Instance", args.MediaType, data);
            })
                .fail(function (xhr) {
                new ModalDialog().showError("Error (HTTPS Status: " + xhr.status + ")", xhr.responseText);
            });
        });
        this._queryView.instanceMetaDataRequest.on(function (args) {
            _this._retrieveService.getObjectInstanceMetadata(args.InstanceParams, function (data) {
                _this._queryView.showInstanceMetadata(data, args);
            }, args.MediaType);
        });
        this._queryView.instanceRequest.on(function (args) {
            _this._retrieveService.getObjectInstance(args.InstanceParams, args.MediaType, function (data) {
                appUtils.download(data, "wado-rs.txt");
            });
        });
        this._queryView.framesRequest.on(function (args) {
            _this._retrieveService.getFrameUncompressed(args.InstanceParams, args.FrameList, function (data) {
                appUtils.download(data, "wado-rs.frm");
            }, function (ev) {
                new ModalDialog().showError("Error", "");
            });
        });
        this._queryView.wadoUriRequest.on(function (args) {
            var instance = {
                studyUID: args.InstanceParams.StudyInstanceUid,
                seriesUID: args.InstanceParams.SeriesInstanceUID,
                instanceUID: args.InstanceParams.SopInstanceUid
            };
            var imageParam = { frameNumber: args.Frame, transferSyntax: null };
            _this._wadoUriService.getDicomInstance(instance, false, imageParam).done(function (data) {
                appUtils.download(data, "dicom.dcm");
            }).fail(function (err) {
                new ModalDialog().showError("Error", err);
            });
        });
        this._queryView.deleteStudyRequest.on(function (args) {
            _this._delowRsProxy.deleteStudy(args.StudyParams.StudyInstanceUid)
                .done(function (response) {
                new ModalDialog().show("Success");
            })
                .fail(function (error) {
                new ModalDialog().showError("Error", error);
            });
        });
        this._queryView.showStudyViewer.on(function (args) {
            var studyUid = args.StudyParams.StudyInstanceUid;
            var viewerUrl = DICOMwebJS.ServerConfiguration.getOhifViewerUrl(studyUid);
            _this._queryModel.selectedStudy();
            window.open(viewerUrl, "ohifViewer");
        });
        this._queryModel.StudyQueryChangedEvent = function () {
            _this.queryStudies();
        };
        this._queryView.querySeries.on(function () {
            _this.querySeries(_this._queryModel.selectedStudy());
        });
        this._queryView.queryInstances.on(function () {
            _this.queryInstances(_this._queryModel.selectedSeries());
        });
        this.registerStudyPager();
    };
    QueryController.prototype.registerStudyPager = function () {
        var _this = this;
        var offset = 0;
        var limit = this._studyPagerModel.pageLimit;
        this._studyPagerView.onFirst.on(function () {
            offset = _this._studyPagerModel.firstOffset;
            limit = _this._studyPagerModel.pageLimit;
            _this.queryStudies(offset, limit);
        });
        this._studyPagerView.onPrev.on(function () {
            offset = _this._studyPagerModel.prevOffset;
            limit = _this._studyPagerModel.pageLimit;
            _this.queryStudies(offset, limit);
        });
        this._studyPagerView.onNext.on(function () {
            offset = _this._studyPagerModel.nextOffset;
            limit = _this._studyPagerModel.pageLimit;
            _this.queryStudies(offset, limit);
        });
        this._studyPagerView.onLast.on(function () {
            offset = _this._studyPagerModel.lastOffset;
            limit = _this._studyPagerModel.pageLimit;
            _this.queryStudies(offset, limit);
        });
    };
    QueryController.prototype.queryStudies = function (offset, limit) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 12; }
        if (!this._queryModel.StudyQueryParams || offset === -1) {
            return;
        }
        var options = new QueryOptions();
        options.limit = limit;
        options.offset = offset;
        var params = {
            query: this._queryModel.StudyQueryParams,
            returnValues: [],
            options: options,
            acceptType: MimeTypes.Json,
            success: null,
            error: null
        };
        this._queryService.findStudies(params)
            .done(function (xhr, data) {
            try {
                var totalCount = xhr.getResponseHeader("X-Total-Count");
                var linkHeader = xhr.getResponseHeader("link");
                if (linkHeader) {
                    if (!totalCount) {
                        totalCount = "-1";
                    }
                    _this._studyPagerModel.setLinkHeader(linkHeader, data.length, parseInt(totalCount, 10));
                    _this._studyPagerModel.currentOffset = offset;
                    _this._studyPagerView.render();
                    _this._studyPagerView.show();
                }
                else {
                    _this._studyPagerView.hide();
                }
            }
            catch (err) {
                _this._studyPagerView.hide();
            }
            _this.onQueryStudies(data);
        }).fail(function (xhr) {
            _this.onQueryError(xhr.status, xhr.responseText);
        });
    };
    QueryController.prototype.querySeries = function (study) {
        var _this = this;
        if (!study) {
            return;
        }
        var params = {
            query: study,
            returnValues: [],
            options: null,
            acceptType: MimeTypes.Json,
            success: null,
            error: null
        };
        this._queryService.findSeries(params)
            .done(function (xhr, data) {
            _this.onQuerySeries(data);
        }).fail(function (xhr) {
            _this.onQueryError(xhr.statusText, xhr.responseText);
        });
    };
    QueryController.prototype.queryInstances = function (series) {
        var _this = this;
        if (!series) {
            return;
        }
        var params = {
            query: series,
            returnValues: [],
            options: null,
            acceptType: MimeTypes.Json,
            success: null,
            error: null
        };
        this._queryService.findInstances(params)
            .done(function (xhr, data) {
            _this.onQueryInstances(data);
        }).fail(function (xhr) {
            _this.onQueryError(xhr.statusText, xhr.responseText);
        });
    };
    QueryController.prototype.onQueryStudies = function (data) {
        //TODO: use a model service for getting 
        //the response data and converting it
        var length = data.length;
        var studies = [];
        while (length--) {
            var dsService = new JsonDicomDatasetService();
            dsService.setModel(data[length]);
            studies[length] = new StudyParams(dsService);
        }
        this._queryModel.Studies = studies;
    };
    QueryController.prototype.onQuerySeries = function (data) {
        var length = data.length;
        var series = [];
        while (length--) {
            var dsService = new JsonDicomDatasetService();
            dsService.setModel(data[length]);
            series[length] = new SeriesParams(dsService);
        }
        this._queryModel.Series = series;
    };
    QueryController.prototype.onQueryInstances = function (data) {
        var length = data.length;
        var instances = [];
        while (length--) {
            var dsService = new JsonDicomDatasetService();
            dsService.setModel(data[length]);
            instances[length] = new InstanceParams(dsService);
        }
        this._queryModel.Instances = instances;
    };
    QueryController.prototype.getQidoQueryParam = function (query, mediaType) {
        var request = {
            query: query,
            returnValues: [],
            options: null,
            acceptType: mediaType,
            success: null,
            error: null
        };
        request.returnValues.push(new DicomTag(DicomTags.StudyInstanceUid));
        request.returnValues.push(new DicomTag(DicomTags.SeriesInstanceUid));
        request.returnValues.push(new DicomTag(DicomTags.SopInstanceUid));
        return request;
    };
    QueryController.prototype.showDialog = function (title, mediaType, data) {
        var title = title + " (" + mediaType + ")";
        var dlg = new ModalDialog("#modal-alert");
        if (mediaType == MimeTypes.Json) {
            dlg.showJson(title, data);
        }
        else {
            dlg.showXml(title, data);
        }
    };
    QueryController.prototype.onQueryError = function (status, errorThrown) {
        new ModalDialog().showError("Error (HTTP Status: " + status + ")", errorThrown);
    };
    return QueryController;
}());
//# sourceMappingURL=QueryController.js.map