
const Oficios = require("../models/oficios")


const oficioController={


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

module.exports=oficioController