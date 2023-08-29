import express from "express";
import { addCommande, getAchats, getCommande, getCommandeById } from "../controllers/commandeController.js";



const router = express.Router();
router.post("/CommandeAdd", addCommande);
router.get("/Commande", getCommande);
router.get("/:id", getAchats);
router.get('/commande/:id', getCommandeById);
export default router;