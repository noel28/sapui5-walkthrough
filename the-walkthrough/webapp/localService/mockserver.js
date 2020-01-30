sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/base/util/UriParameters"
], function(MockServer,  UriParameters) {
	"user strict";
	
	return {
		init: function() {
			// create
			var oMockServer = new MockServer({
				rootUri: "/"
			});
			
			var oUriParameters = new UriParameters(window.location.href);
			
			// configure mock server with a delay
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: oUriParameters.get("serverDelay") || 500
			});
			
			// simulate
			/*var sPath = "../localService";
			oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");*/
			
			var sPath = jQuery.sap.getModuletPath("Walkthrough");
			
			oMockServer.simulate( sPath + "/metadata.xml", {
				sMockdataBaseUrl: sPath + "/mockdata",
				bGenerateMissingMockData: true
			});
			
			// start
			oMockServer.start();
			
			Log.info("Running the app with mock data");
		}
	}
});
