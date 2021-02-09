import React from 'react'
import './styles/about.css'
import imgAbout from '../images/about.jpg'
import { Link } from 'react-router-dom'

 const Home = () => {
  return (
    <>
      <div className="content_about">
        <div className="about-header">
          <div className="about_overlay">
          <div className="about_container">
              <p className="about_title">Nuestra <strong>Historia</strong></p>
              <p className="about_info">Nuestra experiencia en el campo del Derecho </p>
              <br/>
              <div className="link_contact">
              <Link to="/contacto" className="" >
                <button className="contact_link" type="button">
                Contáctanos
                </button>
              </Link>
              </div>
             
            </div>
          </div>
        </div>
        <div className="about_information">
          <div className="row_about">
       <p>
            Somos una firma de Abogados con sólidos compromisos y valores éticos, que en base a nuestra experiencia ofrecemos asesoramiento legal integral a particulares y empresas.  Siendo nuestro principal objetivo, brindar soluciones legales objetivas, oportunas y eficientes, bajo el nivel de transparencia profesional que nos caracteriza, para con ello agregar valor a los objetivos trazados por cada cliente.
                <br/><br/>
      En tal sentido, brindamos asesoramiento de forma preventiva, evitando con ello situaciones poco favorables a nuestros clientes, pero también ofrecemos la mejor respuesta jurídica ante situaciones imprevisibles o inevitables.
      <br/>
      <br/>
      Asimismo, ofrecemos servicios de capacitación jurídica, en las diversas ramas de las cuales se relaciona en derecho.
      <br/><br/>
      La formación, compromiso y empatía, son cualidades que forman parte de nuestro ADN profesional, siendo el ejercicio del derecho no sólo una profesión, sino nuestra vocación.

       </p>
       <p className="second_title">Nuestro Compromiso</p>
       <p>
       A raíz de la crisis sanitaria mundial, la cual afectó enormemente la economía a nivel mundial, y aun más a nuestro país, vimos la posibilidad de crear nuevos lineamientos de asesoría jurídica empresarial,  que permitan a los particulares y empresas, desarrollar sus actividades de comercio nacional y exterior, dentro del marco ético y moral, razón por la cual, hemos asumido el compromiso de proveer un asesoramiento calificado, respetando rigurosamente los principios de confidencialidad y ética profesional, encontrándonos siempre delante de los acontecimientos, evitando conflictos y situaciones de perjuicio a nuestros clientes, y desarrollando nuestros mejores esfuerzos en presentar a nuestros clientes una solución rápida efectiva y económica, bajo la transparencia profesional que nos caracteriza. 
       </p>
          </div>
          <div className="row_about">
            <div className="img_about">
              <img src={imgAbout} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;