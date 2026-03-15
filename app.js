"use strict"
//setup Express.js libary
import express from 'express';
const app = express();

//serve public folder as static 
app.use(express.static('public'));

// use pagesRouter
import pageRouter from './routers/pagesRouter.js';
app.use(pageRouter);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log('Server running on port ' + server.address().port)
});


