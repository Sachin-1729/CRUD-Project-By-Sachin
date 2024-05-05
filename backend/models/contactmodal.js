// const mongoose = require("mongoose");

// const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// const ContactSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, "Name is required"], // Enhanced error message
//     },
//     email: {
//         type: String,
//         required: [true, "Email is required"], // Enhanced error message
//         unique: true,
//         // validate: {
//         //     validator: function(v) {
//         //         return emailRegex.test(v);
//         //     },
//         //     message: props => `${props.value} is not a valid email address!` // Custom message for validation failure
//         // }
//     }
// }, {
//     timestamps: true
// });

// const Contact = mongoose.model("Contact", ContactSchema);
// module.exports = Contact;

const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    // password: {
    //     type: String,
    //     required: true,
    // },
    // age: {
    //     type: Number,
        
    // }
} , { 
    timestamps: true
});

//create model

const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact