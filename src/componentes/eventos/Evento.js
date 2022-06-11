import React, { useEffect, useState } from "react";
import "./eventos.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Carousel6 from "../carousel/Carousel6";
import "animate.css";

import lgarepa from './lgarepa.jpeg'

import Cards2 from './cards/Cards2'
import Cards from "./cards/Cards";
import Gallery from './galeria/Galeria'
import Galeria from "./galeria/Galeria";
import '../eventos/cards/cards.scss'


import { useParams } from "react-router-dom";
import { actionTypes } from '../../core/context/reducer';
import { useStateValue } from '../../core/context/StateProvider';
import axios from 'axios';


import { Swiper, SwiperSlide } from "swiper/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ReactPlayer from 'react-player'


function Evento() {

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	const [{ events }, dispatch] = useStateValue()

	const { id } = useParams();
	const eventoSelected = events.filter((x) => x._id === id);

	console.log(eventoSelected)

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			{/*********** Banner **************/}


			<Carousel6 />
			<div style={{ height: "10vh" }}></div>



			{eventoSelected.map(item => {
				return (
					<div className="box-events">
						{/************** Descripcion eventos  **********/}



						<h3 className="title-mes-events">{item.titulo}</h3>
						<p className="text-content-events">{item.lugar}</p>


						<p className="parrafo-content-events">{item.descripcion}</p>


						<h3 className="title-mes-events">Galeria</h3>
						<p className="text-content-events">Fotos del Evento</p>



						<Carousel responsive={responsive} >
							<div className="mySwiper"><img src={process.env.PUBLIC_URL + `/img/eventos/${item.galeria[0]}`} alt="profile"></img></div>
							<div className="mySwiper"><img src={process.env.PUBLIC_URL + `/img/eventos/${item.galeria[1]}`} alt="profile"></img></div>
							<div className="mySwiper"><img src={process.env.PUBLIC_URL + `/img/eventos/${item.galeria[2]}`} alt="profile"></img></div>
							<div className="mySwiper"><img src={process.env.PUBLIC_URL + `/img/eventos/${item.galeria[3]}`} alt="profile"></img></div>
							<div className="mySwiper"><img src={process.env.PUBLIC_URL + `/img/eventos/${item.galeria[4]}`} alt="profile"></img></div>
						</Carousel>


						<div className="box-video">

							<ReactPlayer
								url={item.video}
								width="100%"
								height="100%" 
								controls/>

						</div>

						{/* <div className="box-colaboradores">
							<h3 className="title-mes-events">Colaboradores</h3>
							<p className="text-content-events">Conoce a quienes nos acompaña</p>

							<div className="container-colab-logo">

								{item.colaboradores?.map((element) => {

									return (
										<div className="colab-logo-image">
											<img src={process.env.PUBLIC_URL + `/img/colaborador/${element}`} ></img>
										</div>

										)
									})	

								}

							</div>
						</div> */}








					</div>



				)
			})}



		</>
	);
}

export default Evento;
