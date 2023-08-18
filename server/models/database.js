const mongoose = require('mongoose');
const url="mongodb://0.0.0.0:27017/recipeDB"
// mongoose.connect('mongodb://0.0.0.0:27017/recipeDB', { useNewUrlParser: true, useUnifiedTopology: true });
async function connectDB(){
    try {
        mongoose.connect("mongodb+srv://coder:SAZdh3ro0GLuRvfq@cluster0.9qaxudy.mongodb.net/?retryWrites=true&w=majority");
        console.log("Database connected ---")
    } catch (error) {
        console.log("failed to connect");
        
    }

}




// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log('Connected')
// });

// // Models
//require('./Category');
