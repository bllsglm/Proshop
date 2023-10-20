import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  updateUserProfile
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";


router.route("/").post(registerUser).get(protect,admin, getUsers);
router.post("/logout", logoutUser);
router.post("/auth", authUser);
router.route("/profile").put(protect,updateUserProfile).get(protect, getUserProfile)
router.route("/:id").put(protect,admin,updateUser).get(protect,admin,getUserById).delete(protect,admin,deleteUser)


export default router















