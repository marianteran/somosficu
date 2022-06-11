import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../../home/home.css'
import '../../artistas/artistas.css'
import './cards2.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Profile1 from './ficu1.jpg'

import { Link as LinkRouter } from "react-router-dom";


function CarouselEvents() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>

            <Carousel
                responsive={responsive}
                draggable={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                transitionDuration={2000}
                arrows={true}

            >
                <div>

                    <div class="card-image profile-img--two">
                        <img src={Profile1} alt="profile two" />
                    </div>

                   <div class="card-image profile-img--two">
                        <img src={Profile1} alt="profile two" />
                    </div>


                    <div class="card-image profile-img--two">
                        <img src={Profile1} alt="profile two" />
                    </div>

                </div>
            </Carousel>


        </>
    );
}

export default CarouselEvents;
