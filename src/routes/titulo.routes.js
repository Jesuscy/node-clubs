const express = require("express");
//EL ROUTER ES EL OBJETO QUE GUARDA TODAS LAS RUTAS.
const tituloRouter = express.Router();
//INSTANCIAMOS AL CONTROLADOR PARA USAR LAS FUNCIONES RELATIVAS A CADA RUTA
const { getTitulo, getTitulos, createTitulo } = require("../controllers/titulo.controller");

//OBTENER UN CLUB
tituloRouter.get("/:id", getTitulo);

//OBTENER TODOS LOS CLUBS
tituloRouter.get("/", getTitulos);

//CREAR UN EQUIPO
tituloRouter.post("/", createTitulo);


module.exports = tituloRouter;
