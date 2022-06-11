const mongoose =require("mongoose")

const eventsSchema= new mongoose.Schema ({

    titulo: {type:String, require:true},
    descripcion: {type:String, require:true},
    fecha:{type:String, require:true},
    hora:{type:String, require:false},
    mes:{type:String, require:true},
    lugar: {type:String, require:true},
    galeria: {type:Array, require:false},
    video: {type:String, require:false},
    colaboradores: {type:Array, require:false}


})

const Events = mongoose.model("events", eventsSchema)

module.exports =Events;