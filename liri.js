var keys = require('./keys.js')
var command = process.argv[2]

var twitter = require('twitter');
var request = require('request');
var spotify = require('spotify');
var fs = require('fs');

var argument = process.argv[3]

var client = new twitter ({

  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  access_token_key: keys.access_token_key,
  access_token_secret: keys.access_token_secret

});

var params = {
		screen_name: 'AndiMeowww'
	};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if(command=='my-tweets') {
			console.log(tweets)
		} else {
			console.log("i can't do this right now");
		}

	});

function spotifyThisSong() {
	spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    } else {
    	console.log(data)
    }
});

};
		