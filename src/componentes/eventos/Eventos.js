import React, { useEffect } from "react";
import "./eventos.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Carousel3 from "../carousel/Carousel3";
import "animate.css";



import Cards2 from './cards/Cards2'
import Galeria from './galeria/Galeria'


function Eventos() {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			{/*********** Banner **************/}


			<Carousel3 />
			<div style={{ height: "10vh" }}></div>

			<div className="box-events">


				{/**************Julio  **********/}

				<h3 className="title-mes-events">Eventos </h3>
				<p className="text-content-events">Conoce nuestros eventos</p>

				{/************** Acordeon Julio *******/}

				<Cards2 />


			</div>

		</>
	);
}

export default Eventos;
