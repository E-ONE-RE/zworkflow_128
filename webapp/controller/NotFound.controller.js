sap.ui.define([
	"zwf/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("zwf.controller.NotFound", {

		/**
		 * Navigates to the worklist when the link is pressed
		 * @public
		 */
		onLinkPressed: function() {
			this.getRouter().navTo("worklist");
		}

	});

});