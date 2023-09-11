import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';
var url = "https://i.stack.imgur.com/34AD2.jpg";
const UserSchema = new mongoose.Schema(
  {
   name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    image:  {type: String, default: url},
    demande:  {
      type: Boolean ,
   
      default: false,
    },
    justificative: {
      type: String ,
   
      default: "",
    },
    CIN: {
      type: String ,
   
      default: "",
    },
    approved: {
      type: Boolean ,
   
      default: false,
    }, 
    statue: {
      type: String,
    
    },
    city: String,
    street: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    information: String,
    role: {
      type: String,
      enum: ["utilisateur", "admin", "chercheur"],
      default: "utilisateur",
    },
    
         
  },
  { timestamps: true }
);


const User = mongoose.model("User", UserSchema);
export default User;