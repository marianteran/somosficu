import React from 'react'
import cultura1 from '../home/img/ficu1.jpg'
import cultura2 from '../home/img/ficu2.jpg'
import cultura3 from '../home/img/ficu3.jpg'
import Carousel from "react-multi-carousel";


const CarouselColaboradores = () => {
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
            {/*********** Banner **************/}

            <div className="bannerPrincipal">

                <div className="bannerPrincipalContenido">

                    <div className="bannerPrincipalTexto">

                        <h6 className="animate__animated animate__fadeInDown bannerPrincipalTitulo">COLABORADORES</h6>
                        <h6 className="animate__animated animate__fadeInDown bannerPrincipalSubTitulo">Entérate de todo lo que esta por llegar</h6>
                    </div>
                </div>
                <Carousel
                    responsive={responsive}
                    draggable={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    transitionDuration={2000}
                    arrows={false}

                >
                    <div>
                        {" "}
                        <img src={cultura1} alt='cultura' className="d-block w-100" />

                    </div>
                    <div>
                        {" "}
                        <img src={cultura2} alt='cultura' className="d-block w-100" />
                    </div>
                    <div>
                        {" "}
                        <img src={cultura3} alt='cultura' className="d-block w-100" />
                    </div>
                </Carousel>

            </div>

            {/*********** FIN Banner **************/}

        </>
    )
}

export default CarouselColaboradores