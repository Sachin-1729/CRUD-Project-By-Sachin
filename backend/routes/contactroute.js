const express = require("express")

const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
dotenv.config();






const Contact = require("../models/contactmodal")
const contactRouter = express.Router()

//create
contactRouter.post("/contact", async (req, res) => {
    try {
        const { name, email } = req.body; 
        const user = await Contact.create({
            name: name,
            email: email,
            
        });
        res.send({ user });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
});

contactRouter.get("/contact", async(req,res)=>{
    try{
    const users = await Contact.find()
    res.send({users})
    }catch(error){
        console.log(error)
        res.send(400).json({message : error.message})
    }
})

module.exports = contactRouter;



