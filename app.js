const express= require("express");
const expressEjsLayouts =require( "express-ejs-layouts");
//initialize
const app =express();
//port
const port=8000;
app.set('view engine', 'ejs');
// Set the static files directory
app.use(expressEjsLayouts);
app.set('layout', "./layouts/main");
app.use(express.static('public'));
//importing the controler 

const router=require('./server/routers/recipeRoutes');
// Add the routes from the recipeRouter.js file to the app
app.use('/', router);
//listening 
app.listen(port, ()=>{
    console.log(`Server open at ${port}`);
});