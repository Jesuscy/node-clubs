const Titulo = require("../models/titulo.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");



//UN TITULO
const getTitulo = async (req, res, next) => {
    try {
        const id = req.params.id;
        const titulo = await Titulo.findById(id);
        res.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: titulo
        });
    } catch (error) {
        next(error)
    }
}
//TODOS LOS TITUTLOS

const getTitulos = async (req, res, next) => {
    try {

        const titulos = await Titulo.find()
        res.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: titulos
        });
    } catch (error) {
        next(error)
    }
}
//METODO CREAR TITULO
const createTitulo = async (req, res, next) => {
    try {
        //1. CREAR UNA VARIABLE (TIPO CLUB) QUE RECOJA LOS DATOS QUE ENVÍA EL USUARIO.
        const titulo = new Titulo(req.body);
        //2.GUARDAR EN BBDD
        await titulo.save();
        //3. CONTESTAR AL USUARIO
        res.status(201).json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: titulo
        });
    } catch (error) {
        next(error);
    }
}

//(PRO) ->METODO CREAR-ASIGNAR TITULO A EQUIPO.

module.exports = { getTitulo, getTitulos, createTitulo };