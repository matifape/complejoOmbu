import { FaWhatsapp } from "react-icons/fa6";


const WhatsAppButton = ({ number ="5492257525638", message = "¡Hola!, queria consultar sobre el complejo.", text , className = "" }) => {
  const formattedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${number}?text=${formattedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={` ${className}`}
      
    >
      <FaWhatsapp className="text-2xl"/>
      {text}
    </a>
  );
};

export default WhatsAppButton;
