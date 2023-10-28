import express from "express";
const router = express.Router();
import {getTopProducts ,createProductReview,deleteProduct, getProductById, getProducts, createProduct, updateProducts } from "../controllers/productController.js";
import {protect, admin} from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect ,admin ,createProduct)
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProducts)
  .delete(protect, admin, deleteProduct)
router.route("/:id/reviews").post(protect, createProductReview)

export default router
 














