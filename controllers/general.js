import Contact from "../models/Contact.js";
import Document from "../models/Document.js";
import Reclamations from "../models/Reclamation.js";
import User from "../models/User.js";

export const getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }; 
  export const addUser = async (request, response) => {
    const user = request.body;
    
    const newUser = new User(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
export const addContact = async (request, response) => {
  const contact = request.body;
  
  const newContact = new Contact(contact);
  try{
      await newContact.save();
      response.status(201).json(newContact);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}
export const addReclamation = async (request, response) => {
  const reclamation = request.body;
  
  const newReclamation = new Reclamations(reclamation);
  try{
      await newReclamation.save();
      response.status(201).json(newReclamation);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
} 
export const getContact = async (req, res) => {
  try {
    const Contacts= await Contact.find();
    res.status(200).json(Contacts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getReclation = async (req, res) => {
  try {
    const reclamations= await Reclamations.find();
    res.status(200).json(reclamations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const deleteContact= async (request, response) => {
  try{
      await Contact.deleteOne({_id: request.params.id});
      response.status(201).json("Contact supprimé avec succès");
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}
export const deleteReclation= async (request, response) => {
  try{
      await Reclamations.deleteOne({_id: request.params.id});
      response.status(201).json("Contact supprimé avec succès");
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}
export const addDocument = async (request, response) => {
  const Documents = request.body;
  
  const newDocument = new Document(Documents);
  try{ 
      await newDocument.save();
      response.status(201).json(newDocument);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}
// deleting data of user from the database
export const deleteDoc = async (request, response) => {
  try{
      await Document.deleteOne({_id: request.params.id});
      response.status(201).json("doc supprimé avec succès");
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}

export const getDocuemnt = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Document.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}; 