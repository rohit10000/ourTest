const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    }
});

let Tests = mongoose.model('Tests', testSchema);
module.exports = Tests;
