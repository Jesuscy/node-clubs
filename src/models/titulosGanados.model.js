const mongoose = require('mongoose');

const titulosGanadosSchema = new mongoose.Schema({

    equipoId: {
        type: Schema.Types.ObjectId,
        ref: 'Club',  // Referencia al modelo de Equipo
        required: true,
    },

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

const titulosGanados = mongoose.model('Titulos', titulosGanadosSchema);

module.exports = Titulos;

// ref: 'Contributor',