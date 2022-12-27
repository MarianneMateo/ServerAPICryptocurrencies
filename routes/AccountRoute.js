import express from "express";
import {
  getAccounts,
  getAccountById,
  getAccountByUserId,
  createAccount,
  updateAccount,
  deleteAccount,
} from "../controllers/AccountController.js";

const router = express.Router();

router.get("/accounts", getAccounts);
router.get("/accounts/:id_account", getAccountById);
router.get("/user_accounts/:id_user", getAccountByUserId);
router.post("/accounts", createAccount);
router.patch("/accounts/:id_account", updateAccount);
router.delete("/accounts/:id_account", deleteAccount);

export default router;