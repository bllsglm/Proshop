import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import Product from "./models/productModel.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js"
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 5000 ;
connectDB();

const app = express();
//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser()); 


app.get("/api", async(req,res) => {
  const response = await Product.find()
  res.send(response)
})

app.use("/api/products" , productRoutes);
app.use("/api/users", userRoutes); 
app.use("/api/orders", orderRoutes);


app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=> {
  console.log(`Your server is running on ${PORT}`);
})

