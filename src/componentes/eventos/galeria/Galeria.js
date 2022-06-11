import React, { useEffect } from "react";
/* import "../eventos.css";
import "animate.css"; */

import "./galeria.css"

import image1 from "./img/reencuentro1.jpg"
import image2 from "./img/reencuentro2.jpg"
import image3 from "./img/reencuentro4.jpg"
import image4 from "./img/reencuentro7.jpg"
import image5 from "./img/reencuentro9.jpg"






function Galeria() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
          <div class="accordian">
	<ul>
		<li>
			
		
				<img src={image1}/>
		
		</li>
		<li>
			
			
        <img src={image2}/>
		
		</li>
		<li>
			
		
        <img src={image3}/>
			
		</li>
		<li>
			
		
        <img src={image4}/>
		</li>
		<li>
			
		
        <img src={image5}/>
		</li>
	</ul>
</div>

        </>
    );
}

export default Galeria;
