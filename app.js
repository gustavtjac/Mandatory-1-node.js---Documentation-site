"use strict"
//setup Express.js libary
import express from 'express';
import path from 'path';
import { getAllNotes, getNote } from './util/notesUtil.js';

const app = express();
//serve public folder as static 
app.use(express.static('public'));
//Use path instead of __dirname


//_________________________ENDPOINTS_______________________________________
//___________________________SITES_________________________________________
//Serve frontpage
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/pages/frontpage/frontpage.html'))
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve('public/pages/about/about.html'))
});


//____________________________API__________________________________________

app.get('/api/notes', (req, res) => {
    res.send({ data: getAllNotes() })
});

app.get('/api/notes/:note', (req, res) => {

    const note = getNote(req.params.note);

    if (!note) {
        return res.status(400).send({ errorMessage: "Note with name " + req.params.note + ' could not be found' });
    }

    res.send({ data: note })
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log("Server running on port " + server.address().port)
});


