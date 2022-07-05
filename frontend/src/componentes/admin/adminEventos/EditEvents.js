import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link as LinkRouter, useNavigate, useParams } from 'react-router-dom'


const URI = 'http://localhost:4000/api/events'

const EditEvents = () => {
    const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [mes, setMes] = useState('');
  const [lugar, setLugar] = useState('');
    const navigate= useNavigate()
    const {id} =useParams()

    console.log(id)

    const editBlg = async(e)=>{
        e.preventDefault()
        await axios.put(URI+id,{
            titulo:titulo,
            descripcion:descripcion,
            fecha:fecha,
            hora:hora,
            mes:mes,
            lugar:lugar,
        })
        navigate('/mostrarevents')
      }
     
      useEffect(() => {
        getBlogByid()
       }, []);
     
       const getBlogByid= async()=>{
         const res= await axios.get(URI+id)
         console.log(res)
       }




  return (

    
    <div className="container">
    <h3>Editar Events</h3>
    <form onSubmit={editBlg}>
      <div className="mb-3">
        <label className="form-label">titulo</label>
        <input value={titulo}
              onChange={(e)=> setTitulo(e.target.value)}
              type="text"
              className="form-control"/>
      </div>
      <div className="mb-3">
        <label className="form-label">Descripcion</label>
        <textarea value={descripcion}
              onChange={(e)=> setDescripcion(e.target.value)}
              type="text"
              className="form-control"/>
      </div>

      <div className="mb-3">
        <label className="form-label">fecha</label>
        <input value={fecha}
              onChange={(e)=> setFecha(e.target.value)}
              type="text"
              className="form-control"/>
      </div>
      <div className="mb-3">
        <label className="form-label">Hora</label>
        <input value={hora}
              onChange={(e)=> setHora(e.target.value)}
              type="text"
              className="form-control"/>
      </div>
      <div className="mb-3">
        <label className="form-label">Mes</label>
        <input value={mes}
              onChange={(e)=> setMes(e.target.value)}
              type="text"
              className="form-control"/>
      </div>
      <div className="mb-3">
        <label className="form-label">Lugar</label>
        <input value={lugar}
              onChange={(e)=> setLugar(e.target.value)}
              type="text"
              className="form-control"/>
      </div>

    <button type="submit" className="btn btn-primary">Save</button>
    </form>


  </div>
  )
}

export default EditEvents