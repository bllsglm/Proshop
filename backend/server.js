import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";


const PORT = process.env.PORT || 5000 ;
const app = express()


app.get("/", (req,res) => {
  res.send("API is running..")
})



app.get("/products/api" , (req,res) => {
  res.json(products)
})

app.get("/products/:id", (req,res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product)
})

app.listen(PORT, ()=> {
  console.log(`Your server is running on ${PORT}`);
})

