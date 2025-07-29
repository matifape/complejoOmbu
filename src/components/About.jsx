import React from "react";
import {textoAbout} from "/constants/datas.js";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:px-4" id="about">
      <div>
        <h2 className="text-4xl py-4 text-center mb-6 font-bold bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#DAA520] text-transparent bg-clip-text leading-tight">Complejo El Ombu</h2>
        <p className="text-left px-2 md:text-xl  md:leading-relaxed  backdrop-blur-sm rounded-xl p-6 border border-white/20 whitespace-pre-line ">
          {textoAbout}
        </p>
      </div>
      <img src="/images/logo.png" alt="logo" className="w-2xl h-auto  drop-shadow-md rounded-full border-2 border-[var(--marron-madera)] "  />
    </div>
  );
};

export default About;
