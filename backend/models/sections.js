const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
    testId: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
});

let Sections = mongoose.model('Sections', sectionSchema);
module.exports = Sections;
