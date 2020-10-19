const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
   name:{
       type: String,
       required: true
   },
    sectionId:{
        type: String,
        required: true
    }
});

let Topics = mongoose.model('Topic', topicSchema);

module.exports = Topics;
