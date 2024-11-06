

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName : {
        type:String,
        requried :true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:[{
            type:String,
            enum: ['veg','non-veg']
        }]
    },
    image:{
        type:String
    },
    bestseller:{
        type:String
    },
    description:{
        type:String
    },
    Firm:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Firm'
    }]
});


const Product = mongoose.model('Product', productSchema);


module.exports = Product