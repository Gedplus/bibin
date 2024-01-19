import mongoose from "mongoose";
import bcrypt from "bcrypt";
import crypto from 'crypto'
var url = "https://i.stack.imgur.com/34AD2.jpg";
const UserSchema = new mongoose.Schema(
  {
   name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    image:  {type: String, default: url},
    demande:  {
      type: Boolean ,
   
      default: false,
    },
    justificative: {
      type: String ,
   
      default: "",
    },
    CIN: {
      type: String ,
   
      default: "",
    },
    approved: {
      type: Boolean ,
   
      default: false,
    }, 
    statue: {
      type: String,
    },
 
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Document" }],
    phoneNumber: String,

    role: {
      type: String,
      enum: ["utilisateur", "admin"],
      default: "utilisateur",
    },
    
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  { timestamps: true }


);
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
UserSchema.methods.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
UserSchema.methods.createPasswordResetToken = async function () {
  const resettoken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resettoken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 30 * 60 * 1000; // 10 minutes
  return resettoken;
};

const User = mongoose.model("User", UserSchema);
export default User;