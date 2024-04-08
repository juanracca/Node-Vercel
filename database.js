// Aca se crea la conexion a la base

const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI,
)
.then(() => {
    console.log('Connected to MongoDb!')
}).catch((err) => {
    console.log('Failed to connect to MongoDb ', err)
});


module.exports = mongoose;