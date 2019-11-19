require('dotenv').config();
const mongoose = require('mongoose')
const User = require('./models/user')

mongoose.connect(`mongodb+srv://Admin:${process.env.PASSWORD}@signup-obttu.mongodb.net/test?retryWrites=true&w=majority`,
{
    useNewUrlParser: true
});
const user = new User({
    name: 'Mizan',
    email: 'mizan_98@hotmail.co.uk',
    password: 'password123'
})

user.save()


User.find({}, (err, docs) =>{
    if(err) throw err
    console.log(docs)
})