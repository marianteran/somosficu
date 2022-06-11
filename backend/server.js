require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Router = require('./routes/routes')
const passport = require('passport')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || "0.0.0.0"

require('./config/database')
require('./config/passport')
//middlewares
app.use(passport.initialize())
app.use(cors());

app.use(express.json());
app.use('/api',Router)


app.listen("4000", () => console.log("Servidor Inicializado en Puerto 4000"))