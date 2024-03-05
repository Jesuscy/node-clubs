const express = require("express");
//EL ROUTER ES EL OBJETO QUE GUARDA TODAS LAS RUTAS.
const jugadorRouter = express.Router();
//INSTANCIAMOS AL CONTROLADOR PARA USAR LAS FUNCIONES RELATIVAS A CADA RUTA
const { getJugador, getJugadores, createJugador } = require("../controllers/jugador.controller");

//OBTENER UN CLUB
jugadorRouter.get("/:id", getJugador);

//OBTENER TODOS LOS CLUBS
jugadorRouter.get("/", getJugadores);

//CREAR UN EQUIPO
jugadorRouter.post("/", createJugador);


module.exports = jugadorRouter;
