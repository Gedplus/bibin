import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';
const DocumentSchema = new mongoose.Schema(
  {
   
    statue: {
      type: String,
    
    },
auteur: String,
    document: String,
    type: String,
    universite: String,
    prixLecture: String,
    prixTelechargement: String,
    profession: String,
    carteIdentite: String,
    pieceJustificatif: String,
    titre: String,
    description: String,
    accepte:  {
      type: Boolean ,
   
      default: false,
    },
    period : String,
    interessant:  {
      type: Number  ,
   
      default: 0,
    },
    utile:  {
      type: Number  ,
   
      default: 0,
    },
    excellent :  {
      type: Number  ,
   
      default: 0,
    },
    pasvraiment :  {
      type: Number    ,
   
      default: 0,
    },
  },
  { timestamps: true }
);


const Document = mongoose.model("Document", DocumentSchema);
export default Document;