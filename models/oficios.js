const mongoose =require("mongoose")

const oficiosSchema= new mongoose.Schema ({

    nombre: {type:String, require:true},
    apellido: {type:String, require:false},
    profesion:{type:String, require:true},
    foto:{type:String, require:false},
    nacionalidad:{type:String, require:true},
    biografia:{type:String, require:true},
    instagram:{type:String, require:true},
    web:{type:String, require:true}
    

})

const Oficios = mongoose.model("oficios", oficiosSchema)

module.exports =Oficios;