//add dependancies
import express from "express";
import expressLayouts from "express-ejs-layouts";

//initialise
const app=express();
//set port number
const port=process.env.PORY || 3000;
//for storing data
require('dotenv').config();
//set static folder
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
//homepage
app.get('/', (req, res)=>{
    res.send("Hello World");
});

//listen to the port
app.listen(port, ()=>{
console.log(`The Server is running at port: ${port}`)
});
