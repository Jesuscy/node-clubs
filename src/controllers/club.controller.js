const Club = require("../models/club.model");
const Jugador = require("../models/jugador.model");
const Titulo = require("../models/titulosGanados.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

// FUNCIONES CRUD

// - CONSULTAR

// -- UN CLUB
const getClub = async (req, res, next) => {
  try {
    //1. OBTENGO LA ID QUE HA SOLICITADO EL USUARIO
    const id = req.params.id;
    //2. BUSCO EN LA BBDD POR ID
    const club = await Club.findById(id);
    //.populate("Jugador").populate("Titulo");
    //console.log(club);
    //3. RESPONDO AL USUARIO
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      club: club,
    });
  } catch (error) {
    next(error);
  }
};

// -- TODAS LOS CLUBS
const getClubs = async (req, res, next) => {
  try {
    //1. BUSCO TODOS LOS CLUBS
    const clubs = await Club.find();
    //.populate("Jugador").populate("Titulo");
    //2. RESPONDO AL USUARIO
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: clubs,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getClub, getClubs };
