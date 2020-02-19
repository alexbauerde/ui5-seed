sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
  "use strict";

  return UIComponent.extend("ui5-seed.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
      this.getRootControl()
        .loaded()
        .then(
          function () {
            this.getRouter().initialize();
          }.bind(this)
        );
    }
  });
});