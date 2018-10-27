import validator from 'validator';
import validators from './validators.js';

exports.username = [
    validators.isUnique('username'),
    validators.isNotEmpty(),
    validators.isMaxLength(30),
    {
        validator: function (v) {
            return !validator.isEmail(v) || v === this.email;
        },
        message: "Path 'username' can't be an email other than path 'email'."
    },
];

exports.password = [
    validators.isMinLength(8),
    validators.isMaxLength(30)
];

exports.email = [
    validators.isUnique('email'),
    validators.isEmail(),
    validators.isNotEmpty(),
    validators.isMaxLength(100)
];

exports.name = [
    validators.isNotEmpty()
];
