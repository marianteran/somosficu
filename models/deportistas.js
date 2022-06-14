const mongoose =require("mongoose")

const deportistasSchema= new mongoose.Schema ({

    nombre: {type:String, require:true},
    apellido: {type:String, require:true},
    profesion:{type:String, require:true},
    foto:{type:String, require:false},
    nacionalidad:{type:String, require:true},
    biografia:{type:String, require:true},
    instagram:{type:String, require:true},
    web:{type:String, require:true}
    

})

const Deportistas = mongoose.model("deportistas", deportistasSchema)

module.exports =Deportistas;