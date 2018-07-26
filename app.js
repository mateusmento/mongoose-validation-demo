import mongoose from 'mongoose';
import fun from './validation/demo.js';

mongoose.connect('mongodb://localhost:27017/demo', {useNewUrlParser: true});

let db = mongoose.connection;
db.on('connected', () => {
    console.log('Connected to MongoDB');
    fun();
});

db.on('error', (err) => {
    console.log(err);
});
