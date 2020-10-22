const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    scoredMarks:{
        type: String,
        required:true
    },
    totalMarks:{
        type: String,
        required:true
    },
    userId: {
        type:String,
        default: null
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Logs', logSchema);
