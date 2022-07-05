const Router = require("express").Router();
const passport=require("../config/passport")



const {getEvents, updateEvents, deleteEvents, getEvent, CreateEvent}= require("../controllers/eventsControllers")

const nosotrosController = require("../controllers/nosotrosControllers")
const {ObtenerDatNost}= nosotrosController

const artistaController = require("../controllers/artistasControllers")
const {ObtenerArtistas}= artistaController

const oficioController = require("../controllers/oficioControllers")
const {ObtenerOficio}= oficioController


const deportesController = require("../controllers/deportesControllers")
const {ObtenerDeportistas}= deportesController

const colaboradoresController= require("../controllers/colaboradoresControllers")
const {ObtenerColaboradores}= colaboradoresController

const usersControllers =require("../controllers/usersControllers")
const {nuevoUsuario, verifyEmail, accesoUsuario, cerrarSesion,verificarToken}= usersControllers


const validator= require("../controllers/validator");

/* events */
Router.route("/events")
.get(getEvents)
.post(CreateEvent)

Router.route("/events/:id")
.put(updateEvents)
.delete(deleteEvents)
.get(getEvent)



/* nosotros */
Router.route("/nosotros")
.get(ObtenerDatNost)

/* artistas */
Router.route("/artistas")
.get(ObtenerArtistas)

/* oficios */
Router.route("/oficios")
.get(ObtenerOficio)

/* deportes */
Router.route("/deportistas")
.get(ObtenerDeportistas)

/* colaboradores */

Router.route("/colaboradores")
.get(ObtenerColaboradores)





Router.route("/signup")
.post(validator,nuevoUsuario)

Router.route("/verify/:uniqueText")
.get(verifyEmail)

Router.route("/signIn")
.post(accesoUsuario)

Router.route("/signout")
.post(cerrarSesion)


module.exports= Router

