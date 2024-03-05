const express = require("express");
//EL ROUTER ES EL OBJETO QUE GUARDA TODAS LAS RUTAS.
const clubRouter = express.Router();
//INSTANCIAMOS AL CONTROLADOR PARA USAR LAS FUNCIONES RELATIVAS A CADA RUTA
const { getClub, getClubs, createClub, updateClub, addClubJugador, addClubTitulo } = require("../controllers/club.controller");

//OBTENER UN CLUB
clubRouter.get("/:id", getClub);

//OBTENER TODOS LOS CLUBS
clubRouter.get("/", getClubs);

//CREAR UN EQUIPO
clubRouter.post("/", createClub);

//MODIFICAR UN EQUIPO
clubRouter.patch('/:id', updateClub);

//MODIFICAR UN EQUIPO
clubRouter.put('/clubes/:clubId/jugadores/:jugadorId', addClubJugador);

//MODIFICAR UN TITULO
clubRouter.put('/clubes/:clubId/titulos/:tituloId', addClubTitulo);


module.exports = clubRouter;
