import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';
const ReclamationsSchema = new mongoose.Schema(
  {

      
    
    NomPrenom: String,
    CIN: String,
    justificative:  String,
    message: String,
    phoneNumber: String,
    Email: String,
         
  },
  { timestamps: true }
);


const Reclamations = mongoose.model("Reclamations", ReclamationsSchema);
export default Reclamations;