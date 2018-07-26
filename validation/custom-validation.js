import mongoose from 'mongoose';
import validator from 'validator';

const schema = mongoose.Schema({
    firstName: {type: String, required: 'First name is required', validate: {
        validator: value => validator.isAlpha(value),
        message: 'Path `{PATH}` is not an Alphanumeric'
    }},

    email: {type: String, required:'Email is required', validate: [
        {
            validator: value => validator.isEmail(value), 
            message: 'Path `{PATH}` is not an valid email.'
        },
        {
            isAsync: true,
            validator: function(value, done) {
                this.model('CustomValidation').estimatedDocumentCount({username: value}, function(err, count) {
                    if (err) done(err);
                    else if (done) done(count === 0);
                });
            }, 
            message: 'Path `{PATH}` is not unique.'
        }
    ]},

    username: {type: String, required: 'Username is required', validate: {
        isAsync: true,
        validator: function(value, done) {
            this.model('CustomValidation').estimatedDocumentCount({username: value}, function(err, count) {
                if (err) done(err);
                else if (done) done(count === 0);
            });
        }, 
        message: 'Path `{PATH}` is not unique.'
    }},

});

// schema.path('email').validate(function(value, done){
//     return this.model('CustomValidation').estimatedDocumentCount({email: value}, function(err, count) {
//         if (err) done(err);
//         else if (done) done(count !== 0);
//     });
// }, 'Path `{PATH}` is not unique.');


export let CustomValidation =  mongoose.model('CustomValidation', schema);

