import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "263715443409";
  const message = encodeURIComponent(
    "Hey, found your number on your website. I'm here to talk about forex."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-pulse-gold group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
      <span className="absolute right-full mr-3 px-3 py-2 bg-card text-foreground text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
