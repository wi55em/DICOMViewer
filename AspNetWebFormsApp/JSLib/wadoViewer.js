cornerstoneWADOImageLoader.configure({
    beforeSend: function (xhr) {
        // Add custom headers here (e.g. auth tokens)
        //xhr.setRequestHeader('x-auth-token', 'my auth token');
        if (DICOMwebJS.ServerConfiguration.IncludeAuthorizationHeader) {
            xhr.setRequestHeader("Authorization", DICOMwebJS.ServerConfiguration.SecurityToken);
        }
    }
});
;
var WadoViewer = /** @class */ (function () {
    function WadoViewer($parentView, uriProxy) {
        var _this = this;
        this._loaded = false;
        this._mouseActionsButtons = new ViewerMouseButtons();
        this.WADO_IMAGE_LOADER_PREFIX = "wadouri:";
        this._$parentView = $parentView;
        this._viewerElement = $parentView.find('#dicomImage').get(0);
        this._uriProxy = uriProxy;
        this._copyImageView = new copyImageUrlView($parentView, uriProxy);
        this._seriesNavigator = new SeriesNavigator(this);
        this._instanceSlider = new InstanceSlider(this);
        var options = {
            renderer: 'webgl'
        };
        cornerstone.enable(this._viewerElement, options);
        cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
        this.configureWebWorker();
        this._viewerElement.addEventListener('cornerstonenewimage', function (e) {
            _this.onNewImage(e);
        });
        $(this._$parentView).find("input[name=defaultButtonTool]").change(function (eventObj) {
            var element = eventObj.target;
            if (element.value == "WL") {
                _this._mouseActionsButtons.DefaultButton = _this._mouseActionsButtons.MouseActions.WL;
            }
            else {
                _this._mouseActionsButtons.DefaultButton = _this._mouseActionsButtons.MouseActions.Sroll;
            }
            if (_this._loaded) {
                _this._mouseActionsButtons.applyMouseAction(_this._viewerElement);
            }
        });
        $(window).resize(function () {
            cornerstone.resize(_this._viewerElement, true);
        });
    }
    WadoViewer.prototype.configureWebWorker = function () {
        var config = {
            webWorkerPath: location.protocol + "//" + location.host + '/scripts/cornerstone/cornerstoneWADOImageLoaderWebWorker.min.js',
            taskConfiguration: {
                'decodeTask': {
                    codecsPath: location.protocol + "//" + location.host + '/scripts/cornerstone/cornerstoneWADOImageLoaderCodecs.min.js',
                    usePDFJS: false
                }
            }
        };
        cornerstoneWADOImageLoader.webWorkerManager.initialize(config);
    };
    WadoViewer.prototype.refresh = function () {
        cornerstone.resize(this._viewerElement, true);
    };
    WadoViewer.prototype.parentView = function () {
        return this._$parentView;
    };
    WadoViewer.prototype.getViewerElement = function () {
        return this._viewerElement;
    };
    WadoViewer.prototype.loadStudy = function (studyParam, transferSyntax) {
        var _this = this;
        if (transferSyntax === void 0) { transferSyntax = null; }
        this._seriesNavigator.reset();
        $.getJSON(DICOMwebJS.ServerConfiguration.getOhifJsonEndpoint(studyParam.StudyInstanceUid)).then(function (data) {
            $.each(data.studies, function (studyIndex, study) {
                $.each(study.seriesList, function (seriesIndex, series) {
                    _this.loadSeriesJson(study, series, transferSyntax).then(function () {
                        _this._seriesNavigator.setStudy(study, seriesIndex, transferSyntax);
                    });
                    return false;
                });
                return false;
            });
        });
    };
    WadoViewer.prototype.loadSeriesJson = function (study, series, transferSyntax) {
        var _this = this;
        if (transferSyntax === void 0) { transferSyntax = null; }
        var imageIds = [];
        var instanceParams = [];
        var stack = {
            currentImageIdIndex: 0,
            imageIds: imageIds,
            instanceParams: instanceParams
        };
        $.each(series.instances, function (instsanceIndex, instance) {
            var imageParam = { frameNumber: null, transferSyntax: transferSyntax };
            var dicomInstance = {
                studyUID: study.studyInstanceUid,
                seriesUID: series.seriesInstanceUid,
                instanceUID: instance.sopInstanceUid
            };
            var wadoImageLoaderUrl = _this.getWadoImageLoaderUrl(dicomInstance, imageParam);
            instanceParams.push(dicomInstance);
            imageIds.push(wadoImageLoaderUrl);
        });
        this._stack = stack;
        return this.loadAndViewImage(stack);
    };
    WadoViewer.prototype.loadInstance = function (dicomInstance, transferSyntax) {
        if (transferSyntax === void 0) { transferSyntax = null; }
        var imageParam = { frameNumber: null, transferSyntax: transferSyntax };
        var wadoImageLoaderUrl = this.getWadoImageLoaderUrl(dicomInstance, imageParam);
        var stack = {
            currentImageIdIndex: 0,
            imageIds: [],
            instanceParams: []
        };
        stack.imageIds.push(wadoImageLoaderUrl);
        stack.instanceParams.push(dicomInstance);
        this._stack = stack;
        this._seriesNavigator.reset();
        this.loadAndViewImage(stack);
    };
    WadoViewer.prototype.loadedInstance = function () {
        if (this._stack) {
            return this._stack.instanceParams[this._stack.currentImageIdIndex];
        }
        return null;
    };
    WadoViewer.prototype.loadAndViewImage = function (stack) {
        var _this = this;
        var element = this._viewerElement;
        var promise;
        this._instanceSlider.reset();
        if (stack.imageIds.length == 0) {
            return;
        }
        var start = new Date().getTime();
        cornerstoneTools.clearToolState(element, "stack");
        this._instanceSlider.setStack(stack);
        try {
            promise = cornerstone.loadAndCacheImage(stack.imageIds[0]);
            promise.then(function (image) {
                _this._loaded = true;
                var viewport = cornerstone.getDefaultViewportForImage(element, image);
                //$('#toggleModalityLUT').attr("checked",viewport.modalityLUT !== undefined);
                //$('#toggleVOILUT').attr("checked",viewport.voiLUT !== undefined);
                cornerstone.displayImage(element, image, viewport);
                cornerstoneTools.mouseInput.enable(element);
                cornerstoneTools.mouseWheelInput.enable(element);
                cornerstoneTools.wwwcTouchDrag.activate(element);
                cornerstoneTools.addStackStateManager(element, ['stack', 'playClip']);
                cornerstoneTools.addToolState(element, 'stack', stack);
                if (stack.imageIds.length > 1) {
                    _this._mouseActionsButtons.WheelButton = _this._mouseActionsButtons.MouseActions.Sroll;
                }
                else {
                    _this._mouseActionsButtons.WheelButton = _this._mouseActionsButtons.MouseActions.Zoom;
                }
                _this._mouseActionsButtons.applyMouseAction(element);
                cornerstone.resize(_this._viewerElement, true);
                function getTransferSyntax() {
                    var value = image.data.string('x00020010');
                    return value + ' [' + uids[value] + ']';
                }
                function getSopClass() {
                    var value = image.data.string('x00080016');
                    return value + ' [' + uids[value] + ']';
                }
                function getPixelRepresentation() {
                    var value = image.data.uint16('x00280103');
                    if (value === undefined) {
                        return;
                    }
                    return value + (value === 0 ? ' (unsigned)' : ' (signed)');
                }
                function getPlanarConfiguration() {
                    var value = image.data.uint16('x00280006');
                    if (value === undefined) {
                        return;
                    }
                    return value + (value === 0 ? ' (pixel)' : ' (plane)');
                }
                $('#transferSyntax').text(getTransferSyntax());
                $('#sopClass').text(getSopClass());
                $('#samplesPerPixel').text(image.data.uint16('x00280002'));
                $('#photometricInterpretation').text(image.data.string('x00280004'));
                $('#numberOfFrames').text(image.data.string('x00280008'));
                $('#planarConfiguration').text(getPlanarConfiguration());
                $('#rows').text(image.data.uint16('x00280010'));
                $('#columns').text(image.data.uint16('x00280011'));
                $('#pixelSpacing').text(image.data.string('x00280030'));
                $('#bitsAllocated').text(image.data.uint16('x00280100'));
                $('#bitsStored').text(image.data.uint16('x00280101'));
                $('#highBit').text(image.data.uint16('x00280102'));
                $('#pixelRepresentation').text(getPixelRepresentation());
                $('#windowCenter').text(image.data.string('x00281050'));
                $('#windowWidth').text(image.data.string('x00281051'));
                $('#rescaleIntercept').text(image.data.string('x00281052'));
                $('#rescaleSlope').text(image.data.string('x00281053'));
                $('#basicOffsetTable').text(image.data.elements.x7fe00010.basicOffsetTable ? image.data.elements.x7fe00010.basicOffsetTable.length : '');
                $('#fragments').text(image.data.elements.x7fe00010.fragments ? image.data.elements.x7fe00010.fragments.length : '');
                $('#minStoredPixelValue').text(image.minPixelValue);
                $('#maxStoredPixelValue').text(image.maxPixelValue);
                var end = new Date().getTime();
                var time = end - start;
                $('#loadTime').text(time + "ms");
            });
            promise.catch(function (xhr) {
                var errorText = "Image failed to load";
                try {
                    if ('TextDecoder' in window && xhr.response) {
                        var enc = new TextDecoder();
                        errorText = enc.decode(xhr.response);
                    }
                }
                catch (error) { }
                new ModalDialog().showError("Error - " + xhr.status, errorText);
            });
        }
        catch (err) {
            new ModalDialog().showError("Error", err);
        }
        return promise;
    };
    WadoViewer.prototype.getWadoImageLoaderUrl = function (dicomInstance, imageParam) {
        var instanceUrl = this._uriProxy.createUrl(dicomInstance, MimeTypes.DICOM, imageParam);
        //add this "wadouri:" so it loads the wado uri loader, 
        //the loader trims this prefix from the url
        return this.WADO_IMAGE_LOADER_PREFIX + instanceUrl;
    };
    WadoViewer.prototype.onNewImage = function (e) {
        var newImageIdIndex = this._stack.currentImageIdIndex;
        this._copyImageView.setUrl(this._stack.imageIds[this._stack.currentImageIdIndex].replace(this.WADO_IMAGE_LOADER_PREFIX, ""));
    };
    return WadoViewer;
}());
var ViewerMouseButtons = /** @class */ (function () {
    function ViewerMouseButtons() {
        this.MouseActions = { WL: "WL", Zoom: "Zoom", Pan: "Pan", Sroll: "Scroll" };
        this.DefaultButton = this.MouseActions.WL;
        this.RightButton = this.MouseActions.Zoom;
        this.MiddleButton = this.MouseActions.Pan;
        this.WheelButton = this.MouseActions.Sroll;
    }
    ViewerMouseButtons.prototype.applyMouseAction = function (element) {
        cornerstoneTools.wwwc.activate(element, 0);
        cornerstoneTools.pan.activate(element, 0);
        cornerstoneTools.zoom.activate(element, 0);
        cornerstoneTools.stackScroll.activate(element, 0);
        this.apply(element, cornerstoneTools.wwwc, this.MouseActions.WL);
        this.apply(element, cornerstoneTools.pan, this.MouseActions.Pan);
        this.apply(element, cornerstoneTools.zoom, this.MouseActions.Zoom);
        this.apply(element, cornerstoneTools.stackScroll, this.MouseActions.Sroll);
        if (this.WheelButton == this.MouseActions.Zoom) {
            cornerstoneTools.zoomWheel.activate(element);
            cornerstoneTools.stackScrollWheel.deactivate(element);
            cornerstoneTools.scrollIndicator.disable(element);
        }
        else {
            // Enable all tools we want to use with this element
            //cornerstoneTools.stackScroll.activate(element, 1);
            cornerstoneTools.stackScrollWheel.activate(element);
            cornerstoneTools.scrollIndicator.enable(element);
            cornerstoneTools.zoomWheel.deactivate(element);
        }
    };
    ViewerMouseButtons.prototype.apply = function (element, action, mouseAction) {
        if (this.DefaultButton == mouseAction) {
            action.activate(element, 1);
        }
        else if (this.RightButton == mouseAction) {
            action.activate(element, 4);
        }
        else if (this.MiddleButton == mouseAction) {
            action.activate(element, 2);
        }
    };
    return ViewerMouseButtons;
}());
var SeriesNavigator = /** @class */ (function () {
    function SeriesNavigator(viewer) {
        var _this = this;
        this._study = null;
        this._loadedSeriesIndex = -1;
        this._transferSyntax = null;
        this._seriesCount = 0;
        this._wadoViewer = viewer;
        this._$prevEl = this._wadoViewer.parentView().find(".prevtSer");
        this._$nextEl = this._wadoViewer.parentView().find(".nextSer");
        this._$serInput = this._wadoViewer.parentView().find(".seriesCount");
        this._$nextEl.click(function () { _this.next(); });
        this._$prevEl.click(function () { _this.prev(); });
        this.reset();
    }
    SeriesNavigator.prototype.setStudy = function (study, loadedSeriesIndex, transferSyntax) {
        if (transferSyntax === void 0) { transferSyntax = null; }
        this._study = study;
        this._loadedSeriesIndex = loadedSeriesIndex;
        this._transferSyntax = transferSyntax;
        this._seriesCount = study.seriesList.length;
        this.render();
    };
    SeriesNavigator.prototype.reset = function () {
        this._$serInput.text("");
        this._$prevEl.attr("disabled", "true");
        this._$nextEl.attr("disabled", "true");
        this._loadedSeriesIndex = -1;
        this._seriesCount = 0;
        this._study = null;
    };
    SeriesNavigator.prototype.render = function () {
        this._$serInput.text("Series " + (this._loadedSeriesIndex + 1) + "/" + this._seriesCount);
        if (this._loadedSeriesIndex == 0) {
            this._$prevEl.attr("disabled", "true");
        }
        else {
            this._$prevEl.removeAttr("disabled");
        }
        if (this._loadedSeriesIndex == this._seriesCount - 1) {
            this._$nextEl.attr("disabled", "true");
        }
        else {
            this._$nextEl.removeAttr("disabled");
        }
    };
    SeriesNavigator.prototype.next = function () {
        if (this._loadedSeriesIndex == -1 || this._loadedSeriesIndex >= this._seriesCount - 1)
            return;
        this._wadoViewer.loadSeriesJson(this._study, this._study.seriesList[++this._loadedSeriesIndex], this._transferSyntax);
        this.render();
    };
    SeriesNavigator.prototype.prev = function () {
        if (this._loadedSeriesIndex <= 0)
            return;
        this._wadoViewer.loadSeriesJson(this._study, this._study.seriesList[--this._loadedSeriesIndex], this._transferSyntax);
        this.render();
    };
    return SeriesNavigator;
}());
var InstanceSlider = /** @class */ (function () {
    function InstanceSlider(viewer) {
        var _this = this;
        this._viewer = viewer;
        this._$slider = viewer.parentView().find(".instance-slider");
        this._$instanceCount = viewer.parentView().find(".instance-count");
        this._viewer.getViewerElement().addEventListener('cornerstonenewimage', function (e) {
            _this._$slider.val(_this._stack.currentImageIdIndex + 1);
            _this.render();
        });
        this._$slider.on('input', function () {
            var slideIndex = _this._$slider.val() - 1;
            if (slideIndex >= 0 && slideIndex < _this._stack.imageIds.length) {
                var targetElement = _this._viewer.getViewerElement();
                var stackToolDataSource = cornerstoneTools.getToolState(targetElement, 'stack');
                if (stackToolDataSource === undefined) {
                    return;
                }
                var stackData = stackToolDataSource.data[0];
                // Switch images, if necessary
                if (slideIndex !== stackData.currentImageIdIndex && stackData.imageIds[slideIndex] !== undefined) {
                    cornerstone.loadAndCacheImage(stackData.imageIds[slideIndex]).then(function (image) {
                        var viewport = cornerstone.getViewport(targetElement);
                        stackData.currentImageIdIndex = slideIndex;
                        cornerstone.displayImage(targetElement, image, viewport);
                    });
                }
            }
        });
    }
    InstanceSlider.prototype.setStack = function (stack) {
        this._stack = stack;
        this._$slider.val(stack.currentImageIdIndex + 1);
        this._$slider.attr("min", 1);
        this._$slider.attr("max", this._stack.imageIds.length);
        this.render();
    };
    InstanceSlider.prototype.reset = function () {
        this._stack = null;
        this._$instanceCount.text("");
    };
    InstanceSlider.prototype.render = function () {
        this._$instanceCount.text("Count " + (this._stack.currentImageIdIndex + 1) + "/" + this._stack.imageIds.length);
    };
    return InstanceSlider;
}());
//# sourceMappingURL=wadoViewer.js.map