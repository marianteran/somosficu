import React, { useEffect } from "react";
import { actionTypes } from '../../core/context/reducer';
import { useStateValue } from '../../core/context/StateProvider';
import axios from 'axios';
import { BiWorld } from 'react-icons/bi';
import { IoLogoInstagram } from 'react-icons/io';
import CarouselColaboradores from '../carousel/CarouselColaboradores'
import PaginaenProduccion from '../PaginaenProduccion'

const Colaboradores = () => {
  const [{ deportistas }, dispatch] = useStateValue()
  console.log(deportistas)

	useEffect(() => {
		window.scrollTo(0, 0);
		axios.get("https://somosficu.org/api/deportistas")
			.then(response => {
				dispatch({
					type: actionTypes.DEPORTISTASDB,
					deportistas: response.data.response.deportistas
				})
			})
	}, []);

  return (
    <>
    <CarouselColaboradores/>

    <div style={{ height: "10vh" }}></div>

<h3 className="t-icono">Nuestros Colaboradores</h3>
<p className="p-icono">Los emprendedores que nos acompañan</p>

<div className="box-artistas">
  {deportistas.map(item => {
    return (
      <div className="container-profile">
        <div className="artist-profile-photo">
          <img src={process.env.PUBLIC_URL + `/img/artistas/${item.foto}`} alt="profile"></img>
        </div>
        <h3 className="profile-name">{item.nombre} {item.apellido}</h3>
        <h4 className="profile-profesion">{item.profesion}</h4>
        <p className="artist-bio" >{item.biografia}</p>

        <div className="artist-links">

          <a href={item.web} target="_blank" rel="noreferrer"><BiWorld className="artist-icons" /></a>
          <a href={item.instagram} target="_blank" rel="noreferrer"><IoLogoInstagram className="artist-icons" /></a>

        </div>

      </div>

    )

  })}

</div>


    </>
  )
}

export default Colaboradores