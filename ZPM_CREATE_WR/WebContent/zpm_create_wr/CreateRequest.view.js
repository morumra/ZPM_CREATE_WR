sap.ui.jsview("zpm_create_wr.CreateRequest", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zpm_create_wr.CreateRequest
	*/ 
	getControllerName : function() {
		return "zpm_create_wr.CreateRequest";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zpm_create_wr.CreateRequest
	*/ 
	showErrorMessage: function(message){
		
		var confDialog = new sap.m.Dialog({
			title : message, // string
			showHeader : true, // boolean, since 1.15.1
			type : sap.m.DialogType.Standard, // sap.m.DialogType
			rightButton: new sap.m.Button({
				text: 'Close',
				press: function(){					
					confDialog.close();
			},	
			})
		});
		confDialog.open();		
	},	
	
	showValueHelp: function(oController){
		 var filters = [];
		var valueHelpDialog = new sap.m.SelectDialog({
			id: 'valueHelpDialogId',
			title : 'Select Problem Location', // string
            items: {
                path: 'locationModel>/',
                template: new sap.m.StandardListItem({
                    title: '{locationModel>locationName}',
                    press: function(event){
                    	//oController.closeValueHelpDialog(event)
                    }
                })
            },
			search :  function(evt) {
                var sValue = evt.getParameter("value");
                var oFilter = new sap.ui.model.Filter(
                    'locationName',
                    sap.ui.model.FilterOperator.Contains, sValue
                );
                evt.getSource().getBinding("items").filter([oFilter]);
			},
			confirm: function(){oController.closeValueHelpDialog},
            cancel: function() { oController.closeValueHelpDialog}
		});
		valueHelpDialog.open();
	},
	
	showDialog: function(message){		
		var confDialog = new sap.m.Dialog({
			title : message, // string
			showHeader : true, // boolean, since 1.15.1
			type : sap.m.DialogType.Standard, // sap.m.DialogType
			rightButton: new sap.m.Button({
				text: 'Close',
				press: function(){					
					window.open('http://localhost:57959/ZPM_WORK_REQUESTS/index.html', '_parent');
			},	
			})
		});
		confDialog.open();		
	},
	createContent : function(oController) {
		
		var form = new sap.ui.layout.form.SimpleForm({
			maxContainerCols : 2, 
			width : "100%", 
			editable : false, 
			content : [
				  		new sap.m.Label({text:'Description'}),					
						new sap.m.Input({maxLength : 40, width: '400px', id:'descId',value:''}),
						new sap.m.Label({text:'Location'}),			
						new sap.m.Input({
							id:'locId',  
							width: '400px',
							showValueHelp: true,
							valueHelpRequest: [oController.locationValueHelp, oController],
                            valueHelpOnly: true, 
                            value:'5470 Bus stop'
                        }),
						new sap.m.Label({text:'Requested By'}),	
						new sap.m.Input({width: '400px',id:'reqById', value:'Kathy Jackson'}),  
						new sap.m.Label({text:'Details'}),
						new sap.m.TextArea({
							id:'detailsId',
							editable:true,
							cols:150,
							rows:10,value:''
						}),
			         ], 
		});
		console.log('7');			
 		return new sap.m.Page({
			title: "Create Work Request",
			showNavButton : true,
			navButtonPress : function(){
				oController.backToSelections();
			},	
			content: [
			          form,
			],
			footer: new sap.m.Bar({
				contentRight: [
					               new sap.m.Button({
					            	   width: '100px',
					            	   text: 'Submit',
					            	   type : sap.m.ButtonType.Accept,
					            	   press: function(event){
					            		   oController.createRequest(event);
					            	   }
					               }),
					               new sap.m.Text({width:'20px'}),
					               new sap.m.Button({
					            	   width: '100px',
					            	   text: 'Cancel',
					            	   type : sap.m.ButtonType.Reject,
					            	   press: function(event){
					            		   oController.cancelRequest(event);
					            	   }
					               }),
					               new sap.m.Text({width:'50px'})
				               ]
			})
		});
	},



});