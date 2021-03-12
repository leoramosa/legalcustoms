import React from 'react'
import './styles/footer.css'
import './styles/Footertwo.scss'
import { Link } from "react-router-dom";
 const Footer = () => {
  return (
    <>
     <div className="content_footer">
      <div className="content-layout">

      
       <div className="content_info">
         <div className="info">
           <p className="title-info">Contáctanos</p>
           <div className="">
            <p>Teléfono: +51 936 859 231</p>
            <p>Email: mchavez@legalcustomsperu.com</p>
            <p>Direción: Calle Enrique Pastor  108
              <br/>
              Urb. Javier Prado - San Borja - Lima</p>
           </div>
         </div>
         <div className="redes">
            <p className="title-info">Síguenos:</p>
            <div className="icon-redes">
              <a href="https://www.facebook.com/legal.customs.pe" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
              <a href="https://www.instagram.com/legal.customs.pe" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>

            </div>
         </div>
         <div className="explorer">
           <p className="title-info">Destacados</p>
           <div className="link-footer">
            <Link className="footerLink" to="/nosotros"><p>Nosotros</p></Link> 
            <Link className="footerLink" to="/servicios"><p>Servicios</p></Link> 
             
           </div>
         </div>
       </div>
       <div className="derechos desktop">
         <p>© Legal Customs 2021 -Todos los derechos reservados</p>
         <p className="diseño">Diseñado y desarrollado por <a className="dweb" href="https://leoramos.netlify.app/" target="_blank" rel="noreferrer"> Leonardo Ramos</a></p>
       </div>
       <div className="derechos mobile">
         <p>© Legal Customs 2021 </p>
         <p>Todos los derechos reservados</p>
         <p className="diseño">Diseñado y desarrollado por <a className="dweb" href="https://leoramos.netlify.app/" target="_blank" rel="noreferrer"> Leonardo Ramos</a></p>
       </div>

       </div>
     </div>
    </>
  )
}

export default Footer;
