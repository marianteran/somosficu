import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import "./admin.css";

/* icons */
import { BiUser } from 'react-icons/bi';
/*import { FiUserPlus } from 'react-icons/fi';*/
import { IoIosNotifications } from 'react-icons/io';
import { FiFile } from 'react-icons/fi';


import Header from "./Header"
import Aside from "./Aside"
import Content from "./Content";
import Footer from "./Footer";
import Carga from "./Carga"
import MostrarEventos from "./adminEventos/MostrarEventos";


const Admin = () => {
    return (
        <>

            <div id="box-admin-p">
                <div className="relleno"></div>

                <input type="checkbox" className="toggle-check-admin" id="toggle" hidden />
                <label className="toggle-admin" htmlFor="toggle">Menu</label>

                <div className="container-menu-admin">
                    <nav className="menu-admin">
                        <LinkRouter to={<MostrarEventos/>} className="item-admin">Evento</LinkRouter>
                        <a href="#" className="item-admin">Nosotros</a>
                        <a href="#" className="item-admin">Artistas</a>
                        <a href="#" className="item-admin">Contacto</a>
                        <a href="#" className="item-admin">Sign out</a>
                    </nav>
                </div>

                <div style={{border:"2px solid red"}}>
                    <h1>Bienvenido Administrador</h1>
                <Carga/>  
                </div>


            </div>

        </>
    );
};

export default Admin;
