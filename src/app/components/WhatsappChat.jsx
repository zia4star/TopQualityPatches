import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChat = () => {
  const phoneNumber = '+13502221549'; // Replace with your WhatsApp number (include country code, e.g., +234)
  const message = 'Hello! How can I assist you today?'; // Optional pre-filled message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappLink}
      className='whatsappFloat'
    //   target="_blank"
    //   rel="noopener noreferrer"
    >
      {/* <i className="fa fa-whatsapp" aria-hidden="true"></i> */}
      <FaWhatsapp/>
    </Link>
  );
};

export default WhatsAppChat;