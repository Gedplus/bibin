import express from "express";
import { addPack, deletePack, editPack, getPack, getPackById } from "../controllers/packController.js";



const router = express.Router();

router.post("/packAdd", addPack);
router.get("/all", getPack);
router.delete('/:id', deletePack);
router.get('/:id', getPackById );
router.put('/:id', editPack);
export default router;