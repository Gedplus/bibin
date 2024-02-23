
import express from "express";
import {  addContact, addDemande, addDocument, addReclamation, addUser, deleteContact, deleteDemande, deleteDoc, deleteReclation, editDemande, getContact, getDemande, getDocuemnt, getReclation, getUser, getaDemande, updatesoldeTraiter} from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/Document/:id", getDocuemnt);
router.get("/Demandes", getDemande);
router.post("/Useradd", addUser); 
router.post("/Demandeadd", addDemande); 
router.get("/contact", getContact);
router.post("/contactAdd", addContact);
router.delete('/contact/:id', deleteContact);
router.post("/ReclamationAdd", addReclamation);
router.get("/Reclation", getReclation);
router.delete('/Reclation/:id', deleteReclation);
router.post("/DocumentAdd", addDocument);
router.delete('/:id', deleteDoc);
router.delete('/demande/:id', deleteDemande);
router.get("/Demande/:id", getaDemande);
router.put("/editsolddemande/:id" ,updatesoldeTraiter)
router.put("/editdemande/:id" ,editDemande)
export default router; 