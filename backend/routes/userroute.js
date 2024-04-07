const express = require("express")

const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');





const User = require("../models/usermodel")
const router = express.Router()

//create
router.post("/", async (req, res) => {
    try {
        const { name, email, age } = req.body; 
        const user = await User.create({
            name: name,
            email: email,
            age: age
        });
        res.send({ user });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
});




router.get("/", async(req,res)=>{
    try{
    const users = await User.find()
    res.send({users})
    }catch(error){
        console.log(error)
        res.send(400).json({message : error.message})
    }
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


// Delete

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deleteduser = await User.findByIdAndDelete({ _id: id });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
});




// Update user by ID
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update user properties if they are provided in the request body
        if (name) user.name = name;
        if (email) user.email = email;
        if (age) user.age = age;

        await user.save();

        res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;



