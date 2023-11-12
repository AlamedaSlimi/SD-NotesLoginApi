
const mongoose = require('mongoose');

const uri = 'mongodb+srv://samuel:ChB4t2o8U4EjvgJY@notesapp.g2qgarw.mongodb.net/notesapp?retryWrites=true&w=majority';
mongoose.connect(uri).then(db => console.log('db is connected mf')).catch(err => console.log(err));


module.exports = mongoose;

//samuel
//ChB4t2o8U4EjvgJY
