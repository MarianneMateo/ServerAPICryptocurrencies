import express from "express";
import {
  getCryptos,
  getCryptoById,
  getCryptoByUserId,
  createCrypto,
  updateCrypto,
  deleteCrypto,
} from "../controllers/CryptoController.js";

const router = express.Router();

router.get("/cryptos", getCryptos);
router.get("/cryptos/:id_crypto", getCryptoById);
router.get("/user_cryptos/:id_user", getCryptoByUserId);
router.post("/cryptos", createCrypto);
router.patch("/cryptos/:id_crypto", updateCrypto);
router.delete("/cryptos/:id_crypto", deleteCrypto);

export default router;
