const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

/*
{    
    "noteTitle": "Random",
    "noteDescription": "Unavailable",
    "priority": 2,
    "dateAdded": "10-10-2021",
    "dateUpdated": "11-11-2022"
}
*/

const noteSchema = mongoose.Schema({
    noteTitle: {
        type: String,
        require: true,          //not null // you cannot skip 
        lowercase: true,        //all inputs are lowercased
        },

    noteDescription: {
        type: String,
        require: true,
        lowercase: true, 
    },

    priority: {
        type: Number,
        require: true,
        /* 
            Low = 1
            Medium = 2
            High = 3
        */
        min: 1,
        max: 3,
    },

    dateAdded: {
        type: Date,
        require: true
    },

    dateUpdated: {
        type: Date,
        require: true
    }
    
})


module.exports = mongoose.model("note", noteSchema)