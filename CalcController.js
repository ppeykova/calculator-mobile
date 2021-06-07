"use strict";
let modelCon = new CalcModel();
let viewCon = new CalcView();
let calcController = null;

function CalcController() {
    this.updateValueDisplay = function () {
        viewCon.calDisplay(modelCon.converted());
    };

    this.init = function () {
        modelCon.setNewCurrency(function (rate) {
            modelCon.setRate(rate);
        });
        viewCon.localStoreValue();
        viewCon.activeOpt();
        viewCon.changeDisplay();
        viewCon.clear();
        viewCon.calculateV( function () {
            modelCon.calculate();
            calcController.updateValueDisplay();
        });
    };
}

calcController = new CalcController();
window.addEventListener("load", calcController.init);