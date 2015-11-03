sap.ui.controller("zpm_create_wr.CreateRequest", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zpm_create_wr.CreateRequest
*/
	onInit: function() {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this.handleNavigation, this);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zpm_create_wr.CreateRequest
*/
//	onBeforeRendering: function() {
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zpm_create_wr.CreateRequest
*/
//	onAfterRendering: function() {		
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zpm_create_wr.CreateRequest
*/
//	onExit: function() {
//
//	}
	backToSelections: function(evt){
		window.history.go(-1);
	},
	cancelRequest: function(event){
		window.history.go(-1);
	},
	createRequest: function(event){
		this.noErrors  = true;		
		this.validateInput('descId','Description');		
		this.validateInput('locId','Location');	
		this.validateInput('reqById','Requested By');	
		this.validateInput('detailsId','Details');	
		if(this.noErrors){
			this.getView().showDialog('Work Request#3000010 has been created successfully');
		}
	},
	validateInput: function(fieldId, fieldName){
		var descInput = sap.ui.getCore().byId(fieldId);
		var descValue = descInput.getValue();
		var noErrors = true;
		console.log(descValue);
		if(descValue == undefined || descValue == "" ){
			this.noErrors = false;
			this.getView().showErrorMessage('Please enter '+fieldName);
		}
	},
	locationValueHelp: function(){
		var valueHelpDialog = sap.ui.getCore().byId('valueHelpDialogId');
		valueHelpDialog.open();
	},
	handleNavigation: function(){
		sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel('model/locations.json'),'locationModel');
		this.getView().showValueHelp(this);
	},
	closeValueHelpDialog: function(evt){
        var oSelectedItem = evt.getParameter("selectedItem");
        if (oSelectedItem) {
    		var locationInput = sap.ui.getCore().byId('locId');
    		locationInput.setValue(selectedLocationName);
    		var valueHelpDialog = sap.ui.getCore().byId('valueHelpDialogId');
    		valueHelpDialog.close();
        }
        evt.getSource().getBinding("items").filter([]);
        valueHelpDialog = null;
	}
});