import { Images } from "../../constants/datas";
import { useState } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalFotos = Images.length;
  const goToFoto = (index) => {
    const newIndex = (index + totalFotos) % totalFotos;
    setCurrentIndex(newIndex);
  };
  const getFoto = (indexOffset) => {
    return Images[(currentIndex + indexOffset + totalFotos) % totalFotos];
  };

  const currentFoto = getFoto(0);

  return (
    <div className="flex flex-col my-[8rem]">
      <div className="flex items-center mx-auto my-2">Conoce el complejo</div>
      <div className="relative flex justify-center items-center h-screen">
        {/* Flecha izquierda */}
        <button
          className="absolute left-5 p-4 rounded-full shadow-md cursor-pointer bg-[var(--bg-color)] "
          onClick={() => goToFoto(currentIndex - 1)}
        >
          <img
            src="/images/right-arrow.png"
            alt="left-arrow"
            className="w-6 h-6"
          />
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
          className="absolute right-5  p-4 rounded-full shadow-md cursor-pointer bg-[var(--bg-color)]"
          onClick={() => goToFoto(currentIndex + 1)}
        >
          <img
            src="/images/left-arrow.png"
            alt="right-arrow"
            className="w-6 h-6  rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default Slider;
