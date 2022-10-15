const noteModel = require('../models/NotesModel.js');
const express = require("express")
const mongoose = require("mongoose")
const app = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', async (req, res) => {
    // Validate request
    try {
        const newNote = new noteModel(req.body)
        const note = await newNote.save()
        if(!note) {
            res.status(400).send({ message: "Note content can not be empty" });
        }
        res.status(201).send(note)
    } catch (error) {
        res.status(400).send(error)
    }
    //TODO - Write your code here to save the note
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    // Validate request
    try{
    const note = await noteModel.find()
    if(!note) {
        res.status(400).send({message: "Note content can not be empty"});
    }
    res.status(200).send(note)
}
    catch (error){
        res.status(400).send(error)
    }
    //TODO - Write your code here to returns all note
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:notesid', async (req, res) => {
    // Validate request
    try {
        const newNote = await noteModel.findById(req.params.notesid, req.body)
        res.status(201).send(newNote)
    }
    catch (error){
        res.status(400).send(error)
    }
    //TODO - Write your code here to return only one note using noteid
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:notesid', async (req, res) => {
    // Validate request
    try {
        const newNote = await noteModel.findByIdAndUpdate(req.params.notesid)
        res.status(201).send(newNote)
    }
    catch (error){
        res.status(400).send(error)
    }
    //TODO - Write your code here to update the note using noteid
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete("/notes/:notesid", async (req, res) => {
    // res.send({message: "Delete Book By ID"})
    try {
        const deletedNote = await noteModel.findByIdAndDelete(req.params.notesid)
        if(!deletedNote){
            res.status(400).send({message: "Note content can not be empty"})
        }
        res.status(201).send(deletedNote)
    }
    catch (error){
        res.status(400).send(error)
    }
    //TODO - Write your code here to delete the note using noteid
});

module.exports = app