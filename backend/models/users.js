const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
    testTopic:{
        type: String,
        required:true
    },
    totalMarks:{
        type: Number,
        required:true
    },
    scoredMarks:{
        type: Number,
        required:true
    }
}, {
    timestamps: true
});

const userSchema = new Schema({
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
        required: true
    },
    testAttempted:[testSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
