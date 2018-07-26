import mongoose from 'mongoose';

const schema = mongoose.Schema({
    minlengthPath: {type: String, minlength: [10, 'Path `{PATH}` has less then {MINLENGTH} characters.']},
    maxlengthPath: {type: String, maxlength: [5, 'Path `{PATH}` has more then {MAXLENGTH} characters.']},
    minPath: {type: Number, min: [10, 'Path `{PATH}` is less then {MIN}.']},
    maxPath: {type: Number, max: [20, 'Path `{PATH}` is greater then {MAX}.']},
    requiredPath: {type: String, required: 'Path `{PATH}` is missing value.'},
    uniquePath: {type: String, unique: true},
});

export default mongoose.model('SimpleValidation', schema);