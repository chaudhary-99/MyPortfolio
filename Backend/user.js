const mongoose = require('mongoose')
const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    msg:String
})

module.exports = mongoose.model('portfolio',userSchema);