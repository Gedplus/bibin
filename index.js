import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import commandeRoutes from "./routes/commande.js";
import packRoutes from "./routes/pack.js";
import mediaRoutes from "./routes/media.js";
import User from "./models/User.js";
import {
  dataContact,
  dataUser,

} from "./data/index.js";
import jsonwebtoken from 'jsonwebtoken';
import Contact from "./models/Contact.js";
  import * as path from 'path';
  import url from 'url';
const JWT_SECRET ="cvkj,lvf:<xif;12345679voq,nf,kjqezkddpdlcgm(çfro;[]mfd)édfffklfdjjssnnffpzooaiehqlqmaezertyop^mksjiw"

/* CONFIGURATION */
dotenv.config();
const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb' }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use("/client", clientRoutes);
app.use("/commande", commandeRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/media", mediaRoutes);
app.use("/pack", packRoutes);
app.use("/public" , express.static(path.join(__dirname,"public")))
/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));


  })
  .catch((error) => console.log(`${error} did not connect`));
  app.post("/login-user", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if (user) {
      const token = jsonwebtoken.sign({ email: user.email }, JWT_SECRET, {
        expiresIn: "15m",
      });
  
      if (res.status(201)) {
        return res.json({ status: "ok", data: user });
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "InvAlid Password" });
  });
  app.post("/register", async (req, res)=> {
    const {name ,email , password,role} = req.body;
    try{
      await User.create({
        name,
        email,
        password,
        role
      });
      res.send({ status:"ok"});
    }catch(error){
      res.send({status:"error"});
    }
  })