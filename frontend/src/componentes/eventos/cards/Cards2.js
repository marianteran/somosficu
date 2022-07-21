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
    axios.get("https://somosficu.org/api/events")
      .then(response => {
        //console.log(response.data)
        dispatch({
          type: actionTypes.EVENTSDB,
          events: response.data
        }) 
      })

  }, [])

  return (
    <>
      <div className="container-cards2">



        {events.map(item => {
          return (

            <LinkRouter to={`/evento/${item._id}`}>
              <div className="card-wrapper" key={item._id}>
                <div className="card profile-two">
                  <div className="card-image profile-img--two">
                    <img src={process.env.PUBLIC_URL + `/img/eventos/${item.galeria[0]}`} alt="profile two" />
                  </div>

                  <div className="details jane">
                    <h2>
                      {item.titulo}
                      <br />
                      <span className="job-title">{item.lugar}</span>
                      <p className="job-title">{item.fecha}</p>
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
