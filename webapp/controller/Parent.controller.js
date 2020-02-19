sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("ui5-seed.controller.Parent", {
    onInit: function () {
      this.router = this.getOwnerComponent().getRouter();
      this.getView().addEventDelegate({
          onAfterShow: function (event) {
            this.router.navTo("Module1");
          }
        },
        this
      );
      this.router.attachRoutePatternMatched(
        this.onRoutePatternMatched.bind(this)
      );
    },

    onRoutePatternMatched: function (event) {
      this.byId("childViewSegmentedButton").setSelectedKey(
        event.getParameter("name")
      );
    },

    onSelect: function (event) {
      this.router.navTo(event.getParameter("key"));
    }
  });
});