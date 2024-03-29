import express from "express";
import {

  addToWishlist,
  deleteUser,
  editDocument,
  editDocumentDE,
  editDocumentDI,
  editDocumentDU,
  editDocumentE,
  editDocumentI,
  editDocumentP,
  editDocumentU,
  editUser,
  getAdmin,
  getCustomers,
  getDocApprover,
  getDocumentById,
  getDocuments,
  getDocumentsType,
  getDocumentsUniversite,
  getDocumentsUser,
  getUserById,
  getUtilisateurs,
  getUtilisateursDemande,
  getreclamationById,
  getsearchAvanDocTypeUni,
  getsearchDoc,
  getsearchDocAvan,
  getsearchDocTypeUni,
  updatesoldeUser,

} from "../controllers/client.js";


const router = express.Router();

router.get("/customers", getCustomers);

router.get("/Admin", getAdmin);
router.get("/utilisateurs", getUtilisateurs);
router.get("/utilisateursDemande", getUtilisateursDemande);
router.get("/documents", getDocuments);
router.get("/DocApprover", getDocApprover);
router.get('/documentsUser/:id', getDocumentsUser); 
router.get('/documentsU/:id', getDocumentsUniversite);
router.get('/documentsType/:id', getDocumentsType);
router.get('/Search/:id', getsearchDoc);
router.get('/TypeUni/:uni/:Type', getsearchDocTypeUni);
router.get('/SearchAvanTypeUni/:uni/:Type/:mot', getsearchAvanDocTypeUni);
router.get('/SearchAvan/:id/:mot', getsearchDocAvan);
router.put('/documents/:id', editDocument);
router.put('/documentsI/:id', editDocumentI);
router.put('/documentsU/:id', editDocumentU);
router.put('/documentsE/:id', editDocumentE);
router.put('/documentsP/:id', editDocumentP);
router.delete('/:id', deleteUser);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.get('/Doc/:id', getDocumentById);
router.put("/wishlist/:id1", addToWishlist)
router.put("/editsold/:id" ,updatesoldeUser)

router.put('/documentsDI/:id', editDocumentDI);
router.put('/documentsDU/:id', editDocumentDU);
router.put('/documentsDE/:id', editDocumentDE);
router.get('/reclamation/:id', getreclamationById);
export default router;