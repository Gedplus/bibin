import Pack from "../models/PackVideos.js";

export const addPack = async (request, response) => {
    const pack = request.body;
    
    const newPack = new Pack(pack);
    try{
        await newPack.save();
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
export const getPack = async (req, res) => {
    try { 

      const pack = await Pack.find();
      res.status(200).json(pack);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }; 
    // deleting data of user from the database
export const deletePack = async (request, response) => {
    try{
        await Pack.deleteOne({_id: request.params.id});
        response.status(201).json("Video supprimé avec succès");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
  }
  // Get a user by id
export const getPackById = async (request, response) => {
    try{
        const pack = await Pack.findById(request.params.id);
        response.status(200).json(pack);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
  }
  // Save data of edited user in the database
export const editPack = async (request, response) => {
    let pack = request.body;
  
    const editPack = new Pack(pack);
    try{
        await Pack.updateOne({_id: request.params.id}, editPack);
        response.status(201).json(editPack);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
  }