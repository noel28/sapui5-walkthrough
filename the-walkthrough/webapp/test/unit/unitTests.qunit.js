/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";
	
	sap.ui.require([
		"Walkthrough/test/unit/model/formatter"
	],  function() {
		QUnit.start();
	});
});