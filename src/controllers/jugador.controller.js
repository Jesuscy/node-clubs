

const Jugador = require("../models/jugador.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");



// UN JUGADOR
const getJugador = async (req, res, next) => {
    try {
        const id = req.params.id;
        const release = await Release.findById(id);
        res.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: release
        });
    } catch (error) {
        next(error)
    }
}

// TODOS LOS JUGADORES

const getJugadores = async (req, res, next) => {
    try {

        const jugadores = await Jugador.find()
        res.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: jugadores
        });
    } catch (error) {
        next(error)
    }
}


//METODO CREAR JUGADOR.
const createJugador = async (req, res, next) => {
    try {
        //1. CREAR UNA VARIABLE (TIPO CLUB) QUE RECOJA LOS DATOS QUE ENVÍA EL USUARIO.
        const jugador = new Jugador(req.body);
        //2.GUARDAR EN BBDD
        await jugador.save();
        //3. CONTESTAR AL USUARIO
        res.status(201).json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: jugador
        });
    } catch (error) {
        next(error);
    }
}
//(PRO) ->METODO CREAR-ASIGNAR JUGADOR A EQUIPO.

module.exports = { getJugador, getJugadores, createJugador };