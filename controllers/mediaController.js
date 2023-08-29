import Media from "../models/Media.js";

export const getVideos = async (req, res) => {
    try {

      const media = await Media.find();
      res.status(200).json(media);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }; 
  export const createVideos = async (req , res ) => {
    const {name} = req.body;
    const {auteur} = req.body;
    const {prix} = req.body;
    const {description} = req.body;
    const {period} = req.body;
    let videosPaths = [];
    if(Array.isArray(req.files.videos) && req.files.videos.length > 0){
      for(let video of req.files.videos){
        videosPaths.push("/" + video.path);

      }
    }
    try {
      const createdMedia = await Media.create ({
        name ,
        auteur,
        prix,
        description,
        period,
        videos: videosPaths,
      });
      res.json ({message :" media created successfully ", createdMedia });

    }catch (error) {
      console.log (error);
      res.status(400).json(error);
    }
  }
  // deleting data of user from the database
export const deleteMedia = async (request, response) => {
  try{
      await Media.deleteOne({_id: request.params.id});
      response.status(201).json("Video supprimé avec succès");
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}
// Get a user by id
export const getMediaById = async (request, response) => {
  try{
      const media = await Media.findById(request.params.id);
      response.status(200).json(media);
  }catch( error ){
      response.status(404).json({ message: error.message })
  }
}


// Save data of edited user in the database
export const editMedia = async (request, response) => {
  let media = request.body;

  const editMedia = new Media(media);
  try{
      await Media.updateOne({_id: request.params.id}, editMedia);
      response.status(201).json(editMedia);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}
export const editMediaI = async (request, response) => {
  let media = request.body;
console.log(media)
  const editMedia = new Media(media);
  try{
      await Media.updateOne({_id: request.params.id},{ $set: {interessant: media.interessant}});
      response.status(201).json(editMedia);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}
export const editMediaU = async (request, response) => {
  let media = request.body;
console.log(media)
  const editMedia = new Media(media);
  try{
      await Media.updateOne({_id: request.params.id},{ $set: {utile: media.utile}});
      response.status(201).json(editMedia);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}

export const editMediaE = async (request, response) => {
  let media = request.body;
console.log(media)
  const editMedia = new Media(media);
  try{
      await Media.updateOne({_id: request.params.id},{ $set: {excellent: media.excellent}});
      response.status(201).json(editMedia);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}
export const editMediaP = async (request, response) => {
  let media = request.body;
console.log(media)
  const editMedia = new Media(media);
  try{
      await Media.updateOne({_id: request.params.id},{ $set: {pasvraiment: media.pasvraiment}});
      response.status(201).json(editMedia);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}