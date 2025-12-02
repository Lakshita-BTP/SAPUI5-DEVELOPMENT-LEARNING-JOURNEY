sap.ui.define(["sap/ui/core/ComponentContainer", "sap/ui/core/mvc/XMLView"], function (ComponentContainer, XMLView) {
    "use strict";

    var oContainer = new ComponentContainer({
        id: "container",
        name: "demo.jitu.prac",
        manifest: true,
        async: true,
        settings: {
            id: "demo.jitu.prac_comp_sett"
        }
    });
    oContainer.placeAt("content");

})