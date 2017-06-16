jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
jQuery.sap.require("sap.ui.test.opaQunit");
jQuery.sap.require("sap.ui.test.Opa5");

jQuery.sap.require("zwf.test.integration.pages.Common");
jQuery.sap.require("zwf.test.integration.pages.Worklist");
jQuery.sap.require("zwf.test.integration.pages.Object");
jQuery.sap.require("zwf.test.integration.pages.NotFound");
jQuery.sap.require("zwf.test.integration.pages.Browser");
jQuery.sap.require("zwf.test.integration.pages.App");

sap.ui.test.Opa5.extendConfig({
	arrangements: new zwf.test.integration.pages.Common(),
	viewNamespace: "zwf.view."
});

// Start the tests
jQuery.sap.require("zwf.test.integration.WorklistJourney");
jQuery.sap.require("zwf.test.integration.ObjectJourney");
jQuery.sap.require("zwf.test.integration.NavigationJourney");
jQuery.sap.require("zwf.test.integration.NotFoundJourney");
jQuery.sap.require("zwf.test.integration.FLPIntegrationJourney");