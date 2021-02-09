import React, { useContext }from 'react'
import  AppContext   from '../../context/AppContext';
import './styles/styleSerOne.css'



const ServiceOne = () => {
  const {state} = useContext(AppContext)
  const { services } = state;


  return (
    <>
      <div className="content_service-detail">
        <div className="header-service">
          <div className="header-content">
            <div className="overlay_service">
                <div className="content-title">
                    <p>
                      {services[10].name}
                    </p>
                </div>
              </div>
          </div>
        </div>

        <div className="service_detail_content">
          <div className="service_detail">
              <ul>
              <li>Asesoría y Consultoría en impuestos.</li>	
              <li>Consultoría tributaria permanente.</li>	
              <li>Revisión de Declaraciones tributarias.</li>	
              <li>	Planteamiento Tributario.</li>
              <li>	Auditoría Tributaria.</li>
              <li>	Estructuración tributaria de la operación.</li>
              <li>Recuperación de créditos fiscales.</li>	
              <li>Análisis tributario al ingresar al país.</li>	
              <li>Estrategia internacional para el análisis de impuestos.</li>	
              <li>Outsourcing tributario.</li>	
              <li>Asesoría tributaria para accionistas de empresas privadas.</li>	
              <li>	Asesoría integral para expatriados.</li>
              <li>Asesoría tributaria en Zonas Francas, Selva y Especiales.</li>	

            </ul>
            <div className="detail_request">
              Envíanos tu información : <a className="whatsapp" href={`https://api.whatsapp.com/send?phone=51936859231&text=${services[10].mensaje}${services[10].name}`}><i className="fab fa-whatsapp"></i> whatsapp </a> <a className="btn_email" href="mailto:mchavez@legalcustomsperu.com"  rel="noreferrer" target="_blank"><i className="far fa-envelope"></i> correo</a>
            </div>
            <div className="detail_requestTwo">
              Llamanos : <a href="tel://+51936859231" className="btn_call"><i className="fas fa-phone-alt"></i> +51 936 859 231</a>
            </div>
          </div>
          <div className="service_detail-img">
            <img src={services[10].detail} alt=""/>
          </div>
        </div>


        
    </div>
    </>
  )
}

export default ServiceOne;
