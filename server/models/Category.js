const mongoose= require("mongoose");
//create a scheme

const categorySchema=new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'

    },
    description:{
        type: String,
        required: 'This field is required.'
    },
    image:{
        type: String,
        required: 'This field is required.'
    },
});

//export
module.exports=mongoose.model('Category', categorySchema);