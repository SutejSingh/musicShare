var express = require('express'); // Express web server framework
const router = express.Router()

var request = require('request'); // "Request" library
var querystring = require('querystring');

var client_id = 'bd3de74cd59947e0b94f02d6dcaa0ead'; // Your client id
var client_secret = '3770d0df6a944b599048844e021dcef2'; // Your secret
var redirect_uri = 'http://localhost:3000/spotify/callback'; // Your redirect uri

require('../database')
const UserModel = require('../models/User')

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';


var spotifyNewUserID = "";

router.get('/login', function(req, res) {
  spotifyNewUserID = req.query.userID;
  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your spotify location requests authorization
  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    `client_id=${client_id}&response_type=code&scope=${scope}&redirect_uri=${redirect_uri}`
  )
});

router.get('/callback', function(req, res) {

  // your spotifylication requests refresh and access tokens
  // after checking the state parameter
  
  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;
  
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, async function(error, response, body) {
            console.log(body);
            await UserModel.updateOne({_id: spotifyNewUserID}, {spotifyUsername: body.id, spotifyLink: body.external_urls?.spotify, spotifyProfilePic: body.images[0]?.url ,spotifyAccessToken: access_token})
            .then((data) => {
              res.send(data);
            })
        });
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  
});

router.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});


// var spotifyAPI = new SpotifyWebApi()
// spotifyAPI.setAccessToken(access_token)

// router.get('/getUserPlaylists', function(req, res) {
//   const userID = req.body.userID
//   spotifyAPI.getUserPlaylists(userID)


// })






module.exports = router



