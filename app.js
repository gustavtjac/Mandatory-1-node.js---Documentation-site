"use strict"
//setup Express.js libary
import express from 'express';
const app = express();
//serve public folder as static 
app.use(express.static('public'));
//Use path instead of __dirname
import path from 'path';

//_________________________ENDPOINTS_______________________________________
//___________________________SITES_________________________________________
//Serve frontpage
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/frontpage/frontpage.html'))
});

//____________________________API__________________________________________

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log("Server running on port " + server.address().port)
});


