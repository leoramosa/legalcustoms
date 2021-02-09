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
                      {services[1].name}
                    </p>
                </div>
              </div>
          </div>
        </div>

        <div className="service_detail_content">
          <div className="service_detail">
          <ul>
             <li>Contratos de Transporte de Carga General – Contratos Multimodales – Contratación de Transporte Aéreo – Contrato de Fletamento.</li> 
             <li>Demoras y daños por detención. Fletes, Falsos Fletes, Demoras y Sobreestadía. </li> 
             <li>Averías Gruesas.</li> 
             <li>Arresto de buques.</li> 
             <li>Reclamaciones por pérdidas de carga y daños a la mercancía.</li> 
             <li>Siniestros y Seguros Marítimos.</li> 
             <li>Obligaciones y Derechos derivados de la emisión de Conocimientos de Embarque (Bill of lading - BL), Guías Aéreas  (Air Waybill - AWB) y otros tipos de documentos de transporte.</li> 
             <li>Régimen de Responsabilidad del Porteador.</li> 
             <li>Operaciones Logísticas (Transporte Multimodal y Almacenaje y Distribución – Supply Chain).</li> 

            </ul>
            <div className="detail_request">
              Envíanos tu información : <a className="whatsapp" href={`https://api.whatsapp.com/send?phone=51936859231&text=${services[1].mensaje}${services[1].name}`}><i className="fab fa-whatsapp"></i> whatsapp </a> <a className="btn_email" href="mailto:mchavez@legalcustomsperu.com"  rel="noreferrer" target="_blank"><i className="far fa-envelope"></i> correo</a>
            </div>
            <div className="detail_requestTwo">
              Llamanos : <a href="tel://+51936859231" className="btn_call"><i className="fas fa-phone-alt"></i> +51 936 859 231</a>
            </div>
          </div>
          <div className="service_detail-img">
            <img src={services[1].detail} alt=""/>
          </div>
        </div>


        
    </div>
    </>
  )
}

export default ServiceOne;
