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
		}
	}
);