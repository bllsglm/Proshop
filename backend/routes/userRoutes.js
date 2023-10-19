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


router.route("/").post(registerUser).get(getUsers);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router.route("/profile").put(updateUserProfile).get(getUserProfile)
router.route("/:id").put(updateUser).get(getUserById).delete(deleteUser)


export default router















