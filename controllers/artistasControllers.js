
const Artistas = require("../models/artistas")


const artistaController={


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



  
}

module.exports=artistaController