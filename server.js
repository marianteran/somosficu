require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Router = require('./routes/routes')
const passport = require('passport')
const app = express()
require('./config/database')
require('./config/passport')
const path = require('path')

const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || "0.0.0.0"


//middlewares
app.use(cors());
app.use(express.json());
app.use(passport.initialize())
app.use('/api',Router)

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname+"/client/build/index.html"))
    })
    
}


app.listen(PORT,HOST,() => console.log("Servidor Inicializado en Puerto 4000"))
