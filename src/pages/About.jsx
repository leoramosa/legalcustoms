import React from 'react'
import './styles/about.css'
/* import imgInfo from '../images/about_only2.png' */

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
              <a className="" href>
                <button className="contact_link" type="button">
                Contáctanos
                </button>
              </a>
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
          </div>
          <div className="row_about">
            <div className="">
              imagen
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;