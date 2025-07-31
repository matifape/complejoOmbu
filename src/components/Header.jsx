import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import {  useEffect } from "react";
import WhatsAppButton from "./WhatsAppButton";

function PruebaHeader() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false); // Scroll hacia abajo, ocultar
      } else {
        setShowHeader(true); // Scroll hacia arriba, mostrar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`w-full z-50 backdrop-blur-2xl fixed top-0 text-[var(--marron-madera)] p-4 md:p-6 transition-transform duration-300 ${
    showHeader ? "translate-y-0" : "-translate-y-full"
  }`}>
      <div className="flex justify-between items-center">
        {/* IZQUIERDA: Menú hamburguesa en mobile o logo en desktop */}
        <div className="flex items-center gap-3">
          {/* Menú hamburguesa (solo en móvil) */}
          <button
            onClick={() => setMenuAbierto(true)}
            className="block md:hidden"
          >
            <IoMdMenu className="w-6 h-6" />
          </button>

          {/* Logo (solo en escritorio) */}
          <div className="hidden md:block">
            <img src="images/logo.png" alt="logo" className="h-20" />{" "}
            {/* Ajustá la ruta y tamaño */}
          </div>
        </div>

        {/* CENTRO: Título */}
        <h2 className="text-base md:text-3xl text-center absolute left-1/2 -translate-x-1/2 ">
          Complejo El Ombu
        </h2>

        {/* DERECHA: Iconos en mobile, enlaces en escritorio */}
        <div className="flex items-center gap-4">
          {/* WhatsApp (solo en mobile) */}
          <WhatsAppButton className="text-2xl block md:hidden" number= "5492252485824" />

          {/* Enlaces (solo en escritorio) */}
          <nav className="hidden md:flex gap-6 text-l ">
            <a href="#mainContent">Inicio</a>
            <a href="#instalaciones">Instalaciones</a>
            <a href="#about">Nosotros</a>
            <a href="#Servicios">Servicios</a>
          </nav>
        </div>
      </div>

      {/* Menú lateral para móvil */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-full bg-white text-black
          flex flex-col items-start justify-center gap-8 text-xl z-40
          transform transition-transform duration-300 ease-in-out
          ${menuAbierto ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button
          onClick={() => setMenuAbierto(false)}
          className="absolute top-4 left-4 text-black"
        >
          <IoMdClose className="w-8 h-8" />
        </button>

        <nav className="flex flex-col gap-5 px-6">
          <a href="#mainContent" onClick={() => setMenuAbierto(false)}>
            Inicio
          </a>
          <a href="#instalaciones" onClick={() => setMenuAbierto(false)}>
            Instalaciones
          </a>
          <a href="#about" onClick={() => setMenuAbierto(false)}>
            Nosotros
          </a>
          <a href="#Servicios">Servicios</a>
        </nav>
        
      </div>
    </header>
  );
}

export default PruebaHeader;
