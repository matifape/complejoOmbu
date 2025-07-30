const Maps = () => {
  return (
    <div className=" mt-20 shadow-lg">
    <h2 className="text-center md:text-2xl ">¿Donde nos encontras?</h2>
    <div className="w-full h-[400px] my-8 rounded-xl overflow-hidden">
      <iframe
      className="w-full h-[400px] border-1 border-gray-200 rounded-xl"
        title="Ubicación"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.7131200058197!2d-56.72405252503996!3d-36.367727152787026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c1b364ee1ff57%3A0x78af5c9099ab9b55!2sComplejo%20el%20Omb%C3%BA!5e0!3m2!1ses!2sar!4v1753883493545!5m2!1ses!2sar"
        width="600"
        height="450"
       
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" 
      ></iframe>
    </div>
    </div>
  );
};

export default Maps;

