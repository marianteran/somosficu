
const Colaboradores = require("../models/colaboradores")

const colaboradoresController={

     ObtenerColaboradores:async(req,resp)=>{
        try {
            const data = await Colaboradores.find();
            resp.status(200).json(data);
          } catch (err) {
            next(err);
          }
     },

    

  
}

module.exports=colaboradoresController