const mongoose = require('mongoose');

const titulosGanadosSchema = new mongoose.Schema({

    titleNombre: {
        type: String,
        required: true,
    },

    titleYear: {
        type: Number,
        required: true,
    },

    titleType: { // Dependiendo de si es nacional o internacional 
        type: String,
        required: true,
    }
});

const Titulos = mongoose.model('Titulos', titulosGanadosSchema);

module.exports = Titulos;

// ref: 'Contributor',
