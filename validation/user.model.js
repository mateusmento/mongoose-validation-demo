import mongoose from 'mongoose';
import validation from './user.validation';
import validator from 'validator';
import validators from './validators.js';


let schema = new mongoose.Schema({
    username:   {type: String, validate: validation.Username},
    password:   {type: String, validate: validation.Password},
    name:       {type: String, validate: validation.Name},
    email:      {type: String, validate: validation.Email},
});

mongoose.Error.messages.general.required = "Path '{PATH}' is required.";
console.log(mongoose.Error.messages.general)

let User;
export default User = mongoose.model('User', schema);
