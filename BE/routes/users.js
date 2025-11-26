import express from "express";
import {
  getUsers,
  getUserByNim,
  updateUser,
  deleteUser
} from "../controllers/userctrl.js";

const router = express.Router();

router.get("/", getUsers);          
router.get("/:nim", getUserByNim);   
router.put("/:nim", updateUser);   
router.delete("/:nim", deleteUser);  

export default router;
