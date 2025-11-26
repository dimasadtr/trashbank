import express from "express";
import { getRiwayat, createRiwayat } from "../controllers/riwayatctrl.js";

const router = express.Router();

router.get("/", getRiwayat);
router.post("/", createRiwayat);

export default router;
