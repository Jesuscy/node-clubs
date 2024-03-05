const mongoose = require('mongoose');

const jugadorSchema = new mongoose.Schema({

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