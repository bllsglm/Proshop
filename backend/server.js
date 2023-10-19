import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import Product from "./models/productModel.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const PORT = process.env.PORT || 5000 ;
connectDB();

const app = express();
//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/api", async(req,res) => {
  const response = await Product.find()
  res.send(response)
})

app.use("/api/products" , productRoutes);
app.use("/api/users", userRoutes); 


app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=> {
  console.log(`Your server is running on ${PORT}`);
})

