const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    friends: {
        type: Array,
    },
    playlists: {
        type: Array,
    },
    appleMusicCred: {
        type: String,
    },
    spotifyUsername: {
        type: String,
    },
    spotifyLink:{
        type: String,
    },
    spotifyProfilePic: {
        type:String
    },
    spotifyAccessToken: {
        type: String,
    },
    
    
});

const User = mongoose.model('User', UserSchema);
module.exports = User