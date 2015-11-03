jQuery.sap.declare('org.metro.pm.request.create.Component');

sap.ui.core.UIComponent.extend('org.metro.pm.request.create.Component',{
	metadata: {
		rootView : {  
		      viewName : "zpm_create_wr.SelectLocation",  
		      type : sap.ui.core.mvc.ViewType.JS  
		     },  
		routing: {
			config: {
				viewType: sap.ui.core.mvc.ViewType.JS,
				viewPath: 'zpm_create_wr',
				targetControl: 'splitAppId',
				clearTarget: false,
				transition: 'slide'												
			},
			routes: [
			         {
			        	 pattern:"create",
			        	 view:"CreateRequest",
			        	 name:"create",			        	 
			        	 targetAggregation: "detailPages",			        	 
			         },
			         {
			        	 pattern:"",
			        	 name:"default",
			        	 view:"SelectLocation",
			        	 targetAggregation: "detailPages"
			         }
			]			
		}
	},
	init: function(){
		jQuery.sap.require('sap.m.routing.RouteMatchedHandler');
		jQuery.sap.require('sap.ui.core.routing.HashChanger');
		
		sap.ui.core.UIComponent.prototype.init.apply(this,arguments);
		
		this.router  = this.getRouter();
		this.routeHandler = new sap.m.routing.RouteMatchedHandler(this.router);
		this.router.initialize();
				
	},
	createContent: function(){
		
		var locationModel = new sap.ui.model.json.JSONModel('model/LocationTypes.json');		
		sap.ui.getCore().setModel(locationModel,"locations");

	//	var listModel = new sap.ui.model.json.JSONModel('model/Request.json');
	//	sap.ui.getCore().setModel(listModel,"createModel");

		var app = new sap.m.SplitApp("splitAppId",{
			id : "splitAppId",
			mode : sap.m.SplitAppMode.HideMode,
		});		
//		var page = sap.ui.view({
//			id:"idApp1", 
//			viewName:"zpm_create_wr.SelectLocation", 
//			type:sap.ui.core.mvc.ViewType.JS,
//			viewData: {component:this}
//		});
		//app.addDetailPage(page);
				
		return app;
	}
	
})