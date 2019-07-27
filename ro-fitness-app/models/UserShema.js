var mongoose = require("mongoose");

var Schema = mongoose.Schema; 
// lastName, firstName, emailAddress, birthday, location, gender, 
var UserSchema = new Schema({
    firstName :{
        type: String, 
        required: true, 
        trim: true
    }, 
    lastName :{
        type: String, 
        required: true, 
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
        required: true, 
        trim: true
    },
    gender :{
        type: String, 
        required: true, 
        trim: true
    },
    birthday :{
        type: String, 
        required: true, 
        trim: true
    }
});

var User = mongoose.model("User", UserSchema); 

module.exports = User;  