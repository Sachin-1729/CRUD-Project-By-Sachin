const mongoose = require("mongoose");
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"], // Enhanced error message
        unique: true,
        validate: {
            validator: function(v) {
                return emailRegex.test(v);
            },
            message: props => `${props.value} is not a valid email address!` // Custom message for validation failure
        }
    }
    ,
    // password: {
    //     type: String,
    //     required: true,
    // },
    age: {
        type: Number,
        
    }
} , {
    timestamps: true
});

//create model

const User = mongoose.model("User", userSchema);
module.exports = User