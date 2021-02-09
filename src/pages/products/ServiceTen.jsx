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
                      {services[9].name}
                    </p>
                </div>
              </div>
          </div>
        </div>

        <div className="service_detail_content">
          <div className="service_detail">
              <ul>
              <li>Diagnóstico y Consultoría en precios de transferencia.</li>	
              <li>	Precios de transferencia, elaboración de documentación comprobatoria y planeamiento.</li>
              <li>Consultoría especial y/o permanente.</li>	
              <li>Acuerdos anticipados de Precios.</li>	
              <li>Desarrollo de Políticas de Precios de Transferencia.</li>	
              <li>Estudios de Planeamiento Tributario y Precios de Transferencia.</li>	
              <li>	Defensa en caso de Fiscalización Administrativa.</li>

            </ul>
            <div className="detail_request">
             <div>Envíanos tu información: </div> <div className="content-link-request"><a className="whatsapp" href={`https://api.whatsapp.com/send?phone=51936859231&text=${services[9].mensaje}${services[9].name}`} rel="noopener noreferrer"><i className="fab fa-whatsapp"></i> whatsapp </a> <a className="btn_email" href="mailto:mchavez@legalcustomsperu.com"  rel="noreferrer" target="_blank"><i className="far fa-envelope"></i> correo</a></div> 
            </div>
            <div className="detail_requestTwo">
              Llamanos : <a href="tel://+51936859231" className="btn_call"><i className="fas fa-phone-alt"></i> +51 936 859 231</a>
            </div>
          </div>
          <div className="service_detail-img">
            <img src={services[9].detail} alt=""/>
          </div>
        </div>


        
    </div>
    </>
  )
}

export default ServiceOne;
