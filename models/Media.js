import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';
const MediaSchema = new mongoose.Schema(
  {
   name:{
    type : String,
    required : true,
   },
   videos :[{type : String}],
   auteur: String,
   prix : String ,

   description: String,
   period : Number,
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


const Media = mongoose.model("Media", MediaSchema);
export default Media;