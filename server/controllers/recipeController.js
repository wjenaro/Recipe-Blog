require('../models/database');
const Category = require('../models/Category');
//const Recipe = require('../models/Recipe');
/**
 * GET/
 * homepage
 */
exports.homepage=async(req, res)=>{
try {

   const categories = await Category.find({}).limit(6);
   

    res.render('index', { categories} );
   
} catch (error) {
    res.status(500).send({message: error.message || "Error Occured" }); 
}

}


