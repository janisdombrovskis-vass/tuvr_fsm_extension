/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"tuvr_fsm_extension/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
