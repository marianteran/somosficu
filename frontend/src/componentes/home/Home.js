import React, { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import "./home.css";

import Carousel from "../carousel/Carousel";
import home1 from "./img/ficu1.jpg";
import home2 from "./img/ficu2.jpg";
import home4 from "./img/ficu8.jpg";
import icono1 from "./img/icons/1.png";
import icono2 from "./img/icons/2.png";
import icono3 from "./img/icons/3.png";
import icono4 from "./img/icons/4.png";
import icono5 from "./img/icons/5.png";
import icono6 from "./img/icons/6.png";
import icono7 from "./img/icons/7.png";
import video1 from "./video/video1.mp4";
import video2 from "./video/video2.mp4";
import Logo from "../navigation/logo2.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "animate.css";
import CarouselHome from "../carousel/CarouselHome";

import { actionTypes } from "../../core/context/reducer";
import { useStateValue } from "../../core/context/StateProvider";
import axios from "axios";



/* carousel */


import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CarouselEvent from "./CarouselEvent";


function Home() {
	const [{ events }, dispatch] = useStateValue();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			{/*********** Banner **************/}

			{/* <Carousel /> */}

			{/*********** Presentacion **************/}

			<CarouselHome />

			<div className="container-presentacion">
				<section class="section top-section">
					<div class="content-container content-theme-dark">
						<div class="content-inner">
							<div class="content-center">
								{/*<h1>ficu</h1>*/}
								{/* <img src={Logo} alt="logo" width="400" />*/}
								<h6 className="tituloheader"></h6>
								<h5 className="t-frase mb-2">Nuestro Objetivo</h5>
								<h2></h2>{" "}
								<h6 className="p-frase">
									<strong>FICU</strong> es una fundación cuyo objetivo es servir
									de puente para que migrantes y refugiados puedan insertarse en
									la sociedad de acogida desde el arte, la cultura y los oficios
								</h6>
								<h2></h2>
								<p></p>
							</div>
						</div>
					</div>
				</section>
			</div>

			{/*****video */}

			<div className="container-video">
				<video autoPlay loop>
					<source src={video2} type="video/mp4" />
				</video>
			</div>

			{/*********** Mision ***********/}

			<section className="contain-mision">
				<h3 className="t-icono">Nuestra misión</h3>
				<p className="p-icono">Los objetivos de FICU</p>

				<div className="contenedor-iconos">
					<div className="iconos">
						<div className="div-icono">
							<div className="box-mision-img">
								<img
									src={icono1}
									className="img-icono"
									alt="icono"
									width="100"
								/>
							</div>
							<h3 className="st-icono">EMPODERAR</h3>
							<p className="sp-icono">
								Empoderar al migrante y refugiado para su integración en la
								sociedad argentina.
							</p>
						</div>
					</div>

					<div className="iconos">
						<div className="div-icono">
							<div className="box-mision-img">
								<img
									src={icono2}
									className="img-icono"
									alt="icono"
									width="100"
								/>
							</div>
							<h3 className="st-icono">FAVORECER</h3>
							<p className="sp-icono">
								Favorecer los emprendimientos comunitarios productivos,
								gastronómicos, artesanales artísticos, entre otros.
							</p>
						</div>
					</div>

					<div className="iconos">
						<div className="div-icono">
							<div className="box-mision-img">
								<img
									src={icono3}
									className="img-icono"
									alt="icono"
									width="100"
								/>
							</div>
							<h3 className="st-icono">PROMOVER</h3>
							<p className="sp-icono">
								Promover, asesorar y alentar la generación de proyectos.
							</p>
						</div>
					</div>

					<div className="iconos">
						<div className="div-icono">
							<div className="box-mision-img">
								<img
									src={icono4}
									className="img-icono"
									alt="icono"
									width="100"
								/>
							</div>
							<h3 className="st-icono">DESARROLLAR</h3>
							<p className="sp-icono">
								Promover y desarrollar actividades donde la cultura sea la
								protagonista.
							</p>
						</div>
					</div>

					<div className="iconos">
						<div className="div-icono">
							<div className="box-mision-img">
								<img
									src={icono5}
									className="img-icono"
									alt="icono"
									width="100"
								/>
							</div>
							<h3 className="st-icono">GESTIONAR</h3>
							<p className="sp-icono">
								Desarrollar y gestionar sistemas de comunicaciones .
							</p>
						</div>
					</div>

					<div className="iconos">
						<div className="div-icono">
							<div className="box-mision-img">
								<img
									src={icono6}
									className="img-icono"
									alt="icono"
									width="100"
								/>
							</div>
							<h3 className="st-icono">ESTABLECER</h3>
							<p className="sp-icono">
								Establecer acuerdos con otras entidades que se encuadren dentro
								de los objetivos de la fundación.
							</p>
						</div>
					</div>

					<div className="iconos">
						<div className="div-icono">
							<div className="box-mision-img">
								<img
									src={icono7}
									className="img-icono"
									alt="icono"
									width="100"
								/>
							</div>
							<h3 className="st-icono">FORTALECER</h3>
							<p className="sp-icono">Fortalecer los liderazgos.</p>
						</div>
					</div>
				</div>
			</section>
			{/*********** Nosotros ***********/}

			<div className="contenedor-nosotros">
				<h3 className="t-nosotros">Nuestro equipo</h3>
				<p className="p-nosotros">
					Conoce a quienes conforman a nuestro equipo
				</p>
				<LinkRouter to="/nosotros">
					<button type="button" className="btn btn-nosotros ">
						Conócenos
					</button>
				</LinkRouter>
			</div>

			{/*********** Ejes tematicos ***********/}
			<section className="box-ejes">
				<h3 className="t-icono">Nuestros ejes</h3>
				<p className="p-icono">Ejes temáticos</p>

				<LinkRouter to="/eventos">
					<div className="contenedor-iconos-ejes">
						<div className="iconos-ejes">
							<div className="div-ejes">
								<div className="ejes-photo"></div>

								<div className="conten-ejes-text">
									<h3 className="st-ejes">CULTURAL Y ARTES</h3>
									<p className="sp-ejes"></p>
								</div>
							</div>
						</div>

						<div className="iconos-ejes">
							<div className="div-ejes">
								<div className="ejes-photo2"></div>
								<div className="conten-ejes-text">
									<h3 className="st-ejes">FORMACIÓN Y OFICIOS</h3>
									<p className="sp-ejes"></p>
								</div>
							</div>
						</div>

						<div className="iconos-ejes">
							<div className="div-ejes">
								<div className="ejes-photo3"></div>
								<div className="conten-ejes-text">
									<h3 className="st-ejes">EMPRENDIMIENTOS</h3>
									<p className="sp-ejes"></p>
								</div>
							</div>
						</div>

						<div className="iconos-ejes">
							<div className="div-ejes">
								<div className="ejes-photo4"></div>
								<div className="conten-ejes-text">
									<h3 className="st-ejes">LIDERAZGOS</h3>
									<p className="sp-ejes"></p>
								</div>
							</div>
						</div>

						<div className="iconos-ejes">
							<div className="div-ejes">
								<div className="ejes-photo5"></div>
								<div className="conten-ejes-text">
									<h3 className="st-ejes">ACOMPAÑAMIENTO PSICOEMOCIONAL</h3>
									<p className="sp-ejes"></p>
								</div>
							</div>
						</div>
					</div>
				</LinkRouter>
			</section>

			{/*********** Galeria  ***********/}



			<CarouselEvent/>







			{/*********** Actividades ***********/}

			<section className="box-activ">
				<h3 className="t-icono">Nuestras actividades</h3>
				<p className="p-icono">Nuestros lugares de encuentro</p>

				<LinkRouter to="/eventos">
					<div className="conten-iconos-activ">
						<div className="bx-activ-icono">
							<div className="actividades-photo"></div>
							<div className="conten-activ-text">
								<h3 className="st-icono">CHARLAS</h3>
								<p className="sp-icono">Charlas, talleres y seminarios</p>
							</div>
						</div>

						<div className="bx-activ-icono">
							<div className="actividades-photo2"></div>
							<div className="conten-activ-text">
								<h3 className="st-icono">EVENTOS</h3>
								<p className="sp-icono">Eventos y encuentros</p>
							</div>
						</div>

						<div className="bx-activ-icono">
							<div className="actividades-photo3"></div>
							<div className="conten-activ-text">
								<h3 className="st-icono">ENCUENTRO</h3>
								<p className="sp-icono">Creación de espacion de encuentro.</p>
							</div>
						</div>

						<div className="bx-activ-icono">
							<div className="actividades-photo4"></div>
							<div className="conten-activ-text">
								<h3 className="st-icono">ACOMPAÑAMIENTO</h3>
								<p className="sp-icono">
									Sistemas de comunicación y acompañamiento.
								</p>
							</div>
						</div>
					</div>
				</LinkRouter>
			</section>

			{/*********** Frase  ***********/}

			<div className="container-presentacion">
				<section class="section top-section4">
					<div class="content-container">
						<div class="content-inner">
							<div class="content-center">
								<h6 className="p-frase2">
									“Somos una especie en viaje. No tenemos pertenencias sino
									equipaje”
								</h6>
								<h6 className="p-frase">Jorge Drexler</h6>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default Home;
