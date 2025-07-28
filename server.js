const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

//load env vars
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//routes
const authRoutes = require("./src/routes/auth.routes");
app.use("/auth",authRoutes);

//Mongoose DB connect
 mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("mongo DB connected"))
.catch((e)=>console.log("DB connect failed:  ",e));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
console.log("server running on local host port  :",PORT);
});


