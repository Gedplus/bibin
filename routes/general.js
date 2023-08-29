
import express from "express";
import {  addContact, addDocument, addReclamation, addUser, deleteContact, deleteDoc, deleteReclation, getContact, getReclation, getUser} from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.post("/Useradd", addUser);
router.get("/contact", getContact);
router.post("/contactAdd", addContact);
router.delete('/contact/:id', deleteContact);
router.post("/ReclamationAdd", addReclamation);
router.get("/Reclation", getReclation);
router.delete('/Reclation/:id', deleteReclation);
router.post("/DocumentAdd", addDocument);
router.delete('/:id', deleteDoc);
export default router; 