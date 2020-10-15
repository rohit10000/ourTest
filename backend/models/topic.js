const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
    index: {
        type: Number,
        required: true
    },
    value:{
        type: String,
        required: true
    }
});

const questionSchema = new Schema({
    text:{
        type: String,
        required: true
    },
    options:{
        type: Array,
        required: true
    },
    answer: answerSchema
});

const topicSchema = new Schema({
   name:{
       type: String,
       required: true
   } ,
    questions:[questionSchema]
});

let Topics = mongoose.model('Topic', topicSchema);

module.exports = Topics;
