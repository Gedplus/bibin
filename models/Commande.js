import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';
const CommandeSchema = new mongoose.Schema(
  {
   
    user_id: {
      type: String,
      required: true,
      max: 50,
    
    },

    user_email: String,
    Total : String,
    product : [{   type: Object, }]

         
  },
  { timestamps: true }
);


const Commande = mongoose.model("Commande", CommandeSchema);
export default Commande;