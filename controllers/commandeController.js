import Commande from "../models/Commande.js";

export const addCommande = async (request, response) => {
    const commande = request.body;
    
    const newCommande = new Commande(commande);
    try{
        await newCommande.save();
        response.status(201).json(newCommande);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
export const getAchats = async (req, res) => {
    try {
      const achats = await Commande.find({ user_id: req.params.id});
      res.status(200).json(achats);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  export const getCommande = async (req, res) => {
    try {

      const commande = await Commande.find();
      res.status(200).json(commande);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }; 
  export const getCommandeById = async (request, response) => {
    try{
        const commande = await Commande.findById(request.params.id);
        response.status(200).json(commande);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
  }