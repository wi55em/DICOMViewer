var StoreView = /** @class */ (function () {
    function StoreView(parentElement) {
        this._parent = parentElement;
        this._resultView = new StoreResultView($(".store-result-view"), new WadoUriProxy(DICOMwebJS.ServerConfiguration.getWadoRsUrl()));
        this._resultView.hide();
        this.registerEvents();
    }
    StoreView.prototype.registerEvents = function () {
        //https://stackoverflow.com/questions/15854946/how-do-i-limit-the-number-of-file-upload-in-html
        var _this = this;
        if (typeof (dcloudMaxUpload) !== "undefined" && dcloudMaxUpload > 0) {
            $('#getFile').change(function () {
                if (this.files.length > dcloudMaxUpload) {
                    new ModalDialog().showError("Too many files", "Please select no more than " + dcloudMaxUpload + " files");
                    this.value = '';
                }
            });
        }
        $(this._parent).find("#addFileButton").click(function (e) {
            e.preventDefault();
            var newName = jQuery('#displayName').val();
            // Initiate method calls using jQuery promises.
            // Get the local file as an array buffer.
            var getFile = _this.getFileBuffer();
            var url = DICOMwebJS.ServerConfiguration.getStowUrl();
            var anonymizedElementsQuery = _this.getAnonymizedElementsQuery();
            getFile.done(function (arrayBufferList) {
                var proxy = new StowRsProxy(url);
                var dlg = new ModalDialog("#modal-alert");
                _this._resultView.show();
                _this._resultView.showProgress();
                proxy.StoreInstance(arrayBufferList, null, anonymizedElementsQuery).done(function (xhr) {
                    if (xhr.getResponseHeader("content-type").indexOf("application/json") >= 0) {
                        dlg.showJson("JSON Store Response", JSON.parse(xhr.response));
                    }
                    else {
                        _this._resultView.showSuccess(xhr.responseXML);
                    }
                })
                    .fail(function (xhr) {
                    if (xhr.status === 202) //Accepted
                     {
                        _this._resultView.showWarning(xhr.responseXML, "Some Errors during store  - " + xhr.statusText);
                    }
                    else {
                        _this._resultView.showError(xhr.responseXML, "Error Storing Dataset - " + xhr.statusText);
                    }
                });
            });
        });
    };
    // Get the local file as an array buffer.
    StoreView.prototype.getFileBuffer = function () {
        var results = [];
        var fileInput = $('#getFile')[0];
        var promises = [];
        var deferred = jQuery.Deferred();
        var files = fileInput.files;
        for (var index = 0; index < files.length; index++) {
            var reader = new fileReaderAsync();
            promises.push(reader.read(files[index]).done(function (result) { results.push(result); }));
        }
        $.when.apply($, promises).then(function () {
            deferred.resolve(results);
        });
        return deferred.promise();
    };
    StoreView.prototype.getAnonymizedElementsQuery = function () {
        var anonyElementsQuery = "";
        $(this._parent).find(".app-anonymizer-field").each(function (index, element) {
            var tagKey = $(element).attr("data-app-tag");
            var tagValue = $(element).val();
            if (tagValue !== "") {
                anonyElementsQuery += tagKey + "=" + tagValue + "&";
            }
        });
        return anonyElementsQuery;
    };
    return StoreView;
}());
//# sourceMappingURL=StoreView.js.map