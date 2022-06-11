const Router = require("express").Router();
const passport=require("../config/passport")


const eventsController = require("../controllers/eventsControllers")
const {ObtenerTodosDatos, ObtenerMiembros, ObtenerArtistas ,ObtenerOficio}= eventsController


const usersControllers =require("../controllers/usersControllers")
const {nuevoUsuario, verifyEmail, accesoUsuario, cerrarSesion,verificarToken}= usersControllers


const validator= require("../controllers/validator");


Router.route("/events")
.get(ObtenerTodosDatos)



Router.route("/nosotros")
.get(ObtenerMiembros)


Router.route("/artistas")
.get(ObtenerArtistas)

Router.route("/oficios")
.get(ObtenerOficio)

Router.route("/signup")
.post(validator,nuevoUsuario)

Router.route("/verify/:uniqueText")
.get(verifyEmail)


Router.route("/signIn")
.post(accesoUsuario)

Router.route("/signout")
.post(cerrarSesion)


module.exports= Router

