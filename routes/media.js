import express from "express";


import {
  createVideos,
    deleteMedia,
    editMedia,
    editMediaE,
    editMediaI,
    editMediaP,
    editMediaU,
    getMediaById,
    getVideos
  
  } from "../controllers/mediaController.js";
  import multer from 'multer';
  import fs from 'fs'
  import * as path from 'path';
const router = express.Router();

const storage = multer.diskStorage({
destination : function(req , file , cb){
  if(!fs.existsSync("public")){
    fs.mkdirSync("public");
  }
  if( !fs.existsSync("public/videos")){
    fs.mkdirSync("public/videos");
  }
  cb(null, "public/videos");
},
filename: function (req , file , cb) {
  cb( null , Date.now() + file.originalname);
},
})
const upload = multer ({
  storage : storage, 
  fileFilter: function(req , file ,cb){
    var ext = path.extname(file.originalname);
    if(ext != ".mkv" && ext != ".mp4"){
return cb( new Error("Only videos are allowed! "));
    }
    cb(null , true)

  },
});
router.get("/all", getVideos);
router.post("/create", upload.fields ([{name: "videos", maxCount: 5,},]), createVideos);
router.put('/mediaI/:id', editMediaI);
router.put('/mediaU/:id', editMediaU);
router.put('/mediaE/:id', editMediaE);
router.put('/mediaP/:id', editMediaP);
router.delete('/:id', deleteMedia);
router.get('/:id', getMediaById);
router.put('/:id', editMedia);
export default router;