import validator from 'validator';
import validators from 'mongoose-validators';

exports.isUnique = function(field){
    return {
        isAsync: true,
        validator: function(value, done) {
            let query = {};
            query[field] = value;
            this.model('CustomValidation').estimatedDocumentCount(query, function(err, count) {
                if (err) done(err);
                else if (done) done(count === 0);
            });
        }, 
        message: "Path '{PATH}' isn't unique"
    }
}

exports.isNotEmpty = function(msg) {    
    return {
        validator: value => typeof value !== 'string' ? value !== undefined : !validator.isEmpty(value),
        message: msg || "Path '{PATH}' can't be empty"
    };
}

exports.isEmail = function(msg) {
    return validators.isEmail({message: msg || "Path '{PATH}' isn't a valid email"});
}

exports.isMaxLength = function(max, msg) {
    return validators.isLength({message: msg || `Path '{PATH}' can't contain more than ${max} characters`}, 0, max);
}

exports.isMinLength = function(min, msg) {
    return validators.isLength({message: msg || `Path '{PATH}' can't contain less than ${min} characters`}, min);
}
