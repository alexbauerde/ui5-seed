sap.ui.define([], function() {
	"use strict";

	return {

		oServiceModel : new sap.ui.model.odata.ODataModel(""),
		
		readData : function(aFilters, fnSuccess, fnError){
			
			this.oServiceModel.read("EntitySet?format=json", {
				filter : aFilters,
				success : function(oData, response){
					fnSuccess(JSON.parse(response.body).d.results);
				},
				error : function(oError){
					fnError(oError);
				}
				
			});
			
		}
		
	};

});