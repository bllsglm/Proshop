import path from 'path'
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
import uploadRoutes from './routes/uploadRoutes.js'

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
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req,res) => res.send({ clientId: process.env.PAYPAL_CLIENT_ID }))

const __dirname = path.resolve(); // Set __dirname to current directory
app.use('/uploads' , express.static(path.join(__dirname, '/uploads')));

if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static(path.join(__dirname, "/frontend/build")))

  app.get('*', (req,res)=> 
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
}else{
  app.get('/', (req,res)=> {
    res.send('API is running');
  })
}

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=> {
  console.log(`Your server is running on ${PORT}`);
})

