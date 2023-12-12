
import User from "../models/User.js";
import { sendEmail } from "./emailCtrl.js";
import crypto from 'crypto'
export const createUser = async (req, res) => {
    /**
     * TODO:Get the email from req.body
     */

    const email = req.body.email;
    /**
     * TODO:With the help of email find the user exists or not
     */

    try {
    
      
      /**
       * TODO:if user not found user create a new user
       */
      const newUser = await User.create(req.body);
      res.json(newUser);
     }
      /**
       * TODO:if user found then thow an error: User already exists
       */
   catch (error) {
    res.status(404).json({ message: "User Already Exists" });

  }
    
  };


// Login a user
export const loginUserCtrl = async (req, res) => {
    const { email, password } = req.body;
    // check if user exists or not
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
  
   
      res.json({
        _id: findUser?._id,
        name: findUser?.name,
        email: findUser?.email,
        phoneNumber: findUser?.phoneNumber,

      });
    } else {
      throw new Error("Invalid Credentials");
    }
  };

  // admin login

export const loginAdmin =async (req, res) => {
    const { email, password } = req.body;
    // check if user exists or not
    const findAdmin = await User.findOne({ email });
    console.log(findAdmin)
    if (findAdmin.role !== "admin") throw new Error("Not Authorised");
    if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
    
      res.json({
        _id: findAdmin?._id,
        name: findAdmin?.name,
        email: findAdmin?.email,
        phoneNumber: findAdmin?.phoneNumber,

      });
    } else {
      throw new Error("Invalid Credentials");
    }
  };
  
 export const forgotPasswordToken = async (req, res) => {
    console.log(req.body)
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found with this email");
    try {
      const token = await user.createPasswordResetToken();
      await user.save();
      const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='https://bibintunisie.com/reset-password/${token}'>Click Here</>`;
      const data = {
        to: email,
        text: "Hey User",
        subject: "Forgot Password Link",
        htm: resetURL,
      };
      sendEmail(data);
      res.json(token);
    } catch (error) {
      throw new Error(error);
    }
  };
  export const forgotPasswordTokenAdmin = async (req, res) => {
    console.log(req.body)
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found with this email");
    try {
      const token = await user.createPasswordResetToken();
      await user.save();
      const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='https://admin.bibintunisie.com/reset-password/${token}'>Click Here</>`;
      const data = {
        to: email,
        text: "Hey User",
        subject: "Forgot Password Link",
        htm: resetURL,
      };
      sendEmail(data);
      res.json(token);
    } catch (error) {
      throw new Error(error);
    }
  };
  export const resetPassword = async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) throw new Error(" Token Expired, Please try again later");
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.json(user);
  };
  export const getAdmin = async (req, res) => {
    try {
      const customers = await User.find({ role: "admin" }).select("-password");
      res.status(200).json(customers);
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
  export const getUtilisateursDemande = async (req, res) => {
    try {
      const customers = await User.find({ demande: true , approved: false}).select("-password");
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
  // Save data of edited user in the database
export const editUser = async (request, response) => {
    let user = request.body;
  
    const editUser = new User(user);
    try{
        await User.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
  }