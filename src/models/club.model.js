const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
  clubId: {
    type: Number,
    trim: true,
    unique: true,
  },
  clubNombre: {
    type: String,
    required: true,
    trim: true,
  },
  clubFundacion: {
    type: Number,
    required: true,
    trim: true,
  },
  clubEstadio: {
    type: String,
    required: true,
    trim: true,
  },
  clubPresidente: {
    type: String,
    required: true,
    trim: true,
  },
  clubCapitalDeInversion: {
    type: Number,
    required: true,
    trim: true,
  },
  clubSitioWebOficial: {
    type: String,
    trim: true,
    unique: true,
  },
  clubEntrenador: {
    type: String,
    required: true,
    trim: true,
  },
  clubTitulosGanados: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Titulos",
  },
  clubJugadores: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Jugador",
  },
  clubLiga: {
    type: String,
    required: true,
    trim: true,
  }



});

const Club = mongoose.model("Club", clubSchema);

module.exports = Club;
