const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

mongoose.connect('mongodb+srv://songHubBot:4Js$h53DRfPb6Qw@cluster0.bo38wra.mongodb.net/?retryWrites=true&w=majority',
    {useNewUrlParser: true},
    (err) => {
        if (!err) {
            console.log('MongoDB connection succeeded.')
        } else {
            console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2))
        }
    }
);