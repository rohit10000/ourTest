const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionSchema = new Schema({
    text:{
        type: String,
        required: true
    },
    index:{
        type: Number,
        required: true
    }
});

const questionSchema = new Schema({
    text:{
        type: String,
        required: true
    },
    options:[optionSchema],
    answer:optionSchema,
    topicId: {
        type: String,
        required: true
    }
});

let Questions = mongoose.model('Questions', questionSchema);
module.exports = Questions;
