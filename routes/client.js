import express from "express";
import {

  deleteUser,
  editDocument,
  editDocumentE,
  editDocumentI,
  editDocumentP,
  editDocumentU,
  editUser,
  getAdmin,
  getCustomers,
  getDocumentById,
  getDocuments,
  getUserById,
  getUtilisateurs,
  getUtilisateursDemande,

} from "../controllers/client.js";


const router = express.Router();

router.get("/customers", getCustomers);

router.get("/Admin", getAdmin);
router.get("/utilisateurs", getUtilisateurs);
router.get("/utilisateursDemande", getUtilisateursDemande);
router.get("/documents", getDocuments);
router.put('/documents/:id', editDocument);
router.put('/documentsI/:id', editDocumentI);
router.put('/documentsU/:id', editDocumentU);
router.put('/documentsE/:id', editDocumentE);
router.put('/documentsP/:id', editDocumentP);
router.delete('/:id', deleteUser);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.get('/Doc/:id', getDocumentById);
export default router;