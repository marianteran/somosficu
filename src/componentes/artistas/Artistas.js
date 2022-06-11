import React, { useEffect } from "react";
import "../nosotros/nosotros.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Carousel5 from "../carousel/Carousel5";
import "animate.css";

import { BiWorld } from 'react-icons/bi';
import { IoLogoInstagram } from 'react-icons/io';

import { actionTypes } from '../../core/context/reducer';
import { useStateValue } from '../../core/context/StateProvider';
import axios from 'axios';


function Artistas() {

	const [{ artistas }, dispatch] = useStateValue()

	useEffect(() => {
		window.scrollTo(0, 0);
		axios.get("http://localhost:4000/api/artistas")
			.then(response => {
				dispatch({
					type: actionTypes.ARTISTASDB,
					artistas: response.data.response.artistas
				})
			})
	}, []);

	return (
		<>
			{/*********** Banner **************/}

			<Carousel5 />
			<div style={{ height: "10vh" }}></div>

			<h3 className="t-icono">Nuestros Artistas</h3>
			<p className="p-icono">Los artistas que nos acompañan</p>

			<div className="box-artistas">
				{artistas.map(item => {
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
								<a href={item.instagram} target="_blank" rel="noreferrer"><IoLogoInstagram className="artist-icons"/></a>
								
							</div>

						</div>

					)

				})}

			</div>


		</>
	);
}

export default Artistas;
