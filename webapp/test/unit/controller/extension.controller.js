/*global QUnit*/

sap.ui.define([
	"tuvr_fsm_extension/controller/extension.controller"
], function (Controller) {
	"use strict";

	QUnit.module("extension Controller");

	QUnit.test("I should test the extension controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
