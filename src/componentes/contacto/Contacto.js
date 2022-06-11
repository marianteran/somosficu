import React from "react";
import "./contacto.css";


function Contacto() {
	return (
		<>

			<div id="form-main">
				<div id="form-div">
				<div id="mc_embed_signup">
				<form action="https://gmail.us9.list-manage.com/subscribe/post?u=a8d976e07599c33b061233d0d&id=0b2edb8fe4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
					<div id="mc_embed_signup_scroll">
						<h3 className="t-icono">Suscríbete</h3>
						<div className="text-contacto"><span className="asterisk">*</span> item requeridos</div>
						<div className="mc-field-group">
							<label htmlFor="mce-EMAIL"></label>
							<input type="email"  name="EMAIL" placeholder="* Email" required className="form-control rounded-pill" id="mce-EMAIL"  />

					
						</div>
						<div className="mc-field-group">
							<label htmlFor="mce-FNAME"></label>
							<input type="text" name="FNAME" required className="form-control rounded-pill" placeholder="* Nombre"  id="mce-FNAME" />
						</div>
						<div id="mce-responses" className="clear foot">
							<div className="response" id="mce-error-response" style={{ display: 'none' }} />
							<div className="response" id="mce-success-response" style={{ display: 'none' }} />
						</div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
						<div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_a8d976e07599c33b061233d0d_0b2edb8fe4" tabIndex={-1} defaultValue /></div>
						<div className="optionalParent ">
							<div className="clear foot">
								<input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-nosotros mt-4" value="Enviar" />
								</div>	
						</div>
					</div>
				</form>
			</div>
				</div>
			</div>

		</>

	);
}

export default Contacto;
