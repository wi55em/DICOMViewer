var CodeRenderer = /** @class */ (function () {
    function CodeRenderer() {
    }
    CodeRenderer.prototype.renderJson = function (uiElement, data) {
        return this.renderEditor(uiElement, JSON.stringify(data, null, '\t'), "ace/mode/json");
    };
    CodeRenderer.prototype.renderXml = function (uiElement, data) {
        return this.renderEditor(uiElement, data, "ace/mode/xml");
    };
    CodeRenderer.prototype.renderValue = function (uiElement, data) {
        return this.renderEditor(uiElement, data, null, true);
    };
    CodeRenderer.prototype.clean = function (editor) {
        if (editor) {
            editor.destroy();
            var oldDiv = editor.container;
            var newDiv = oldDiv.cloneNode(false);
            oldDiv.parentNode.replaceChild(newDiv, oldDiv);
            editor.container = null;
            editor.renderer = null;
            editor = null;
        }
    };
    CodeRenderer.prototype.renderEditor = function (uiElement, data, editorMode, autoWrap) {
        if (autoWrap === void 0) { autoWrap = false; }
        var editor = ace.edit(uiElement);
        var editorSession = editorSession = editor.getSession();
        if (data) {
            editorSession.setValue(data);
        }
        else {
            editorSession.setValue("");
        }
        if (editorMode) {
            editorSession.setMode(editorMode);
        }
        if (autoWrap) {
            editorSession.setUseWrapMode(true);
        }
        editor.resize();
    };
    return CodeRenderer;
}());
//# sourceMappingURL=CodeRenderer.js.map