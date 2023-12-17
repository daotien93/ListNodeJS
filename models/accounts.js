const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://vanttien93:cuteo935@cluster0.oh1beli.mongodb.net/')
  .then(() => console.log('Connected to DB SUCESS!'));

const Schema = mongoose.Schema
  
const AccountSchema= new Schema({
    username: String,
    password: String
}, {
    collation: 'account'
})

const AccountModel = mongoose.model('account', AccountSchema)
module.exports = AccountModel