var express = require('express');
var app = express();
var port 	= process.env.PORT || 8080;
var open = require("open");

var secrets = require('./secrets.json')
		, credentials = secrets["ibm-personality-insights"].credentials
		, watson = require('watson-developer-cloud')
		, personality_insights = watson.personality_insights({
			username: credentials.username
			, password: credentials.password
			, version: 'v2'
		})
		, speeches = require('./speeches.json');


personality_insights.profile({text: speeches["winston-churchill"]["their-finest-hour"]},
	function(err, profile) {
		if(err) {
			console.log(err);
		} else {
			console.log(profile);
			trigger(profile);
		}
	}
);

function trigger(profile){
	app.listen(port);

	// console.log("Open http://localhost:8080 in the browser to view the results clearly !!");
	app.get('/', function(req, res){
		res.json(profile);
	})

	//Launch the browser
	open("http://localhost:8080");

}