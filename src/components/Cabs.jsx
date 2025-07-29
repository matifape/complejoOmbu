import Custom from "./Custom";
import {
  Images,
  Cab1,
  Cab2,
  Cab3,
  Depto12,
  Depto34,
  cab12Text,
  deptoText
} from "/constants/datas.js";

import React from 'react'

const Cabs = () => {
  return (
    <>
    <Custom
  images={Cab1}
  title="Cabaña 1"
  containerClass=" border border-gray-200 shadow-sm py-16 bg-[var(--verde-musgo)]"
  imageClass="rounded-md shadow-sm transition-all duration-500 hover:scale-105 border-10 border-[var(--marron-madera)]"
  buttonClass="bg-gray-100 hover:bg-gray-300"
  titleClass=" "
  h3class=""
  pclass="whitespace-pre-line"
  textInfo= {cab12Text}
/>


      <Custom
  images={Cab2}
  title="Cabaña 2"
  containerClass=" border border-gray-200 shadow-sm py-16 bg-[var(--verde-musgo)]"
  imageClass="rounded-md shadow-sm transition-all duration-500 hover:scale-105 border-10 border-[var(--marron-madera)]"
  buttonClass="bg-gray-100 hover:bg-gray-300"
  titleClass=""
  h3class="font-light"
  pclass="whitespace-pre-line"
  reverse={true} 
  textInfo={cab12Text}
/>
      <Custom
  images={Cab3}
  title="Cabaña 3"
  containerClass=" border border-gray-200 shadow-sm py-16 bg-[var(--verde-musgo)]"
  imageClass="rounded-md shadow-sm transition-all duration-500 hover:scale-105 border-10 border-[var(--marron-madera)]"
  buttonClass="bg-gray-100 hover:bg-gray-300"
  titleClass=" "
  h3class=""
  pclass="whitespace-pre-line"
  textInfo={cab12Text}
/>
      <Custom
  images={Depto12}
  title="Departamento 1 y 2"
  containerClass=" border border-gray-200 shadow-sm py-16 bg-[var(--verde-musgo)]"
  imageClass="rounded-md shadow-sm transition-all duration-500 hover:scale-105 border-10 border-[var(--marron-madera)]"
  buttonClass="bg-gray-100 hover:bg-gray-300"
  titleClass=""
  h3class=""
  pclass="whitespace-pre-line"
  reverse={true} 
  textInfo={deptoText}
/>
      <Custom
  images={Depto34}
  title="Departamento 3 y 4"
  containerClass=" border border-gray-200 shadow-sm py-16 bg-[var(--verde-musgo)]"
  imageClass="rounded-md shadow-sm transition-all duration-500 hover:scale-105 border-10 border-[var(--marron-madera)]"
  buttonClass="bg-gray-100 hover:bg-gray-300"
  titleClass=""
  h3class=""
  pclass="whitespace-pre-line"
  textInfo={deptoText}
/>
    </>
      
    
  )
}

export default Cabs;