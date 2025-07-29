import { serviciosImg,ServiciosText } from "../../constants/datas";
import { useState } from "react";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

const Servicios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalFotos = serviciosImg.length;
  const goToFoto = (index) => {
    const newIndex = (index + totalFotos) % totalFotos;
    setCurrentIndex(newIndex);
  };
  const getFoto = (indexOffset) => {
    return serviciosImg[(currentIndex + indexOffset + totalFotos) % totalFotos];
  };

  const currentFoto = getFoto(0);
  return (
    <>
      <div className="flex flex-col my-[8rem]  bg-[var(--crema)] backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 " id="Servicios">
        
        <div className="flex flex-col md:flex-row md:max-w-[90%] md:mx-auto md:itme-center md:justify-arround">
          <div className="relative flex justify-center items-center h-screen ">
            {/* Flecha izquierda */}
            <button
              className="absolute left-0 p-4 rounded-full shadow-md cursor-pointer bg-white "
              onClick={() => goToFoto(currentIndex - 1)}
            >
              <IoIosArrowBack/>
            </button>

            {/* Imagen central */}
            <div className="max-w-[500px] mx-auto">
              <img
                src={currentFoto.image}
                className="w-full rounded-lg"
                alt="foto"
              />
            </div>

            {/* Flecha derecha */}
            <button
              className="absolute right-0  p-4 rounded-full shadow-md cursor-pointer bg-white"
              onClick={() => goToFoto(currentIndex + 1)}
            >
             <IoIosArrowForward />
            </button>
          </div>
          <div className="md:max-w-[50%] md:flex-col md:mx-auto text-left md:justify-center md:items-center text-[var(--marron-madera)] ">
            <h3 className="text-center md:mt-10  md:text-2xl">La Cabañita</h3>
            <p className="px-2 leading-loose text-xl whitespace-pre-line md:m-20">
              {ServiciosText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicios;
