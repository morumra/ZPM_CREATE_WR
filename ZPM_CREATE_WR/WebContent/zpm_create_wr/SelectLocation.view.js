sap.ui.jsview("zpm_create_wr.SelectLocation", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zpm_create_wr.SelectLocation
	*/ 
	getControllerName : function() {
		return "zpm_create_wr.SelectLocation";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zpm_create_wr.SelectLocation
	*/ 
	createContent : function(oController) {
				
		var rowsLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "100%",
		});
		
		var data = [ 
		     {locationId:"1837", locationName:"Public Facilities",
		    	subLocations:[
		    	              {locationId:"1837", locationName:"Bus Stops"},     
		    	              {locationId:"1837", locationName:"Train Station"},  
		    	              {locationId:"1837", locationName:"Park & Ride"},
		    	              {locationId:"1837", locationName:"Sector"},
		    	              
		    	] 
		      },
		      
		     {locationId:"1836", locationName:"Operation Facilities",
			    	subLocations:[
			    	              {locationId:"1837", locationName:"Building"},     
			    	              {locationId:"1837", locationName:"Operation Facility"},  
			    	              {locationId:"1837", locationName:"BOF"},
			    	              {locationId:"1837", locationName:"NOC"},
			    	              {locationId:"1837", locationName:"ROC"}
			    	              
			    	] 	  
		     },
		     {locationId:"1836", locationName:"Track",
			    	subLocations:[
			    	              {locationId:"1837", locationName:"Pole"},     
			    	              {locationId:"1837", locationName:"Line"},  
			    	              {locationId:"1837", locationName:"Street"},			    	              
			    	] 	  	 
		     },
		     {locationId:"1836", locationName:"Transition Control",
			    	subLocations:[
			    	              {locationId:"1837", locationName:"Address"},    
			    	              {locationId:"1837", locationName:"Pole"}, 
			    	] 	 
		     },
		     {locationId:"1836", locationName:"Signals & Controls",
			    	subLocations:[
			    	              {locationId:"1837", locationName:"Pole"},     		    	              
			    	] 
		     },
		   ];
		//var columnsLayout =	new sap.ui.commons.layout.HorizontalLayout();
        var panel = new sap.m.Panel( {
            enabled : true, // boolean
            width:'100%',
            height:'auto',
            backgroundDesign : sap.m.BackgroundDesign.Transparent,   
        //    headerText: data[i].locationName
       });
		 //var columnsLayout = new sap.m.Panel( );
		for ( var i = 0; i < data.length; i++) {			           
	           for(j=0;j<data[i].subLocations.length;j++){
	        	   var selectedLocation = data[i].subLocations[j].locationId;
	        	   
	        	   var tile = new sap.suite.ui.commons.GenericTile({
	        		   header: data[i].subLocations[j].locationName,
	        		   //frameType:'OneByOne',
	        		   size:'S',
	        		   press : function(event){							
							oController.selectLocation(selectedLocation);
						}
	        	   });
//			        var tile = new sap.m.StandardTile({
//						title : data[i].subLocations[j].locationName, // string
//						press : function(event){
//							
//							oController.selectLocation(selectedLocation);
//						}
//					});		
			         panel.addContent(tile);	
			         panel.addContent(new sap.m.Text({width:'5px'}));
	           }
	           
	        // columnsLayout.addContent(panel);
			 
		}	
		rowsLayout.addContent(panel);
		return new sap.m.Page({
			title: "Select Problem Category",
			content: [
			          	rowsLayout
			],
		});
			
   }

});