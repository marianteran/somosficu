import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Link as LinkRouter } from "react-router-dom";
import { useStateValue } from "../../core/context/StateProvider";
import './swiper.css'

const CarouselEvent = () => {
    const [{ events }, dispatch] = useStateValue();

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
        <div>
            <div className="">



                <Carousel
                    responsive={responsive}
                    draggable={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    transitionDuration={2000}
                    arrows={false}

                >
                    {events.map((item) => {
                        return (

                            <LinkRouter to="/eventos">
                            <div className='carousel-event'>
                                <img src={
                                    process.env.PUBLIC_URL + `/img/eventos/${item.galeria[0]}`} alt='cultura' className="d-block w-100" />

                                <div className='carousel-event-content'>
                                    <h5 className="carousel-event-titulo">{item.titulo}</h5>
                                    <p className="carousel-event-place">{item.lugar}</p>
                                </div>
                            </div>
                            </LinkRouter>

                        );
                    })}
                </Carousel>

            </div>





        </div>
    )
}

export default CarouselEvent