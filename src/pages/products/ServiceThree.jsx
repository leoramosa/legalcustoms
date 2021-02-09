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
                      {services[2].name}
                    </p>
                </div>
              </div>
          </div>
        </div>

        <div className="service_detail_content">
          <div className="service_detail">
              <ul>
              <li>Procedimientos de obtención de permisos de operación, Autorizaciones y Licencias ante la Dirección General de Transporte Aéreo (DGTA), Dirección General de Aeronáutica Civil (DGAC), Autoridad Portuaria Nacional (APN), Dirección General de Capitanías y Guardacostas (DICAPI), Empresa Nacional de Puertos (ENAPU), etc.</li>	
              <li>Concesiones Terrestres, Portuarias y Aeroportuarias. </li>	
              <li>Redacción de escritos ante INDECOPI, MINCETUR, SUNAT, OSCE, etc.</li>	
              <li>Procedimientos Administrativos ante INDECOPI, MINCETUR, SUNAT, OSCE, etc.</li>	


            </ul>
            <div className="detail_request">
             <div>Envíanos tu información: </div> <div className="content-link-request"><a className="whatsapp" href={`https://api.whatsapp.com/send?phone=51936859231&text=${services[2].mensaje}${services[2].name}`} rel="noopener noreferrer"><i className="fab fa-whatsapp"></i> whatsapp </a> <a className="btn_email" href="mailto:mchavez@legalcustomsperu.com"  rel="noreferrer" target="_blank"><i className="far fa-envelope"></i> correo</a></div> 
            </div>
            <div className="detail_requestTwo">
              Llamanos : <a href="tel://+51936859231" className="btn_call"><i className="fas fa-phone-alt"></i> +51 936 859 231</a>
            </div>
          </div>
          <div className="service_detail-img">
            <img src={services[2].detail} alt=""/>
          </div>
        </div>


        
    </div>
    </>
  )
}

export default ServiceOne;
