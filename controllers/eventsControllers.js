const Events = require("../models/events")
const Nosotros = require("../models/nosotros")
const Artistas = require("../models/artistas")
const Oficios = require("../models/oficios")

const eventsController={
    ObtenerTodosDatos:async(req,resp)=>{
       /*  console.log(req)
        console.log(resp) */
        let events

        let error =null

        try {
            events = await Events.find()
            
        } catch (err) {
            error =err
            console.log(error)
        }

        resp.json({
            response:error?"ERROR":{events},
            success:error? false:true,
            error:error
        })
    },

    ObtenerEvento:async(req,resp)=>{
        let event
        //console.log(req.params)
        const events =req.params.event
        let error=null
        try {
            event= await Events.find({titulo:events})
            
        } catch (err) {
            error=err
            console.log(error)
            
        }

        resp.json({
            response:error?"ERROR":{event},
            success:error? false:true,
            error:error
        })

        
    },


    ObtenerMiembros:async(req,resp)=>{
        /*  console.log(req)
         console.log(resp) */
         let nosotros
 
         let error =null
 
         try {
             nosotros = await Nosotros.find()
             
         } catch (err) {
             error =err
             console.log(error)
         }
 
         resp.json({
             response:error?"ERROR":{nosotros},
             success:error? false:true,
             error:error
         })
     },

     ObtenerArtistas:async(req,resp)=>{
        /*  console.log(req)
         console.log(resp) */
         let artistas
 
         let error =null
 
         try {
             artistas = await Artistas.find()
             
         } catch (err) {
             error =err
             console.log(error)
         }
 
         resp.json({
             response:error?"ERROR":{artistas},
             success:error? false:true,
             error:error
         })
     },


     ObtenerOficio:async(req,resp)=>{
        /*  console.log(req)
         console.log(resp) */
         let oficios
 
         let error =null
 
         try {
             oficios = await Oficios.find()
             
         } catch (err) {
             error =err
             console.log(error)
         }
 
         resp.json({
             response:error?"ERROR":{oficios},
             success:error? false:true,
             error:error
         })
     },

    



  
}

module.exports=eventsController