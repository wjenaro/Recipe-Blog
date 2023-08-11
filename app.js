//add dependancies
const express =require("express");
const expressEjsLayouts =require( "express-ejs-layouts");
//require('dotenv/config')

//initialise
const app=express();
//set port number
const port=process.env.PORY || 3000;
//for storing data
//require('dotenv').config();
require('dotenv').config();
//middleware 
app.use(express.urlencoded({extended:true}));
//set static folder
app.use(express.static('public'));
app.use(expressEjsLayouts);
app.set('layout', "./layouts/main");
app.set('view engine', 'ejs');

const routers= require('./server/routers/recipeRoutes.js');
//const routes=require('./server/routers/recipeRoutes.js');
app.use('/', routers);

//listen to the port
app.listen(port, ()=>{
console.log(`The Server is running at port: ${port}`)
});
