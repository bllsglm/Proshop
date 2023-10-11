import express from "express";
const router = express.Router();
import Product from "../models/productModel.js";

router.get("/" , async(req,res) => {
  const response = await Product.find();
  res.json(response);
})


router.get("/:id", async(req,res) => {
  const _id = req.params.id;
  const response = await Product.findById(_id);
  res.json(response)
})


export default router

















