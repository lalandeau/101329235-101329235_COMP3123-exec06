const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const noteRoutes = require("./routes/NoteRoutes")

const DB_URL = "mongodb+srv://Ellyn:Ellyn20@cluster0.cizcja0.mongodb.net/fullstack_db?retryWrites=true&w=majority"
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

app.use("/api/v1/", noteRoutes)

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(8081, () => {
    console.log("Server is listening on port 3000");
    console.log(`Server running at http://localhost:${8081}/`)
});