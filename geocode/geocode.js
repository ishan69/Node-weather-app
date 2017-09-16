const request = require("request");


var getGeocode = function(address, callback){
   var basicAdd = "http://maps.googleapis.com/maps/api/geocode/json?address=" +  encodeURIComponent(address);
   console.log(basicAdd);
request({url:basicAdd,
         json: true   }
	,(error, response,body) =>{
		if(error){
		callback("cannot connect to server");
	    }
	    else if (body.status === "ZERO_RESULTS"){
	    	callback("unabe to find address");
	    }
	    else if (body.status === "OK"){
	    	callback(undefined, {
	    	address :  body.results[0].formatted_address,
	    	latitude : body.results[0].geometry.location.lat,
             longitude : body.results[0].geometry.location.lng
	    	});

}

})
}


module.exports.getGeocode = getGeocode;