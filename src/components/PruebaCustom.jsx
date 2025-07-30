import { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PruebaCustom = ({ images, textInfo = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalFotos = images.length;
  const currentFoto = images[(currentIndex + totalFotos) % totalFotos];

  const goToFoto = (index) => {
    const newIndex = (index + totalFotos) % totalFotos;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex flex-col items-center w-full sm:w-[48%] md:min-w-[90%] border rounded-lg shadow-md bg-white hover:shadow-lg transition overflow-hidden relative">
      {/* Imagen */}
      <div className="relative w-full aspect-[4/3]">
        <img
          src={currentFoto.image}
          alt="foto"
          onClick={() => setIsModalOpen(true)}
          className="w-full h-full object-cover cursor-pointer"
        />

        {/* Botón atrás */}
        <button
          onClick={() => goToFoto(currentIndex - 1)}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow z-10"
        >
          <IoIosArrowBack size={18} />
        </button>

        {/* Botón adelante */}
        <button
          onClick={() => goToFoto(currentIndex + 1)}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow z-10"
        >
          <IoIosArrowForward size={18} />
        </button>
      </div>

      {/* Texto + botón */}
      <div className="w-full p-4 text-sm text-gray-700 text-left">
        <h3 className="text-base font-semibold mb-1">Descripción</h3>
        <p className="mb-3">{textInfo}</p>

        <div className="flex justify-center">
          <WhatsAppButton
            text="Consulta disponibilidad"
            className="text-xs flex gap-2 items-center px-6 py-1 bg-[var(--verde-musgo)] text-white rounded hover:scale-105 transition"
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="max-w-4xl w-full px-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentFoto.image}
              alt="expanded"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:scale-110 transition"
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

export default PruebaCustom;
