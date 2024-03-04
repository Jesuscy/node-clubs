const mongoose = require('mongoose');

const jugadorSchema = new mongoose.Schema({

    equipoId: {
        type: Schema.Types.ObjectId,
        ref: 'Equipo',  // Referencia al modelo de Equipo
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