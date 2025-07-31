const Hero = () => {
  return (
    <section id="mainContent" className="mt-20 md:mt-50">
      <div id="mainInfo" className="mt-10 flex flex-col">
        <h1 className="text-center mt-10 md:mt-20 md:mb-5 md:text-2xl md:font-light">Complejo El Ombú - Departamentos para alquilar en San Clemente</h1>
        <img className="block md:hidden" src="/images/cab.jpeg" alt="frente de cabaña" />
        <img
          className="hidden md:block md:w-full max-h-[800px] object-cover"
          src="/images/cabfront.jpeg"
          alt="complejo"
        />
      </div>
      <div className="flex flex-col shadow-xl p-5">
        <h3 className="text-center mt-10 md:mt-20 md:mb-5 md:text-2xl md:font-light">Nuestro Complejo</h3>
        <div className="md:flex md:items-center md:w-[90%] md:mx-auto">
          <img src="/images/pasto.jpeg" alt="predio" className="mt-5 md:h-150 md:w-full md:object-cover md:object-top rounded-md" />
          <p className="p-2 text-left md:font-light md:leading-loose">Los invitamos a conocer nuestro complejo de departamentos, donde van a encontrar la mejor atencion, comodidad, tranquilidad y todo lo que necesitas para tus vacaciones. <br />
          Contamos con proveeduria, una ubicacion central en San Clemente y acceso cercano a una de las avenidas principales.</p>
        </div>
        
        
      </div>
    </section>
  );
};

export default Hero;
