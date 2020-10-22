const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    admin: {
        type: Boolean,
        default: false
    },
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        default: null
    },
    imageUrl:{
      type: String,
      default: "images/defaultProfile.jpg"
    },
    googleId: {
        type:String,
        default: null
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Users', userSchema);
