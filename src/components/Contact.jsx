import WhatsAppButton from "./WhatsAppButton";

  const Contact = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <h2 className="text-2xl font-bold mb-4">¡Contáctanos!</h2>
      <WhatsAppButton
        number="5492252485824"
        message="¡Hola! Quiero consultar sobre el complejo."
        text="Consultanos!"
        className="text-lg"
      />
    </div>
  );
};

export default Contact;