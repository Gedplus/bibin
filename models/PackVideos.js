import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';
const PackSchema = new mongoose.Schema(
  {
    title:{
        type : String,
        required : true,
       },
   videos :[{type : String}],
  
   prix : String ,

   description: String,
   period : Number,
   image:  {type: String},
  
  },
  { timestamps: true }
);


const Pack = mongoose.model("PackVideo", PackSchema);
export default Pack;