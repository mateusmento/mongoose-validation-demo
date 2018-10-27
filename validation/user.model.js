import mongoose from 'mongoose';
import validation from './user.validation';
import validator from 'validator';
import validators from './validators.js';


let schema = new mongoose.Schema({
    username:   {type: String, required: true validate: validation.username},
    password:   {type: String, required: true validate: validation.password},
    name:       {type: String, required: true validate: validation.name},
    email:      {type: String, required: true validate: validation.email},
});

mongoose.Error.messages.general.required = "Path '{PATH}' is required.";
console.log(mongoose.Error.messages.general)

let User;
export default User = mongoose.model('User', schema);
