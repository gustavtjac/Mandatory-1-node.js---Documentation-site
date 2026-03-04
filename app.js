"use strict"
//setup Express.js libary
import express from 'express';
const app = express();
//serve public folder as static 
app.use(express.static('public'));
//Use path instead of __dirname
import path from 'path';

//_________________________ENDPOINTS_______________________________________
//____________________________GET__________________________________________
//Serve frontpage
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/frontpage/frontpage.html'))
});

//____________________________POST__________________________________________


//_________________________PUT/PATCH________________________________________


//___________________________DELETE_________________________________________



//___________________________LISTEN_________________________________________
app.listen(8080, () => {
    console.log("Server running on port 8080")
});


