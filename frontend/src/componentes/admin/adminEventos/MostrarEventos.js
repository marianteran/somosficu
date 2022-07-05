import React, { useState, useEffect } from 'react'
import { Link as LinkRouter } from "react-router-dom";
import axios from 'axios'

import './events.css'



const URI = 'http://localhost:4000/api/events'

const MostrarEventos = () => {
  const [evento, setEvents] = useState([]);

  useEffect(() => {
    getevents()

  }, []);
  const getevents = async () => {
    const res = await axios.get(URI)
    setEvents(res.data)

  }

  const deleteEvents = async (_id) => {
    await axios.delete(`${URI}/${_id}`)
    getevents()// llamar a todos los registro nuevamente una vez q lo elimina 
    //console.log(id)
  }

    console.log(evento)

  //console.log(events)
  return (
    <div className='container' style={{ marginTop:"10vh"}}>
      <div className='row'>
        <div className='col'>
        <LinkRouter to="/crearevents" className='btn btn-primary my-2'><i className='fas fa-plus'></i></LinkRouter>
          <table className='table'>
            <thead className='table-primary'>
              <tr>
              {/* <th >galeria</th> */}
              
                <th >Titulo</th>
                <th >descripcion</th>
                <th >fecha</th>
                <th >hora</th>
                <th >mes</th>
                <th >lugar</th>
               {/*  <th >video</th>
                <th >colaboradores</th> */}
                <th >Action</th>
              </tr>
            </thead>
            <tbody>
              {evento.map((item) => (

                <tr key={item.id}>
                 {/*  <td><img style={{width:"100px"}} src={process.env.PUBLIC_URL + `/img/eventos/${item.galeria[0]}`} alt="profile two" /></td> */}
                  <td>{item.titulo}</td>
                  <td>{item.descripcion}</td>
                  <td>{item.fecha}</td>
                  <td>{item.hora}</td>
                  <td>{item.mes}</td>
                  <td>{item.lugar}</td>
                  {/* <td>{item.video}</td> */}
                  {/* <td>
                    <ul>
                      <li>{item.colaboradores }</li></ul>
                    
                    
                   </td> */}
                    <td>
                  <LinkRouter to={`/editarevents/${item._id}`} className='btn btn-info'><i className='fas fa-edit'></i></LinkRouter>
                  <button onClick={()=>deleteEvents(item._id)} className='btn btn-danger'><i className='fas fa-trash-alt'></i></button>
                </td>
                </tr>

              ))}
            </tbody>

          </table>


        </div>

      </div>
    </div>
  )
}

export default MostrarEventos