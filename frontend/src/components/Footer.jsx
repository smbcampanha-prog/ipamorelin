import { Link } from "react-router-dom";
import { Atom, MessageCircle, ShieldAlert } from "lucide-react";
import { HUB_LINKS, SITE, waLink, DISCLAIMER } from "../data/site";

export const Footer = () => (
    <footer data-testid="main-footer" className="border-t border-white/5 bg-[#020207]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
                <div>
                    <div className="flex items-center gap-2.5">
                        <span className="grid h-8 w-8 place-items-center rounded-lg border border-sky-400/30 bg-sky-400/10">
                            <Atom className="h-4 w-4 text-sky-400" />
                        </span>
                        <span className="font-display text-sm font-bold text-white">
                            RETATRUTIDA<span className="text-neon">.HUB</span>
                        </span>
                    </div>
                    <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
                        Hub editorial científico e independente sobre peptídeos e incretinas, mantido por{" "}
                        <span className="text-gray-200">{SITE.brand}</span>. Conteúdo técnico baseado em
                        literatura revisada por pares.
                    </p>
                    <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-4">
                        <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
                        <p className="text-xs leading-relaxed text-gray-400">{DISCLAIMER}</p>
                    </div>
                </div>

                <nav aria-label="Mapa do hub">
                    <p className="font-mono-tech mb-5 text-[10px] uppercase tracking-[0.3em] text-sky-400/80">
                        Mapa do hub
                    </p>
                    <ul className="space-y-2.5">
                        {HUB_LINKS.map((l) => (
                            <li key={l.to}>
                                <Link
                                    to={l.to}
                                    data-testid={`footer-link-${l.to === "/" ? "home" : l.to.slice(1)}`}
                                    title={l.anchor}
                                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-sky-300"
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <p className="font-mono-tech mb-5 text-[10px] uppercase tracking-[0.3em] text-sky-400/80">
                        Contato
                    </p>
                    <a
                        data-testid="footer-whatsapp-link"
                        href={waLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-sm text-gray-300 transition-colors duration-300 hover:text-[#E5C158]"
                    >
                        <span className="grid h-9 w-9 place-items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 transition-shadow duration-300 group-hover:shadow-[0_0_18px_rgba(212,175,55,0.4)]">
                            <MessageCircle className="h-4 w-4 text-[#D4AF37]" />
                        </span>
                        {SITE.whatsappDisplay}
                    </a>
                    <p className="mt-4 text-xs leading-relaxed text-gray-500">
                        Consultoria educacional em peptídeos — avaliação gratuita. Atendimento em todo o Brasil.
                    </p>
                </div>
            </div>

            <div className="mt-14 flex flex-col gap-3 border-t border-white/5 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-gray-600">
                    © 2026 {SITE.brand} — Hub Retatrutida
                </p>
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-gray-600">
                    Conteúdo educacional · Não substitui consulta médica
                </p>
            </div>
        </div>
    </footer>
);
