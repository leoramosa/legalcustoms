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
                      {services[0].name}
                    </p>
                </div>
              </div>
          </div>
        </div>

        <div className="service_detail_content">
          <div className="service_detail">
              <ul>
              <li>Comercio Internacional. Compra – venta internacional.</li>
               <li> Transacciones y acuerdos de Comercio Internacional.</li>
               <li>  Asesoría y Consultoría de Impuestos.</li>
               <li> Recuperación de créditos fiscales. </li>
               <li>  Auditoría Aduanera.</li>
               <li> Asesoría en procesos de fiscalización aduanera.</li>
            </ul>
            <div className="detail_request">
             <div>Envíanos tu información: </div> <div className="content-link-request"><a className="whatsapp" href={`https://api.whatsapp.com/send?phone=51936859231&text=${services[0].mensaje}${services[0].name}`} rel="noopener noreferrer"><i className="fab fa-whatsapp"></i> whatsapp </a> <a className="btn_email" href="mailto:mchavez@legalcustomsperu.com"  rel="noreferrer" target="_blank"><i className="far fa-envelope"></i> correo</a></div> 
            </div>
            <div className="detail_requestTwo">
              Llamanos : <a href="tel://+51936859231" className="btn_call"><i className="fas fa-phone-alt"></i> +51 936 859 231</a>
            </div>
          </div>
          <div className="service_detail-img">
            <img src={services[0].detail} alt=""/>
          </div>
        </div>


        
    </div>
    </>
  )
}

export default ServiceOne;
