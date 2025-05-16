import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.routes.js'

dotenv.config();

const PORT = process.env.PORT;

const app=express();

app.use("/api/products", productRoutes);

app.get('/',(req,res)=>{
    res.send("It works");
});

app.listen(PORT, ()=>{
    connectDB();
    console.log("I am up and running");
});
