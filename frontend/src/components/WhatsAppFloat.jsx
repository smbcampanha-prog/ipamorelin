import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink } from "../data/site";

export const WhatsAppFloat = () => (
    <motion.a
        data-testid="whatsapp-floating-button"
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar avaliação gratuita pelo WhatsApp"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="gold-grad pulse-gold fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full text-[#1a1305] transition-transform duration-300 hover:scale-110"
    >
        <MessageCircle className="h-6 w-6" />
    </motion.a>
);
