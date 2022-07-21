const mongoose =require("mongoose")

const colaboradoresSchema= new mongoose.Schema ({

    nombre: {type:String, require:true},
    apellido: {type:String, require:false},
    profesion:{type:String, require:true},
    foto:{type:String, require:false},
    nacionalidad:{type:String, require:false},
    biografia:{type:String, require:false},
    instagram:{type:String, require:false},
    web:{type:String, require:false}
    

})

const Colaboradores = mongoose.model("colaboradores", colaboradoresSchema)

module.exports =Colaboradores;