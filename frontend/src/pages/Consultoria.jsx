import { CheckCircle2, XCircle, MessageCircle, ClipboardList, Compass, Stethoscope } from "lucide-react";
import { Seo } from "../components/Seo";
import { Reveal, MaskedLine, FadeIn } from "../components/Reveal";
import { GoldButton } from "../components/GoldButton";
import { SITE } from "../data/site";

const STEPS = [
    { icon: MessageCircle, n: "01", t: "Chame no WhatsApp", d: `Mensagem direta para ${SITE.whatsappDisplay}. Sem formulários, sem fila — conversa humana do primeiro contato.` },
    { icon: ClipboardList, n: "02", t: "Avaliação gratuita", d: "Mapeamos seu perfil, seus objetivos e suas dúvidas sobre peptídeos e incretinas, com base no que a literatura publicou." },
    { icon: Compass, n: "03", t: "Orientação e direcionamento", d: "Você recebe um panorama técnico do cenário — o que é aprovado, o que é experimental — e o direcionamento para acompanhamento médico quando indicado." },
];

const INCLUDED = [
    "Avaliação educacional gratuita pelo WhatsApp",
    "Explicação técnica sobre peptídeos e incretinas",
    "Panorama regulatório atualizado (ANVISA e agências internacionais)",
    "Leitura crítica de estudos e notícias do tema",
    "Direcionamento para acompanhamento médico",
];

const NOT_INCLUDED = [
    "Venda ou intermediação de medicamentos sem registro",
    "Prescrição, diagnóstico ou indicação de dose",
    "Substituição de consulta com médico ou nutricionista",
    "Promessas de resultado ou cronogramas de aprovação",
];

export default function Consultoria() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Consultoria educacional em peptídeos",
        provider: { "@type": "Organization", name: SITE.brand, url: SITE.domain },
        areaServed: "BR",
        offers: { "@type": "Offer", price: "0", priceCurrency: "BRL", description: "Avaliação educacional gratuita via WhatsApp" },
    };

    return (
        <>
            <Seo
                title="Consultoria em Peptídeos — Avaliação Gratuita | Hub Retatrutida"
                description="Consultoria educacional em peptídeos e incretinas com avaliação gratuita via WhatsApp. Orientação baseada em ciência, cenário regulatório e direcionamento médico. Sem venda de medicamentos sem registro."
                path="/consultoria-peptideos"
                type="website"
                jsonLd={jsonLd}
            />

            <section data-testid="consultoria-hero" className="relative overflow-hidden pt-36">
                <div className="grid-bg absolute inset-0 opacity-50" />
                <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
                <div className="relative mx-auto max-w-5xl px-5 pb-20 text-center sm:px-8">
                    <FadeIn>
                        <p className="font-mono-tech mb-5 text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
                            {SITE.brand} · Serviço educacional
                        </p>
                    </FadeIn>
                    <h1 className="font-display text-3xl font-black leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                        <MaskedLine delay={0.15}>CONSULTORIA EM</MaskedLine>
                        <MaskedLine delay={0.3}>
                            <span className="text-neon">PEPTÍDEOS</span>
                        </MaskedLine>
                    </h1>
                    <FadeIn delay={0.6}>
                        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
                            Orientação educacional sobre peptídeos, incretinas e o cenário regulatório brasileiro —
                            com avaliação gratuita e um compromisso inegociável:{" "}
                            <span className="text-white">ciência em primeiro lugar, sempre.</span>
                        </p>
                        <div className="mt-9 flex justify-center">
                            <GoldButton label="Iniciar avaliação gratuita" testid="consultoria-hero-cta" pulse />
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section data-testid="consultoria-steps" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
                <Reveal>
                    <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                        Como funciona <span className="text-neon">em 3 passos</span>
                    </h2>
                </Reveal>
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {STEPS.map((s, i) => (
                        <Reveal key={s.n} delay={i * 0.1}>
                            <div className="glass-panel led-edge h-full rounded-2xl p-7">
                                <div className="flex items-center justify-between">
                                    <span className="grid h-11 w-11 place-items-center rounded-lg border border-sky-400/25 bg-sky-400/5">
                                        <s.icon className="h-5 w-5 text-sky-400" />
                                    </span>
                                    <span className="font-mono-tech outline-text text-3xl font-bold">{s.n}</span>
                                </div>
                                <h3 className="font-display mt-5 text-base font-bold text-white">{s.t}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-gray-400">{s.d}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section data-testid="consultoria-scope" className="border-t border-white/5 bg-[#04040a] py-20">
                <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-2">
                    <Reveal>
                        <div className="h-full rounded-2xl border border-sky-400/15 bg-sky-400/[0.03] p-8">
                            <h2 className="font-display flex items-center gap-3 text-xl font-bold text-white">
                                <CheckCircle2 className="h-5 w-5 text-sky-400" /> O que está incluído
                            </h2>
                            <ul className="mt-6 space-y-3.5">
                                {INCLUDED.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                    <Reveal delay={0.12}>
                        <div className="h-full rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] p-8">
                            <h2 className="font-display flex items-center gap-3 text-xl font-bold text-white">
                                <XCircle className="h-5 w-5 text-[#D4AF37]" /> O que não fazemos
                            </h2>
                            <ul className="mt-6 space-y-3.5">
                                {NOT_INCLUDED.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-xs leading-relaxed text-gray-400">
                                <Stethoscope className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                                A consultoria é educacional. Decisões de tratamento pertencem a você e ao seu
                                médico.
                            </p>
                        </div>
                    </Reveal>
                </div>

                <Reveal>
                    <div className="mx-auto mt-16 max-w-3xl text-center">
                        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                            Pronto para conversar <span className="text-neon">com quem estuda o assunto?</span>
                        </h2>
                        <div className="mt-8 flex justify-center">
                            <GoldButton label="Falar com a consultoria agora" testid="consultoria-bottom-cta" pulse />
                        </div>
                        <p className="font-mono-tech mt-4 text-[10px] uppercase tracking-[0.25em] text-gray-500">
                            {SITE.whatsappDisplay} · avaliação gratuita
                        </p>
                    </div>
                </Reveal>
            </section>
        </>
    );
}
