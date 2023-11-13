
const mongoose = require('mongoose');

const uri = 'mongodb+srv://saul:k4sRH06I6RIC2EJ5@noteloginapidb.msg1mn6.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri).then(db => console.log('db is connected motherfucker')).catch(err => console.log(err));


module.exports = mongoose;

//samuel
//ChB4t2o8U4EjvgJY
