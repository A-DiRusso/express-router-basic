//I need express 
const express = require('express');
//express to have its own port
const PORT = 3000;
//use express create an app with express
const app = express();
//connect a router
const thinkpadRouter = require('./routes/thinkpad');
app.use('/thinkpad', thinkpadRouter);

//listen on that port
app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
});