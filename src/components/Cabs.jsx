import Custom from "./Custom";
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
    <h3 className="mb-0 mt-10 text-center font-bold text-xl md:font-medium md:mt-20 text-[var(--marron-oscuro)]">Alquileres disponibles</h3>
      <Custom
        images={Cab1}
        title="Cabaña 1"
        textInfo={cab12Text}
        reverse={false}
      />

      <Custom
        images={Cab2}
        title="Cabaña 2"
        reverse={true}
        textInfo={cab12Text}
      />
      <Custom images={Cab3} title="Cabaña 3" textInfo={cab12Text} />
      <Custom
        images={Depto12}
        title="Departamento 1 y 2"
        reverse={true}
        textInfo={deptoText}
      />
      <Custom
        images={Depto34}
        title="Departamento 3 y 4"
        textInfo={deptoText}
      />
    </>
  );
};

export default Cabs;
