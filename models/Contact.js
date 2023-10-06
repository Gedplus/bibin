import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';
const ContactSchema = new mongoose.Schema(
  {
   
 

    subject: String,
    message: String,

         
  },
  { timestamps: true }
);


const Contact = mongoose.model("Contact", ContactSchema);
export default Contact;