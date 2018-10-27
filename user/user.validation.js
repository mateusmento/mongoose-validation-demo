import validator from 'validator';
import validators from 'mongoose-validators';

export default {
    username: [
        validators.isLength({message: "Username can not have less than 8 characters "}, 8),
        validators.isLength({message: "Username can not have more than 30 characters "}, 0, 30)
    ],
    name: [
        validators.isLength({message: "Username can not have more than 100 characters "}, 0, 100)
    ],
    email: [
        validators.isEmail({message: "Email is not valid"})
    ],
};
