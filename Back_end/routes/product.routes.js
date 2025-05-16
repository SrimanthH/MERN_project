import express from 'express';
import Product from '../models/product.model.js';
import mongoose, { mongo } from 'mongoose';


const router =express.Router();
export default router;



router.use(express.json());

router.delete("/:id", async (req,res)=>{
    const {id} = req.params;

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({sucess:true, message:"The item is deleted.."});
    }
    catch(error){
        res.status(400).json({sucess:false, messasge:"Failed to find the product"});    
        console.log(`Error: ${error}`);
    }
});

router.patch("/:id", async (req,res)=>{
    const {id} = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({sucess:false, message:"Product not found"});
    }
    try{
        const updated=await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({sucess:true, message:"The item is found and updated version is",data:updated});
    }
    catch(error){
        res.status(500).json({sucess:false, messasge:"Failed to find the product"});    
        console.log(`Error: ${error}`);
    }
});




router.get('/',async (req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json({sucess:true, message:"These are the products", data:products});
    }
    catch(error){
        res.status(500).json({sucess:false, message:"Server error while fetching products.."});
    }
});


router.post("/",async (req,res)=>{
    const product = req.body;
    
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({sucess:false, message:"Something is missing!!"});
    }
    const newProduct=new Product(product);
    try{
        await newProduct.save();
        res.status(201).json({sucess:true, message:"New product has been added",data:newProduct});

    }
    catch(error){
        console.Console;ongamepadconnected(`Error in creating nee record ${error}`);
        res.status(500).json({sucess:false, message:"Server error"});
    }
    
});
//console.log(process.env.Mongo_connection_str);

