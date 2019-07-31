/// <reference path="coderenderer.ts" />
var ModalDialog = /** @class */ (function () {
    function ModalDialog($dialogName) {
        if ($dialogName === void 0) { $dialogName = "#modal-alert"; }
        this._onDlgClose = new LiteEvent();
        this._codeRenderer = new CodeRenderer();
        this._$dialogName = $dialogName;
        this._$dlg = $(this._$dialogName);
        this._$dlgTitle = this._$dlg.find(".modal-title");
        this._$dlgHeader = this._$dlg.find(".modal-header");
        this._$dlgContentParent = this._$dlg.find(".model-body-content");
        this._contentElement = this._$dlgContentParent[0];
    }
    Object.defineProperty(ModalDialog.prototype, "dilaogClosed", {
        get: function () { return this._onDlgClose; },
        enumerable: true,
        configurable: true
    });
    ModalDialog.prototype.showJson = function (title, data) {
        this._$dlgTitle.text(title);
        this._editor = this._codeRenderer.renderJson(this._contentElement, data);
        this._$dlg.modal("show");
        this.onDialogClose(this._$dlg);
    };
    ModalDialog.prototype.showXml = function (title, data) {
        this._$dlgTitle.text(title);
        this._editor = this._codeRenderer.renderXml(this._contentElement, data);
        this._$dlg.modal("show");
        this.onDialogClose(this._$dlg);
    };
    ModalDialog.prototype.showText = function (title, data) {
        this._$dlgTitle.text(title);
        if (data) {
            data = data.toString();
        }
        this._editor = this._codeRenderer.renderValue(this._contentElement, data);
        this._$dlg.modal("show");
        this.onDialogClose(this._$dlg);
    };
    ModalDialog.prototype.show = function (title) {
        this.showText(title, "");
    };
    ModalDialog.prototype.showError = function (title, data) {
        this._$dlgHeader.addClass("bg-danger");
        this.showText(title, data);
    };
    ModalDialog.prototype.onDialogClose = function ($dlg) {
        var _this = this;
        $dlg.on('hidden.bs.modal', function () {
            _this._$dlgHeader.removeClass("bg-danger");
            _this._codeRenderer.clean(_this._editor);
            _this._onDlgClose.trigger(_this._$dialogName);
        });
    };
    return ModalDialog;
}());
//# sourceMappingURL=ModelDialog.js.map