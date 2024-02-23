import Contact from "../models/Contact.js";
import Document from "../models/Document.js";
import Reclamations from "../models/Reclamation.js";
import User from "../models/User.js";
import Demandes from "../models/demandevirement.js";

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
export const addDemande = async (request, response) => {
  const demande = request.body;
  
  const newDemande = new Demandes(demande);
  try{
      await newDemande.save();
      response.status(201).json(newDemande);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}
export const getDemande = async (req, res) => {
  try {
    const demandes = await Demandes.find({ traiter: false });
    res.status(200).json(demandes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const deleteDemande = async (request, response) => {
  try{
      await Demandes.deleteOne({_id: request.params.id});
      response.status(201).json("doc supprimé avec succès");
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}

export const getaDemande = async (req, res) => {
  try {
    const { id } = req.params;
    const demande = await Demandes.findById(id);
    res.status(200).json(demande);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}; 
export const updatesoldeTraiter = async (req, res) => {
  const id = req.params;
console.log(id)
let solde = req.body.solde;
console.log(solde)
const useredit = await User.find({_id: id.id});

try{
  console.log(useredit)
  await User.updateOne({_id: id.id},{ $set: {solde: useredit[0].solde - solde }} );
  res.status(201).json(useredit);
} catch (error){
res.status(409).json({ message: error.message});     
}

}
export const editDemande = async (request, response) => {
  let document = request.body;
console.log(document)
  const editDemande = new Demandes(document);
  try{
      await Demandes.updateOne({_id: request.params.id},{ $set: {traiter :true}});
      response.status(201).json(editDemande);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}
