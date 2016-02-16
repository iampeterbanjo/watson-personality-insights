'use strict';

var watson = require('watson-developer-cloud');

var secrets = require('./secrets.json')
    , credentials = secrets["ibm-personality-insights"].credentials
    , watson = require('watson-developer-cloud')
    , concept_expansion = watson.concept_expansion({
    username: credentials.username
    , password: credentials.password
    , version: 'v1-beta'
})
    , speeches = require('./speeches.json');


var params = {
    seeds: ['computer', 'software', 'programming', 'database'],
    label: 'slang'
};

concept_expansion.expand(params, function (err, response) {
    if (err)
        console.log('error:', err);
    else
        console.log(JSON.stringify(response, null, 2));
});