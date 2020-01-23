/* global QUnit, opaTest */

sap.ui.define([
	"Walkthrough/localService/mockserver",
	"sap/ui/test/opaQunit",
	"./pages/App"
],	function(mockserver) {
	"user strict";
	
	QUnit.module("Navigation");
	
	opaTest("Should open the Hello Dialog", function(Given, When, Then) {
		// initialize the mock server
		mockserver.init();
		
		// Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "../../"
			}
		});
		
		// Actions
		When.onTheAppPage.iPressTheSayHelloWithDialogButton();
		
		// Assertions
		Then.OnTheAppPage.iShouldSeeTheHelloDialog();
//		Then.OnTheAppPage.iSawTheHelloDialog();
		
		// Cleanup
		Then.iTeardownMyApp();
		
	});
});