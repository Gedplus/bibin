
import Document from "../models/Document.js";
import User from "../models/User.js";

import Reclamations from "../models/Reclamation.js";

export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "chercheur" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getDocuments = async (req, res) => {
  try {
    const products = await Document.find().sort({createdAt: -1}).populate("wishlist");
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getDocumentsUser = async (req, res) => {
  try {
    const products = await Document.find({ auteur: req.params.id}).sort({createdAt: -1}).populate("wishlist");
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const getUtilisateurs = async (req, res) => {
  try {
    const customers = await User.find({ role: "utilisateur" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getDocApprover = async (req, res) => {
  try {
    const customers = await Document.find({ accepte: false }).populate("wishlist");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getUtilisateursDemande = async (req, res) => {
  try {
    const customers = await User.find({ demande: true , approved: false}).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getAdmin = async (req, res) => {
  try {
    const customers = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


// deleting data of user from the database
export const deleteUser = async (request, response) => {
  try{
      await User.deleteOne({_id: request.params.id});
      response.status(201).json("Utilisateur supprimé avec succès");
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}
// Get a user by id
export const getUserById = async (request, response) => {
  try{
      const user = await User.findById(request.params.id);
      response.status(200).json(user);
  }catch( error ){
      response.status(404).json({ message: error.message })
  }
}
// Get a user by id
export const getDocumentById = async (request, response) => {
  try{
      const document = await Document.findById(request.params.id).populate("wishlist");
      response.status(200).json(document);
  }catch( error ){
      response.status(404).json({ message: error.message })
  }
}

// Save data of edited user in the database
export const editUser = async (request, response) => {
  const { id } = request.params;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, request.body, {
      new: true,
    });
    response.json(updatedUser);
  } catch (error) {
    throw new Error(error);}
}
export const editDocument = async (request, response) => {
  let document = request.body;
 
  const editDocument = new Document(document);
  try{
      await Document.updateOne({_id: request.params.id},{ $set: {accepte:true}});
      response.status(201).json(editDocument);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}
export const editDocumentI = async (request, response) => {
  let document = request.body;
console.log(document)
  const editDocument = new Document(document);
  try{
      await Document.updateOne({_id: request.params.id},{ $set: {interessant: document.interessant}});
      response.status(201).json(editDocument);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}
export const editDocumentU = async (request, response) => {
  let document = request.body;
console.log(document)
  const editDocument = new Document(document);
  try{
      await Document.updateOne({_id: request.params.id},{ $set: {utile: document.utile}});
      response.status(201).json(editDocument);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}

export const editDocumentE = async (request, response) => {
  let document = request.body;
console.log(document)
  const editDocument = new Document(document);
  try{
      await Document.updateOne({_id: request.params.id},{ $set: {excellent: document.excellent}});
      response.status(201).json(editDocument);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}
export const editDocumentP = async (request, response) => {
  let document = request.body;
console.log(document)
  const editDocument = new Document(document);
  try{
      await Document.updateOne({_id: request.params.id},{ $set: {pasvraiment: document.pasvraiment}});
      response.status(201).json(editDocument);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}
export const getDocumentsUniversite= async (req, res) => {
  try {
    const products = await Document.find({ universite: req.params.id, accepte:true}).sort({Annee: -1} ).populate("wishlist");
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getDocumentsType= async (req, res) => {
  try {
    const products = await Document.find({ type: req.params.id ,accepte:true}).sort({Annee: -1}).populate("wishlist");
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getsearchDoc= async (req, res) => {
  try {
    const products = await Document.find({titre: new RegExp(req.params.id , 'i'), accepte:true}).sort({Annee: -1}).populate("wishlist");
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getsearchDocTypeUni= async (req, res) => {
  try {
    const products = await Document.find({type: req.params.Type ,  universite: req.params.uni ,accepte:true}).sort({Annee: -1}).populate("wishlist");
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getsearchAvanDocTypeUni= async (req, res) => {
  try {
    const products = await Document.find({titre: new RegExp(req.params.mot , 'i') ,type: req.params.Type ,  universite: req.params.uni , accepte:true}).sort({Annee: -1}).populate("wishlist");
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};





export const getsearchDocAvan= async (req, res) => {
  try {
    console.log(req.params.id)
    console.log(req.params.mot)
    const products = await Document.find({titre: new RegExp(req.params.mot , 'i') ,  universite: req.params.id ,accepte:true}).sort({Annee: -1}).populate("wishlist");
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const editDocumentDI = async (request, response) => {
  let document = request.body;
console.log(document)
  const editDocument = new Document(document);
  try{
      await Document.updateOne({_id: request.params.id},{ $set: {interessant: document.interessant-1}});
      response.status(201).json(editDocument);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}
export const editDocumentDU = async (request, response) => {
  let document = request.body;
console.log(document)
  const editDocument = new Document(document);
  try{
      await Document.updateOne({_id: request.params.id},{ $set: {utile: document.utile-1}});
      response.status(201).json(editDocument);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}

export const editDocumentDE = async (request, response) => {
  let document = request.body;
console.log(document)
  const editDocument = new Document(document);
  try{
      await Document.updateOne({_id: request.params.id},{ $set: {excellent: document.excellent-1}});
      response.status(201).json(editDocument);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}

// Get a reclamation by id
export const getreclamationById = async (request, response) => {
  try{
      const reclamation = await Reclamations.findById(request.params.id);
      response.status(200).json(reclamation);
  }catch( error ){
      response.status(404).json({ message: error.message })
  }
}

export const addToWishlist = async (req, res) => {
  const { id1 } = req.params;

  const { prodId } = req.body;
  console.log( prodId )
  try {
    const document = await Document.findById(prodId);
console.log(id1,"ssss")

    const alreadyadded = document.wishlist.find((id) => id.toString() === id1);
    console.log(alreadyadded)
    if (alreadyadded) {
      let document = await Document.findByIdAndUpdate(
        prodId,
        {
          $pull: { wishlist: id1 },
        },
        {
          new: true,
        }
      );
     
      res.json(document);
    } else {
      let document = await Document.findByIdAndUpdate(
        prodId,
        {
          $push: { wishlist: id1 },
        },
        {
          new: true,
        }
      );
  
      res.json(document);
    }
  } catch (error) {
    throw new Error(error);
  }
};