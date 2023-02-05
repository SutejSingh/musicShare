const express = require('express')
const router = express.Router()

require('../database')
const UserModel = require('../models/User')

// sign up
router.post('/signup', async (req, res) => {
    // console.log(req.body.name, req.body.username, req.body.email, req.body.password)
    const name = req.body.name
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const user = new UserModel({
        name: name,
        username: username,
        email: email,
        password: password
    })

    // if username already exists
    const matchingUser = await UserModel.findOne({username: username})
    if(matchingUser){
        res.send("Username already exists")
        return

    }

    // if email already exists
    const matchingEmail = await UserModel.findOne({email: email})
    if(matchingEmail){
        res.send("Email already exists")
        return
    }

    // save user
    await user.save()
        .then((finalUser)=>{
                res.send(finalUser)
        })
        .catch((err)=>{
                console.log(err)
        })
    }
)

// login
router.post('/login', async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    if(!email || !password){
        res.send("Please enter a email and password")
        return
    }
    
    const currUser = await UserModel.findOne({email: email})
    
    if(currUser == null){
        res.send("Invalid Email or Password")
        return
    }
    if (currUser.password != password){
        res.send("Invalid Email or Password")
        return
    }

    // Successful login
    res.send({user: currUser, message: "Login Successful"})

})

router.get('/returnAllUsers', async (req,res) => {
    const allUsers = await UserModel.find()
    console.log(allUsers)
    res.send(allUsers)
})

router.post('/addFriend', async (req, res) => {
    const userID = req.body.userID
    const targetUserID = req.body.targetUserID
    const targetUser = await UserModel.findOne({_id: targetUserID})
    const user = await UserModel.findOne({_id: userID})
    if(user == null){
        res.send("Invalid user")
        return
    }
    if(targetUser == null){
        res.send("Invalid target user")
        return
    }
    if(user == targetUser){
        res.send("Cannot add yourself as a friend")
        return
    }
    if(user.friends.includes(targetUserID)){
        res.send("Already friends")
        return
    }
    user.friends.push(targetUserID)
    targetUser.friends.push(userID) 

})

// return all friend objects of a user given their id
router.post('/returnFriends', async (req, res) => {
    const userID = req.body.userID
    const user = await UserModel.findById(userID)
    if(user == null){
        res.send("Invalid user")
        return
    }
    const friends = []
    for(let i = 0; i < user.friends.length; i++){
        const friend = await UserModel.findById(user.friends[i])
        friends.push(friend)
    }
    res.send(friends)
})








module.exports = router