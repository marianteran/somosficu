
const Nosotros = require("../models/nosotros")

const nosotrosController={
 
    ObtenerDatNost:async(req,resp)=>{
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

 


  
}

module.exports=nosotrosController