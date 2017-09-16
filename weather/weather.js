const request = require("request");

var getWeather = function(val, callback){
var weatherString = "https://api.darksky.net/forecast/e1df00d90001f7ebd029186ec2313bb7/" + val.latitude + ","+ val.longitude;
request({
	url:weatherString,
	json: true
} ,(error, response,body) =>{
	if(error ){
		callback("unable to connect to forecat io server");
	}
	else if( response.statusCode === 400){
		callback("unable to fetch weather");
	}
	else if( response.statusCode === 200){
		callback(undefined,{     //creating another callback because the function accepts one syring and one object and only one will run at a time so keep the first undefined so that the second one i.e object works;
			temperature: body.currently.temperature,
			apparentTemperature: body.currently.apparentTemperature
		});
		
	}

})
}


module.exports.getWeather = getWeather;