sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
    "use strict";
    
    XMLView.create({
        id: "App",
        viewName: "demo.jitu.prac.view.App"
    }).then(function (oView) {
        oView.placeAt("content");
    });
})