const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookiesParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const app = express();
app.use(cors());
app.use(cookiesParser());
app.use(express.json());
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
   // useFindAndModify: false, 
    useUnifiedTopology: true,
    //useCreateIndex: true,
}).then(console.log("connected to db")).catch((err)=>console.log(err));

app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.listen(8000, ()=>{
    console.log('server is runnig');
})
