const mongoose = require('mongoose');

const pass = 'mongodb+srv://jaimeyaguem:C3zDahhh8700lrKY@cluster0.lta84rd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(pass);
        console.log('INFO: Conexión a BD correcta:', conn.connection.name)
    } catch (error) {
        console.log('ERROR: (f connectMongo) ->', error.message);
    }
}

module.exports = { connectMongo };