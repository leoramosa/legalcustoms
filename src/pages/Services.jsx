
import React,  { useContext }  from 'react'
import {Link} from 'react-router-dom'
import AppContext from "../context/AppContext";
import './styles/services.css'
// Import Swiper React components
import 'swiper/swiper.scss';

import ser1 from '../images/ser1.png'



function Services () {
  const {state} =useContext(AppContext)
  const { services } = state;
  console.log(services)
  
  return (
    <>
      <div className="content_services">
          <div className="title-event">
            <p>
              Mis servicios
            </p>
          </div>

          <div className="row_service ">
          <div className="content-service-g">
                  <div className="services_all" >
                    <div className="wrapper_all">
                    <div className="breve">
                      <img src="{image} "alt=""/>
                    </div>
                    <p className="detail-title">{services[0].name}</p>
                    <div className="breve">{services[0].breve}</div>
                    <div className="content-button">
                        <div className="content-bo">
                          <button className="button-whatsapp" type="button">
                            <a className="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=51944408025&text=${services[0].mensaje}`} rel="noopener noreferrer" target="_blank">
                              <i className="fab fa-whatsapp"></i> {services[0].buttontype}
                            </a>
                          </button> 
                        </div>
                        <div className="content-bt">
                          <Link className="detail-ver" to="/one" >ver más</Link>
                        </div>
                    </div>
                    </div>
                    <div className="wrapper_two">
                      <div className="wrapper_img">
                        <img className="" src={ser1} alt=""/>
                      </div>
                    </div>
                   </div>
          </div>
          </div>
 
        
        </div>
    </>
  )
}

export default Services;