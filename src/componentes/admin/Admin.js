import React from "react";
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



const Admin = () => {
    return (
        <>

            <div id="box-admin-p">
                <div className="relleno"></div>



                <input type="checkbox" className="toggle-check-admin" id="toggle" hidden />
                <label className="toggle-admin" htmlFor="toggle">Menu</label>

                <div className="container-menu-admin">
                    <nav className="menu-admin">
                        <a href="#" className="item-admin">Eventos</a>
                        <a href="#" className="item-admin">Nosotros</a>
                        <a href="#" className="item-admin">Artistas</a>
                        <a href="#" className="item-admin">Contacto</a>
                        <a href="#" className="item-admin">Sign out</a>
                    </nav>
                </div>


            </div>

        </>
    );
};

export default Admin;
