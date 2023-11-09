import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';
const ContactSchema = new mongoose.Schema(
  {
   
 
    email: {
      type: String,
      required: true,
      max: 50,

    },
    subject: String,
    message: String,

         
  },
  { timestamps: true }
);


const Contact = mongoose.model("Contact", ContactSchema);
export default Contact;