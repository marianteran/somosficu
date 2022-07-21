const mongoose =require("mongoose")

const artistasSchema= new mongoose.Schema ({

    nombre: {type:String, require:true},
    apellido: {type:String, require:false},
    profesion:{type:String, require:true},
    foto:{type:String, require:false},
    nacionalidad:{type:String, require:true},
    biografia:{type:String, require:true},
    instagram:{type:String, require:true},
    web:{type:String, require:true}
    

})

const Artistas = mongoose.model("artistas", artistasSchema)

module.exports =Artistas;