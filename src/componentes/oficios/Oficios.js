import React, { useEffect } from "react";
import "./oficios.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Carousel7 from "../carousel/Carousel7";
import "animate.css";

import { BiWorld } from 'react-icons/bi';
import { IoLogoInstagram } from 'react-icons/io';

import { actionTypes } from '../../core/context/reducer';
import { useStateValue } from '../../core/context/StateProvider';
import axios from 'axios';

const Oficios = () => {

  const [{ oficios }, dispatch] = useStateValue()

	console.log(oficios)
	useEffect(() => {
		window.scrollTo(0, 0);
		axios.get("http://localhost:4000/api/oficios")
			.then(response => {
				dispatch({
					type: actionTypes.OFICIOSDB,
					oficios: response.data.response.oficios
				})
			})
	}, []);

  return (
    <>
    	{/*********** Banner **************/}

			<Carousel7 />
			<div style={{ height: "10vh" }}></div>

			<h3 className="t-icono">Nuestros Colaboradores</h3>
			<p className="p-icono">Las personas que nos acompañan</p>

			<div className="box-artistas">
				{oficios.map(item => {
					return (
						<div className="container-profile">
							<div className="artist-profile-photo">
								<img src={process.env.PUBLIC_URL + `/img/oficios/${item.foto}`} alt="profile"></img>
							</div>
							<h3 className="profile-name">{item.nombre} {item.apellido}</h3>
							<h4 className="profile-profesion">{item.profesion}</h4>
							<p className="artist-bio" >{item.biografia}</p>

							<div className="artist-links">

								<a href={item.web} target="_blank" rel="noreferrer"><BiWorld className="artist-icons" /></a>
								<a href={item.instagram} target="_blank" rel="noreferrer"><IoLogoInstagram className="artist-icons"/></a>
								
							</div>

						</div>

					)

				})}

			</div>
    </>
  )
}

export default Oficios