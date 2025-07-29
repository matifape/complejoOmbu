import { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";


const Custom = ({
  images,
  title,
  containerClass = "",
  imageClass = "",
  buttonClass = "",
  titleClass = "",
  h3class = "",
  pclass ="",
  reverse = false,
  textInfo
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalFotos = images.length;

  const goToFoto = (index) => {
    const newIndex = (index + totalFotos) % totalFotos;
    setCurrentIndex(newIndex);
  };

  const getFoto = (indexOffset) => {
    return images[(currentIndex + indexOffset + totalFotos) % totalFotos];
  };

  const currentFoto = getFoto(0);

  const layoutDirection = reverse ? "md:flex-row-reverse" : "md:flex-row";
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      id="instalaciones"
      className={`flex flex-col my-[8rem]   ${containerClass}`}
    >
      {title && (
        <div
          className={`flex items-center mx-auto my-2  text-2xl md:text-l text-white font-normal md:mb-20 uppercase ${titleClass}`}
        >
          <h3>
            {title}
          </h3>
          
        </div>
      )}
      <div className={`flex flex-col ${layoutDirection} items-center`}>
        <div className="relative flex   items-center w-full md:w-[50%] mx-auto"  >
          <button
            className={`absolute md:left-2.5 bg-gray-400 p-4 rounded-full shadow-md cursor-pointer  ${buttonClass}`}
            onClick={() => goToFoto(currentIndex - 1)}
          >
           <IoIosArrowBack />
          </button>

          <div className="max-w-[500px] mx-auto">
            <img
  src={currentFoto.image}
  className={`w-full rounded-lg md:ml-2 hover:cursor-pointer ${imageClass}`}
  alt="foto"
  onClick={() => setIsModalOpen(true)}
/>
          </div>

          <button
            className={`absolute right-0 p-4 bg-gray-400 rounded-full shadow-md cursor-pointer  ${buttonClass}`}
            onClick={() => goToFoto(currentIndex + 1)}
          >
            <IoIosArrowForward />
          </button>
        </div>
        <div className="info  flex flex-col ml-5 justify-center md:ml-32 md:w-[45%] md:pl-5 ">
          <h3 className={`mb-10 mt-2 text-xl md:text-l font-light uppercase text-white  ${h3class}`}>Descripcion </h3>
          <p className={`md:text-left md:text-l text-white ${pclass}`}>
           {textInfo}
          </p>
          <WhatsAppButton text="Consulta disponibilidad" className="mt-20 mx-auto transform hover:scale-110  transition-all duration-300  text-l font-bold inline-flex items-center gap-2 justify-center px-2 py-1 text-[var(--verde-musgo)] bg-white rounded-lg md:px-2 md:py-3 md:text-l  md:ml-0  w-fit"/>
        </div>
      </div>
      {isModalOpen && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
    onClick={() => setIsModalOpen(false)}
  >
    <div className="max-w-4xl w-full px-4" onClick={(e) => e.stopPropagation()}>
      <img
        src={currentFoto.image}
        alt="expanded"
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <button
        className="absolute top-6 right-6 text-white text-4xl font-bold hover:scale-110 transition"
        onClick={() => setIsModalOpen(false)}
      >
        &times;
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default Custom;
