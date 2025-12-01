sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("demo.jitu.prac.controller.App", {
            onSayHello: function () {
                MessageBox.information("Hello World");
            }
        })
    })