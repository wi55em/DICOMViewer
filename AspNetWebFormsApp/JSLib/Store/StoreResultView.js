var StoreResultView = /** @class */ (function () {
    function StoreResultView($view, uriProxy) {
        this.$view = $view;
        this.$progress = this.$view.find(".progress").hide();
        this.$alert = this.$view.find(".store-result-alert");
        this.$resultBody = this.$view.find(".store-result-body").hide();
        this.$resultTitle = this.$view.find(".store-result-title");
        this.$resultContent = this.$view.find(".store-result-content");
        this._copyImageView = new copyImageUrlView($view, uriProxy);
    }
    StoreResultView.prototype.showProgress = function () {
        this.$resultBody.hide();
        this.$progress.show();
    };
    StoreResultView.prototype.showSuccess = function (xmlData) {
        var codeRenderer = new CodeRenderer();
        this.$progress.hide();
        this.$resultBody.show();
        this.setAlertClass("alert-success");
        this.$resultTitle.text("Success!");
        if (xmlData) {
            var $referencedInstance = $(xmlData).find("DicomAttribute[keyword='ReferencedInstanceSequence']");
            var instanceUrl = $referencedInstance.find("DicomAttribute[keyword='RetrieveURI']").children("Value").text();
            this._copyImageView.setUrl(instanceUrl);
            codeRenderer.renderXml(this.$resultContent[0], this.getString(xmlData));
        }
        else {
            this._copyImageView.setUrl("");
            codeRenderer.renderXml(this.$resultContent[0], "");
        }
    };
    StoreResultView.prototype.showError = function (xmlData, error) {
        this.showFailure(xmlData, error, "alert-danger");
    };
    StoreResultView.prototype.showWarning = function (xmlData, error) {
        this.showFailure(xmlData, error, "alert-warning");
    };
    StoreResultView.prototype.showFailure = function (xmlData, error, alertStyle) {
        var codeRenderer = new CodeRenderer();
        this.$progress.hide();
        this.$resultBody.show();
        this.setAlertClass(alertStyle);
        this.$resultTitle.text(error);
        this._copyImageView.setUrl("");
        if (xmlData) {
            codeRenderer.renderXml(this.$resultContent[0], this.getString(xmlData));
        }
        else {
            this._copyImageView.setUrl("");
            codeRenderer.renderXml(this.$resultContent[0], "");
        }
    };
    StoreResultView.prototype.setAlertClass = function (alertClass) {
        this.$alert.removeClass("alert-success alert-warning alert-danger").addClass(alertClass);
    };
    StoreResultView.prototype.hide = function () {
        this.$view.hide();
    };
    StoreResultView.prototype.show = function () {
        this.$view.show();
    };
    StoreResultView.prototype.getString = function (data) {
        return data.xml ? data.xml : (new XMLSerializer()).serializeToString(data);
    };
    return StoreResultView;
}());
//# sourceMappingURL=StoreResultView.js.map