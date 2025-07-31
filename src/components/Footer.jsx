import { FaInstagram,FaFacebookF  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-5 md:flex-row bg-[var(--verde-musgo)] md:justify-between md:px-10 md:pt-5 text-[var(--crema)] md:items-center'>
      <div><img src="images/logo.png" alt="logo" className='w-30'/></div>
      <div className="flex flex-col">
        <p className="text-center">Visita nuestras redes</p>
        <div className="flex md:gap-5 gap-2 mt-2 md:items-center md:mt-5  justify-center">
            <a  href="https://www.instagram.com/hospedaje_elombu?igsh=NndlNGl4YWIybDhx" target='_blank'><FaInstagram className="text-2xl"/></a>
        <a href="https://www.facebook.com/share/16iLRuwdwt/?mibextid=wwXIfr" target="_blank"><FaFacebookF className="text-2xl"/></a>
        </div>
        
      </div>
      <div className="flex gap-5 mb-5 md:flex-col md:gap-1">
        <a href="#mainContent">Inicio</a>
            <a href="#instalaciones">Instalaciones</a>
            <a href="#about">Nosotros</a>
            <a href="#Servicios">Servicios</a>
      </div>
    </div>
  )
}

export default Footer
