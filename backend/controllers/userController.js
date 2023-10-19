import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

// desc Auth User and get Token
// route  POST /api/users/login
// @access Public
const authUser = asyncHandler(async(req,res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email})
  
  if(user && (await user.matchPasswords(password))){
    const token =  jwt.sign({userId : user._id}, process.env.JWT_SECRET, {
      expiresIn:'30d'
    } )

    //Set JWT as HTTP-Only cookie
    res.cookie('jwt', token,{
      httpOnly : true,
      secure : process.env.NODE_ENV !== 'development',
      sameSite : 'strict',
      maxAge : 1000 * 60 * 60 * 24 * 30 //30 days
    } )

    res.json({
      _id: user._id,
      name: user.name,
      email:user.email,
      isAdmin : user.isAdmin
    })
  }else{
    res.status(401)
    throw new Error('Invalid email or password')
  }
  
})


// desc Register User
// route  POST /api/users
// @access Public
const registerUser = asyncHandler(async(req,res) => {
  res.send('register user')
})


// desc Logout User / Clear Cookie
// route  POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async(req,res) => {
  res.send('logout user')
})


// desc Get User Profile
// route  GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async(req,res) => {
  res.send('get user profile')
})


// desc Update User Profile
// route  PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async(req,res) => {
  res.send('update user profile')
})



// desc Get Users
// route  GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async(req,res) => {
  res.send('get users')
})


// desc Get Users by id
// route  GET /api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async(req,res) => {
  res.send('get users by id')
})


// desc Delete Users
// route  DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async(req,res) => {
  res.send('delete user')
})

// desc Update Users
// route  PUT /api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async(req,res) => {
  res.send('update user')
})

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  updateUserProfile
}