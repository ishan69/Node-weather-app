console.log("starting app.js");
const yargs = require("yargs");

const geocode = require("./geocode/geocode.js");
const wea = require("./weather/weather")
const argv = yargs.options({
	a: {
		describe: "Address of the location",
		demand: true,
		string:true,
		alias: "Address"
	}
})
.help()
.alias("help", "h")
.argv;

geocode.getGeocode(argv.a, function(errorMessage, results){

	if(errorMessage){
		console.log(errorMessage);
	}
	else{
		console.log(results);
		wea.getWeather(results, function(weatherError, weatherResults){
			if(weatherError){
				console.log(weatherError);
			}
			else{
				console.log("it is "+weatherResults.temperature + " but feels like " +weatherResults.apparentTemperature);
			}
		});

	}

});

