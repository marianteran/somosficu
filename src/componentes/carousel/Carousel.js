import React from "react";
import '../carousel/carousel.scss'
import '../home/home.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import 'animate.css';
import Logo from "../navigation/logo2.png";
import { Link as LinkRouter } from "react-router-dom";




function Carousel() {



	return (
		<>
			
			<LinkRouter to="/eventos">
				<button type="button" className="animate__animated animate__fadeInDown btn btn-header btn-primary">
					Próximos eventos
				</button>
			</LinkRouter>

			<img src={Logo} alt="logo"  className="animate__animated animate__fadeInDown logo" />

			<div class="slideShow">
				<div class="slide3" style={{}}>
				</div>

				<div class="slide2">
				</div>

				<div class="slide1">
				</div>

				<div class="banner">
					<div className="gradient">
						<div className="content-header">
							<h6 className="animate__animated animate__fadeInDown tituloheader"></h6>
							<h6 className="animate__animated animate__fadeInDown tituloheader2"></h6>
							<h6 className="animate__animated animate__fadeInDown subtituloheader2">Fundación para la integración Cultural</h6>
							<KeyboardArrowDownIcon className="animate__animated animate__fadeInDown" sx={{ color: "#ffffff", width: "20vw", marginTop: "90vh", marginLeft: "40vw" }} />
						</div>
					</div>

				</div>

			</div>

		

		</>
	);
}

export default Carousel;
