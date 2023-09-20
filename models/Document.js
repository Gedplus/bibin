import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';
var url = "../data/image.jpg";
const DocumentSchema = new mongoose.Schema(
  {
   
  
auteur: String,
    document: String,
    type: String,
    universite: String,
    prixLecture: String,
    prixTelechargement: String,
    profession: String,
    Annee: String,
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
    image:  {type: String, default: url},
  },
  { timestamps: true }
);


const Document = mongoose.model("Document", DocumentSchema);
export default Document;