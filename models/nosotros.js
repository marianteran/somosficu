const mongoose =require("mongoose")

const nosotrosSchema= new mongoose.Schema ({

    nombre: {type:String, require:true},
    apellido: {type:String, require:false},
    cargo:{type:String, require:true},
    foto:{type:String, require:false},
    nacionalidad:{type:String, require:false},
    

})

const Nosotros = mongoose.model("nosotros", nosotrosSchema)

module.exports =Nosotros;