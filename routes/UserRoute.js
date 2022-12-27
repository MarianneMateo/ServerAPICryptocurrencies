import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  signIn,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id_user", getUserById);
router.post("/users", createUser);
router.post("/sign-in", signIn);
router.patch("/users/:id_user", updateUser);
router.delete("/users/:id_user", deleteUser);

export default router;
