import React, { useEffect } from "react";
import "./cards2.scss";
import Profile1 from "./ficu1.jpg";
import Profile2 from "./ficu2.jpg";
import Profile3 from "./ficu3.jpg";
import { Link as LinkRouter } from "react-router-dom";


import { actionTypes } from '../../../core/context/reducer';
import { useStateValue } from '../../../core/context/StateProvider';
import axios from 'axios';


function Cards2() {

  const [{ events }, dispatch] = useStateValue()

  useEffect(() => {
    axios.get("http://localhost:4000/api/events")
      .then(response => {
        dispatch({
          type: actionTypes.EVENTSDB,
          events: response.data.response.events
        })
      })

  }, [])

  return (
    <>
      <div class="container-cards2">



        {events.map(item => {
          return (

            <LinkRouter to={`/evento/${item._id}`}>
              <div class="card-wrapper">
                <div class="card profile-two">
                  <div class="card-image profile-img--two">
                    <img src={process.env.PUBLIC_URL + `/img/eventos/${item.galeria[0]}`} alt="profile two" />
                  </div>

                  <div class="details jane">
                    <h2>
                      {item.titulo}
                      <br />
                      <span class="job-title">{item.lugar}</span>
                      <p class="job-title">{item.fecha}</p>
                    </h2>
                  </div>
                </div>
              </div>

            </LinkRouter>
          )
        })}










      </div>
    </>
  );
}

export default Cards2;
