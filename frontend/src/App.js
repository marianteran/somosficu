import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './componentes/navigation/Navbar';
import Home from './componentes/home/Home'
import Nosotros from './componentes/nosotros/Nosotros'
import Eventos from './componentes/eventos/Eventos'
import Evento from './componentes/eventos/Evento'
import Pcontacto from './componentes/contacto/Pcontacto'
import Artistas from './componentes/artistas/Artistas'
import Oficios from './componentes/oficios/Oficios'
import Footer from './componentes/footer/Footer'
import './App.css';
import Admin from "./componentes/admin/Admin";

import { actionTypes } from './core/context/reducer';
import { useStateValue } from './core/context/StateProvider';
import axios from 'axios';


function App() {

  const [{ events}, dispatch] = useStateValue()

  useEffect(() => {
    axios.get("http://localhost:4000/api/events")
      .then(response => {
        dispatch({
          type: actionTypes.EVENTSDB,
          events: response.data.response.events
        })
      })

  }, [])

  console.log(events)



  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/evento/:id" element={<Evento />} />
          <Route path="/artistas" element={<Artistas />} />
          <Route path="/oficios" element={<Oficios />} />
          <Route path="/contacto" element={<Pcontacto />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    



    </div>
  );
}

export default App;
