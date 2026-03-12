"use strict"
//setup Express.js libary
import express from 'express';

const app = express();
//serve public folder as static 
app.use(express.static('public'));
//Use path instead of __dirname


//_________________________ENDPOINTS_______________________________________
//___________________________SITES_________________________________________
//Serve frontpage
import { frontpagePage, aboutPage } from './util/pagesUtil.js';

app.get('/', (req, res) => {
    res.send(frontpagePage(1))
});

app.get('/notes/:note', (req, res) => {

    const noteIdentifier = parseInt(req.params.note);

    res.send(frontpagePage(noteIdentifier))

})

app.get('/about', (req, res) => {
    res.send(aboutPage)
});




const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log('Server running on port ' + server.address().port)
});


