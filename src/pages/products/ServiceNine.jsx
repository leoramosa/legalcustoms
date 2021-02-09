import React, { useContext }from 'react'
import  AppContext   from '../../context/AppContext';
import './styles/styleSerOne.css'
import detail1  from '../../images/service/detail1.png'


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
                      {services[8].name}
                    </p>
                </div>
              </div>
          </div>
        </div>

        <div className="service_detail_content">
          <div className="service_detail">
              <ul>
              <li>Constitución de empresas, aumento de capital, modificaciones estatutarias, transformaciones, fusiones, escisiones y adquisiciones, Due diligence. </li> 
              <li>Manejo de actas de Junta de Accionistas y Directorio, representación legal.</li> 
              <li>Asesoría contractual en la negociación, elaboración, celebración, ejecución y extinción de acuerdos y contratos comerciales.</li>	
              <li>Asesoría en la adquisición o transferencia de empresas o líneas de negocio.</li>	
              <li>Asesoría para la estructuración o reorganización empresarial.</li>
              <li>Asesoría en propiedad intelectual, registro, licenciamiento y renovación de signos distintivos.</li>	
              <li>Visas de trabajo para expatriados, contratos laborales, planes de remuneración</li>	
            </ul>
            <div className="detail_request">
             <div>Envíanos tu información: </div> <div className="content-link-request"><a className="whatsapp" href={`https://api.whatsapp.com/send?phone=51936859231&text=${services[8].mensaje}${services[8].name}`} rel="noopener noreferrer"><i className="fab fa-whatsapp"></i> whatsapp </a> <a className="btn_email" href="mailto:mchavez@legalcustomsperu.com"  rel="noreferrer" target="_blank"><i className="far fa-envelope"></i> correo</a></div> 
            </div>
            <div className="detail_requestTwo">
              Llamanos : <a href="tel://+51936859231" className="btn_call"><i className="fas fa-phone-alt"></i> +51 936 859 231</a>
            </div>
          </div>
          <div className="service_detail-img">
            <img src={detail1} alt=""/>
          </div>
        </div>


        
    </div>
    </>
  )
}

export default ServiceOne;
