const mongoose = require('mongoose')

const FacultySchema = new mongoose.Schema({
    project_name: {
        type: String,
        required: true
    },
    guides: {
        type:Array,
        required:true
    },
    amount: {
        type: Number,
        required:true
    },
    duration: {
        type: Number,
        required:true
    },
    Start_date: {
        type: Date,
        required:true
    },
    category: {
        type: String,
        required:true,
        enum: ['AI in healthcare', 'Computer vision', 'Micro & Nano electronics', 'Network and security', 'speech language & text processing', 'IOT, web services, cloud ontology']
    },
    progress: {
        type: Array,
        required:true
    },
    patents: {
        type: Array,
        required: true
    },
    research_papers: {
        type: Array,
        required: true
    },
    ppts: {
        type: Array,
        required: true
    }
});

const Faculty = mongoose.model("Faculty", FacultySchema);
module.exports = Faculty;
