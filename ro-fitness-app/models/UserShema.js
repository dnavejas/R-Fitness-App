var mongoose = require("mongoose");

var Schema = mongoose.Schema; 

var UserSchema = new Schema({
    firstName :{
        type: String, 
        required: false, 
        trim: true
    }, 
    lastName :{
        type: String, 
        required: false, 
        trim: true
    },
    emailAddress :{
        type: String, 
        required: true, 
        trim: true, 
        validate : [
            (input) => input.indexOf("@") !== -1
            /**
             * Above is same as below: 
             * 
             * function (input) {
             * return input.indexOf("@") !== -1; 
             * }
             */
        ]
    },
    location :{
        type: String, 
        required: false, 
        trim: true
    },
    gender :{
        type: String, 
        required: false, 
        trim: true
    },
    birthday :{
        type: String, 
        required: false, 
        trim: true
    },
    password :{
        type: String, 
        required: true, 
        trim: true
    }, loggedIn: {
        default:false,
        type: Boolean
    }
},{
    collection: 'users'
});


module.exports = mongoose.model("UserSchema", UserSchema); 