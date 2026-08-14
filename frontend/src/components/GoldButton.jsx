import { MessageCircle } from "lucide-react";
import { waLink } from "../data/site";

export const GoldButton = ({
    label = "Agendar avaliação gratuita",
    testid = "cta-whatsapp-button",
    msg,
    className = "",
    pulse = false,
}) => (
    <a
        data-testid={testid}
        href={waLink(msg)}
        target="_blank"
        rel="noopener noreferrer"
        className={`gold-grad group inline-flex items-center gap-3 rounded-full px-7 py-4 font-mono-tech text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a1305] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] ${
            pulse ? "pulse-gold" : ""
        } ${className}`}
    >
        <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
        {label}
    </a>
);
