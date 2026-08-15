import { ChevronRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { Reveal, MaskedLine, FadeIn } from "../components/Reveal";
import { GoldButton } from "../components/GoldButton";
import { FAQ_PAGE, FAQS } from "../data/site";

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

export default function Faq() {
    return (
        <>
            <Seo
                title={FAQ_PAGE.seoTitle}
                description={FAQ_PAGE.seoDesc}
                path="/faq"
                jsonLd={faqJsonLd}
            />

            <section data-testid="faq-section" className="relative overflow-hidden pt-36">
                <div className="grid-bg absolute inset-0 opacity-40" />
                <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
                <div className="relative mx-auto max-w-4xl px-5 pb-24 sm:px-8">
                    <FadeIn>
                        <p className="font-mono-tech text-[10px] uppercase tracking-[0.35em] text-sky-400/80">
                            {FAQ_PAGE.kicker}
                        </p>
                    </FadeIn>
                    <h1 className="font-display mt-5 text-3xl font-black leading-[1.08] text-white sm:text-5xl">
                        <MaskedLine delay={0.15}>{FAQ_PAGE.h1a}</MaskedLine>
                        <MaskedLine delay={0.3}>
                            {FAQ_PAGE.h1b} <span className="text-neon">{FAQ_PAGE.h1neon}</span>
                        </MaskedLine>
                    </h1>
                    <FadeIn delay={0.5}>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400">{FAQ_PAGE.sub}</p>
                    </FadeIn>

                    <div className="mt-12 space-y-4">
                        {FAQS.map((f, i) => (
                            <Reveal key={i} delay={i * 0.04}>
                                <details
                                    data-testid={`faq-item-${i}`}
                                    className="glass-panel led-edge group rounded-2xl px-6 py-5 open:border-sky-400/25"
                                >
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-white transition-colors duration-300 hover:text-sky-300 sm:text-base">
                                        {f.q}
                                        <ChevronRight className="h-4 w-4 shrink-0 text-sky-400 transition-transform duration-300 group-open:rotate-90" />
                                    </summary>
                                    <p className="mt-4 text-sm leading-relaxed text-gray-400">{f.a}</p>
                                </details>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal>
                        <div className="mt-14 rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#D4AF37]/10 via-[#0a0a10] to-[#0a0a10] p-8 text-center sm:p-12">
                            <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
                                Sua pergunta não está aqui?
                            </h2>
                            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-400">
                                A avaliação educacional gratuita da nossa consultoria responde diretamente no
                                WhatsApp.
                            </p>
                            <GoldButton label="Perguntar no WhatsApp" testid="faq-cta-whatsapp" className="mt-6" pulse />
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
