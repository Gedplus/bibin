import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';
const DemandeSchema = new mongoose.Schema(
  {

    user: String,
    name: String,
     email: String,
     phoneNumber: String,
    traiter :  {
        type: Boolean    ,
     
        default: false,
      },

         
  },
  { timestamps: true }
);


const Demandes = mongoose.model("demande", DemandeSchema);
export default Demandes;