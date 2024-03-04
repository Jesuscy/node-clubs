const mongoose = require('mongoose');

const jugadorSchema = new mongoose.Schema({

    equipoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club',  // Referencia al modelo de Equipo
        required: true,
    },

    jugadorNombre: {
        type: String,
        required: true,
    },

    jugadorEdad: {
        type: Number,
        required: true,
    },

    jugadorPosicion: {
        type: String,
        required: true,

    },

    jugadorAltura: {
        type: Number,
        required: true,

    },
    jugadorPeso: {
        type: Number,
        required: true,
    },

    jugadorGoles: {
        type: Number,
    }
});

const Jugador = mongoose.model('Jugador', jugadorSchema);

module.exports = Jugador;