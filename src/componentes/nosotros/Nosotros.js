import React, { useEffect } from "react";
import "./nosotros.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Carousel2 from "../carousel/Carousel2";
import "animate.css";



import { actionTypes } from '../../core/context/reducer';
import { useStateValue } from '../../core/context/StateProvider';
import axios from 'axios';



function Nosotros() {

	const [{ nosotros }, dispatch] = useStateValue()

	console.log(nosotros)
	useEffect(() => {
		window.scrollTo(0, 0);

		axios.get("http://localhost:4000/api/nosotros")
			.then(response => {
				dispatch({
					type: actionTypes.NOSOTROSDB,
					nosotros: response.data.response.nosotros
				})
			})






	}, []);

	return (
		<>
			{/*********** Banner **************/}

			<Carousel2 />
			<div style={{ height: "10vh" }}></div>

			{/*<div className="gradient-nosotros w-100 h-100">
      <div className="banner-image-nosotros w-100 h-100 d-flex justify-content-center align-items-center">
        <div className="content-header">
          <h1 className="animate__animated animate__fadeInDown tituloheader-nosotros">
            NOSOTROS
          </h1>
          <h3 className="animate__animated animate__fadeInDown subtituloheader"></h3>
          <KeyboardArrowDownIcon sx={{ color: "#ffffff", width: "5vw" }} />
        </div>
      </div>
  </div>*/}




			{/*********** Banner2 **************/}




			{/*********** Cards **************/}


			<h3 className="t-icono">Nuestro Equipo</h3>
			<p className="p-icono">Miembros que conforman nuestro quipo</p>

			<div className="boxi-nosotros">

				{nosotros.map(item => {
					return (
						<div className="container-profile-nos">
							<div className="profile-photo-nos">
								<img src={process.env.PUBLIC_URL + `/img/nosotros/${item.foto}`} alt="profile"></img>
							</div>
							<h3 className="profile-name">{item.nombre} {item.apellido}</h3>
							<h4 className="profile-cargo">{item.cargo}</h4>
							{/*<p className="profile-p">Venezolano</p>*/}

						</div>

					)

				})}

			</div>

		</>
	);
}

export default Nosotros;
