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
    }
});

const Faculty = mongoose.model("Faculty", FacultySchema);
module.exports = Faculty;
