const express = require("express")

const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const cors = require('cors');
app.use(cors());

const userroutes = require('C:/Users/amris/OneDrive/Desktop/mernstack/backend/routes/userroute');

const User = require('./models/usermodel');
app.use(express.json())


mongoose.connect(process.env.URI).then(() => {
    console.log("connected to db")
    app.listen(process.env.PORT, () => {
        console.log("server running on port" , process.env.PORT)
    })
}).catch((err) => {
    console.log(err)
})
app.use( userroutes)



 
