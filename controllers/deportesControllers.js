
const Deportistas = require("../models/deportistas")

const deportesController={

     ObtenerDeportistas:async(req,resp)=>{
        /*  console.log(req)
         console.log(resp) */
         let deportistas
 
         let error =null
 
         try {
             deportistas = await Deportistas.find()
             
         } catch (err) {
             error =err
             console.log(error)
         }
 
         resp.json({
             response:error?"ERROR":{deportistas},
             success:error? false:true,
             error:error
         })
     },

    

  
}

module.exports=deportesController