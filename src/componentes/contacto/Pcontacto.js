import React, { useEffect } from "react";
import "./contacto.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "animate.css";
import Contacto from "./Contacto";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Carousel4 from "../carousel/Carousel4";



function Pcontacto() {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<>
			{/*********** Banner **************/}

			<Carousel4 />

			{/*      <div className="banner-image-contacto w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="content-header">
          <h1 className="animate__animated animate__fadeInDown tituloheader-contacto">
            CONTACTO
          </h1>
          <h3 className="animate__animated animate__fadeInDown subtituloheader"></h3>
          <KeyboardArrowDownIcon sx={{ color: "#ffffff", width: "5vw" }} />
        </div>
  </div>*/}

			{/************ Formulario ***********/}


			<div className="box-container-contact" >
				<div className="info-contact">

					<h1 className="title-contacto">FICU</h1>
					<h1 className="t-contacto2">Fundación para la Integración Cultural</h1>


					<p className="text-contacto">+54 9 11 3027-3150</p>
					<p className="text-contacto">somosficu@gmail.com</p>
					<p className="text-contacto">CABA - BS. AS. ARGENTINA</p>


					<div className="containerf" >
						<section className="mb-4">
							{" "}
							<a
								href="https://www.facebook.com/somosficu"
								data-toggle="tooltip"
								data-placement="top"
								title="Facebook"
								target="_blank"
							>
								<FacebookIcon sx={{ color: "#6667AB", margin: "5px" }} />
							</a>
							<a
								href="https://www.instagram.com/somosficu/"
								data-toggle="tooltip"
								data-placement="top"
								title="Instagram"
								target="_blank"
							>
								<InstagramIcon sx={{ color: "#6667AB", margin: "5px" }} />
							</a>
							<a
								href="https://www.linkedin.com/company/somosficu/"
								data-toggle="tooltip"
								data-placement="top"
								title="Instagram"
								target="_blank"
							>
								<LinkedInIcon sx={{ color: "#6667AB", margin: "5px" }} />
							</a>
							<a
								href="https://mobile.twitter.com/somosficu"
								data-toggle="tooltip"
								data-placement="top"
								title="Instagram"
								target="_blank"
							>
								<TwitterIcon sx={{ color: "#6667AB", margin: "5px" }} />
							</a>
							<a
								href="https://wa.me/message/SYMPIWMLKTE3O1"
								data-toggle="tooltip"
								data-placement="top"
								title=" WhatsApp"
								target="_blank"
							>
								< WhatsAppIcon sx={{ color: "#6667AB", margin: "5px" }} />
							</a>
						</section>
					</div>

				</div>

				<div>
					<Contacto />
				</div>
			</div>


		</>
	);
}

export default Pcontacto;
