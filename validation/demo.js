import mongoose from 'mongoose';
import SimpleValidation from './simple-validation.js';
import {CustomValidation} from './custom-validation.js';


export default function()
{
    mongoose.connection.dropDatabase('demo');

    let valid1 = new SimpleValidation({
        minlengthPath: 'fooooooooooo',
        maxlengthPath: 'foo',
        minPath: 15,
        maxPath: 15,
        requiredPath: 'undefined',
        uniquePath: 'unique'
    });

    // Going wrong in the validation of all fields
    let valid2 = new SimpleValidation({
        minlengthPath: 'foo',
        maxlengthPath: 'foo-bar',
        minPath: 5,
        maxPath: 10,
        requiredPath: undefined,
        uniquePath: 'unique' // value 'unique' already exists in path `uniquePath`
    });

    let custom1 = new CustomValidation({
        firstName: 'Mateus',
        email: 'mateus@email.com',
        username: 'mateus'
    });

    let custom2 = new CustomValidation({
        firstName: 'Mateus123',
        email: 'mateus@email.com',
        username: 'mateus'
    });

    function handleErrors(err){
        if (err) {
            console.log('ERRORS:');
            for (let i in err.errors) {
                console.log(i, ': ', err.errors[i].message);
            }
        } else {
            console.log('all good');
        }
    }
    
    // This sould print 'all good'
    valid1.save(err => {
        handleErrors(err);

        // This should print all errors except for the unique constraint
        valid2.save(err => {
            handleErrors(err);

            // This sould print 'all good'
            custom1.save(err => {
                handleErrors(err);

                // This should print all errors except for the unique constraint
                custom2.save(handleErrors);
            })
        });
    });

    
}