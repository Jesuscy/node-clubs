const Jugador = require("../models/jugador.model");
const Titulo = require("../models/titulo.model");
const Club = require("../models/club.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

// FUNCIONES CRUD

// - CONSULTAR

// CLUBS

//UN CLUB
const getClub = async (req, res, next) => {
  try {
    //1. OBTENGO LA ID QUE HA SOLICITADO EL USUARIO
    const id = req.params.id;
    //2. BUSCO EN LA BBDD POR ID
    const club = await Club.findById(id).populate("clubJugadores").populate("clubTitulosGanados");
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
    const clubs = await Club.find().populate("clubJugadores").populate("clubTitulosGanados");
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

//CREAR CLUB
const createClub = async (req, res, next) => {
  try {
    //1. CREAR UNA VARIABLE (TIPO CLUB) QUE RECOJA LOS DATOS QUE ENVÍA EL USUARIO.
    const club = new Club(req.body);
    //2.GUARDAR EN BBDD
    await club.save();
    //3. CONTESTAR AL USUARIO
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: club
    });
  } catch (error) {
    next(error);
  }
}

const updateClub = async (req, res, next) => {
  try {
    //1. BUSCAR EL TRACK QUE HAY QUE MODIFICAR.
    const id = req.params.id;
    //2. RECOPILAR LOS DATOS QUE HAY QUE MODIFICAR
    const body = req.body;
    //3. ACTUALIZAR LA FUNCIÓN
    const club = await Club.findByIdAndUpdate(id, body, { new: true });
    // 4. RESPUESTA AL USUARIO
    if (!club) {
      return res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: club
    });
  } catch (error) {
    next(error);
  }
}

//JUGADORES AÑADIR JUGADOR A EQUIPO.

const addClubJugador = async (req, res, next) => {
  try {
    // 1. Obtener el ID del club y el ID del jugador desde los parámetros de la solicitud
    const clubId = req.params.clubId;
    const jugadorId = req.params.jugadorId;

    // 2. Buscar el club por su ID
    const club = await Club.findById(clubId);

    // 3. Verificar si el club existe
    if (!club) {
      return res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
        error: "Error por CLUB"
      });
    }

    // 4. Obtener el jugador por su ID
    const jugador = await Jugador.findById(jugadorId);

    // 5. Verificar si el jugador existe
    if (!jugador) {
      return res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
        error: "Error por Jugador"

      });
    }
    // res.status.json([jugador, club]);

    // 6. Añadir el jugador al array clubJugadores del club
    club.clubJugadores.push(jugador);

    // 7. Guardar el club actualizado en la base de datos
    const clubActualizado = await club.save();

    // 8. Respuesta al usuario
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: clubActualizado,
    });
  } catch (error) {
    next(error);
  }
};


//TITUTLOS AÑADIR TITULO A CLUB

const addClubTitulo = async (req, res, next) => {
  try {
    // 1. Obtener el ID del club y el ID del jugador desde los parámetros de la solicitud
    const clubId = req.params.clubId;
    const tituloId = req.params.tituloId;

    // 2. Buscar el club por su ID
    const club = await Club.findById(clubId);

    // 3. Verificar si el club existe
    if (!club) {
      return res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
        error: "Error por CLUB"
      });
    }

    // 4. Obtener el jugador por su ID
    const titulo = await Titulo.findById(tituloId);

    // 5. Verificar si el jugador existe
    if (!titulo) {
      return res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
        error: "Error por Titulo"

      });
    }
    // res.status.json([jugador, club]);

    // 6. Añadir el jugador al array clubJugadores del club
    club.clubTitulosGanados.push(titulo);

    // 7. Guardar el club actualizado en la base de datos
    const clubActualizado = await club.save();

    // 8. Respuesta al usuario
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: clubActualizado,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = { getClub, getClubs, createClub, updateClub, addClubJugador, addClubTitulo };
