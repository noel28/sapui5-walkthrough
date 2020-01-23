sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press"
], function(Opa5, Press) {
	"use strict";
	
	var sViewName = "Walkthrough.view.HelloPanel";
	
	Opa5.createPageObjects({
		onTheAppPage: {
			actions: {
				iPressTheSayHelloWithDialogButton: function() {
					return this.waitFor({
						id: "helloDialogButton",
						viewName: sViewName,
						actions: new Press(),
						errorMessage: "Did not find the 'Say Hello With Dialog' button on the Hello Panel View"
					});
				}
			},
			
			assertions:	{
				iShouldSeeTheHelloDialog: function() {
					return this.waitFor({
						controlType: "sap.m.dialog",
						success: function() {
							// we set the view busy, so we need to query the parent of the app
							Opa5.assert.ok(true, "The dialog is open");
						},

						errorMessage: "Did not find teh dialog control"
					});
				}
			}
		}
	});
});