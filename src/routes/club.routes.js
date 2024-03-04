const express = require("express");
//EL ROUTER ES EL OBJETO QUE GUARDA TODAS LAS RUTAS.
const clubRouter = express.Router();
//INSTANCIAMOS AL CONTROLADOR PARA USAR LAS FUNCIONES RELATIVAS A CADA RUTA
const { getClub, getClubs } = require("../controllers/club.controller");

//OBTENER UN CLUB
clubRouter.get("/:id", getClub);

//OBTENER TODOS LOS CLUBS
clubRouter.get("/", getClubs);

module.exports = clubRouter;
