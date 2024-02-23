import express from "express";
import { add, verifye } from "../controllers/payement.js";

const router = express.Router();

router.post("/payement" , add)
router.post("/payement/:id" , verifye)
export default router;