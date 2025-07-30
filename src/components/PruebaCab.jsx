import PruebaCustom from "./PruebaCustom";
import {
  
  Cab1,
  Cab2,
  Cab3,
  Depto12,
  Depto34,
  cab12Text,
  deptoText,
} from "/constants/datas.js";



const Cabs = () => {
  return (
    <>
    <div className="flex flex-col mt-20">
        <h3 className="text-center mb-5 font-bold">Cabañas disponibles</h3>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2">
            <PruebaCustom
        images={Cab1}
        title="Cabaña 1"
        textInfo={cab12Text}
        reverse={false}
      />

      <PruebaCustom
        images={Cab2}
        title="Cabaña 2"
        reverse={true}
        textInfo={cab12Text}
      />
      <PruebaCustom images={Cab3} title="Cabaña 3" textInfo={cab12Text} />
        </div>
      



        <h3 className="text-center mb-5 mt-10">Departamentos Disponibles</h3>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 px-2 justify-center max-w-5xl mx-auto">
             <PruebaCustom
        images={Depto12}
        title="Departamento 1 y 2"
        reverse={true}
        textInfo={deptoText}
      />
      <PruebaCustom
        images={Depto34}
        title="Departamento 3 y 4"
        textInfo={deptoText}
      />
        </div>

     
      </div>
    </>
  );
};

export default Cabs;
