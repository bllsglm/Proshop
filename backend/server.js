import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import Product from "./models/productModel.js";
import productRoutes from "./routes/productRoutes.js"


const PORT = process.env.PORT || 5000 ;
connectDB();

const app = express()


app.get("/api", async(req,res) => {
  const response = await Product.find()
  res.send(response)
})

app.use("/api/products" , productRoutes)


app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=> {
  console.log(`Your server is running on ${PORT}`);
})

