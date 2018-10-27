import mongoose from 'mongoose';
import unique from 'mongoose-unique-validator';
import validation from './user.validation';


let schema = new mongoose.Schema({
    username: {type: String, required: true, unique: 'Username already exists'},
    password: {type: String, required: true},

    name: {type: String, required: true},
    email: {type: String, required: true},
});

schema.eachPath(path => {
    if (Array.isArray(validation[path])){
        schema.path(path).validators = [
            ...schema.path(path).validators,
            ...validation[path]
        ];
    }
});


let UserModel = mongoose.model('User', schema);
export default UserModel;
