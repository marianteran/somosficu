const mongoose =require("mongoose")

const nosotrosSchema= new mongoose.Schema ({

    name: {type:String, require:true},
    apellido: {type:String, require:true},
    cargo:{type:String, require:true},
    foto:{type:String, require:false},
    nacionalidad:{type:String, require:true},
    

})

const Nosotros = mongoose.model("nosotros", nosotrosSchema)

module.exports =Nosotros;