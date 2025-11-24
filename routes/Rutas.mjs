import express from "express";
import {obtenerTodosLosSuperheroesController, crearNuevoSuperheroeController, actualizarSuperheroeController, eliminarSuperheroePorIDController, obtenerPorIDController} from "../controllers/superheroesController.mjs"
import {CrearheroesValidationRules, ActualizarSuperheroesValidacion, ValidacionDeId} from "../validations/validationsRules.mjs";
import {handleValidationErrors} from "../validations/errorMiddleware.mjs";
import {TransformarCampos} from "../validations/transformarDatos.mjs";


const routes= express.Router();

routes.get('/', (req, res) => {res.render("index");});

routes.get('/dashboard', obtenerTodosLosSuperheroesController);

routes.post('/heroes/agregar', TransformarCampos, CrearheroesValidationRules(), handleValidationErrors, crearNuevoSuperheroeController);
routes.get('/addSuperhero', (req, res) => {res.render("addSuperhero");});

routes.get('/heroes/:id', ValidacionDeId(), handleValidationErrors, obtenerPorIDController);

routes.get('/heroes/:id/editar', ValidacionDeId(), obtenerPorIDController);
routes.put('/heroes/:id/editar', TransformarCampos, ActualizarSuperheroesValidacion(), handleValidationErrors, actualizarSuperheroeController);

routes.delete('/heroes/:id',ValidacionDeId(), handleValidationErrors, eliminarSuperheroePorIDController);

export default routes;   