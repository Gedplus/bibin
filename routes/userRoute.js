import express from "express";
import {


    createUser, deleteUser, editUser, forgotPasswordToken, forgotPasswordTokenAdmin, getAdmin, getUserById, getUtilisateurs, getUtilisateursDemande, loginAdmin, loginUserCtrl, resetPassword
  } from "../controllers/userCtrl.js";


const router = express.Router();

router.post("/register",createUser);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin); 
router.post("/forget-password-token", forgotPasswordToken)
router.post("/forget-password-token-admin", forgotPasswordTokenAdmin)
router.put("/reset-password/:token", resetPassword)

export default router;