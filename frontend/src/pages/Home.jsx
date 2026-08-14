import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Microscope, ShieldCheck, FlaskConical, BookOpen, Activity, Ban } from "lucide-react";
import { Seo } from "../components/Seo";
import { Reveal, MaskedLine, FadeIn } from "../components/Reveal";
import { Marquee } from "../components/Marquee";
import { GoldButton } from "../components/GoldButton";
import { MechanismDiagram } from "../components/MechanismDiagram";
import { ARTICLES } from "../data/articles";
import { SITE } from "../data/site";

const STATS = [
    { value: "−24,2%", label: "peso médio na fase 2 (48 sem, 12 mg)" },
    { value: "3", label: "receptores ativados: GLP-1 · GIP · GCG" },
    { value: "−28,7%", label: "no TRIUMPH-4, fase 3 (68 semanas)" },
    { value: "0", label: "registros na ANVISA até hoje" },
];

const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            name: SITE.name,
            alternateName: "Retatrutida Hub",
            url: `${SITE.domain}/`,
            inLanguage: "pt-BR",
            publisher: { "@id": `${SITE.domain}/#org` },
        },
        {
            "@type": "Organization",
            "@id": `${SITE.domain}/#org`,
            name: SITE.brand,
            url: `${SITE.domain}/`,
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-21-97223-2170",
                contactType: "customer service",
                availableLanguage: "Portuguese",
            },
        },
        {
            "@type": "MedicalWebPage",
            "@id": `${SITE.domain}/#webpage`,
            url: `${SITE.domain}/`,
            name: "Retatrutida — Hub Científico e Consultoria em Peptídeos",
            inLanguage: "pt-BR",
            about: { "@type": "Drug", name: "Retatrutida", alternateName: "LY3437943" },
            isPartOf: { "@id": `${SITE.domain}/` },
        },
    ],
};

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 700], [0, 160]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0.25]);

    return (
        <section data-testid="hero-section" className="relative flex min-h-[100svh] items-end overflow-hidden">
            <motion.div style={{ y, opacity }} className="absolute inset-0">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/hero-neon.png`}
                    alt="Ilustração científica em neon azul: frasco e caneta injetável de peptídeo com escudo e molécula"
                    className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-[#030308]/72 to-[#030308]/35" />
                <div className="grid-bg absolute inset-0 opacity-60" />
            </motion.div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 sm:px-8">
                <FadeIn delay={0.15}>
                    <p className="font-mono-tech mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-sky-400 sm:text-xs">
                        <span className="inline-block h-px w-10 bg-sky-400/70" />
                        Hub científico · Peptídeos & incretinas
                    </p>
                </FadeIn>

                <h1 className="font-display max-w-5xl text-4xl font-black leading-[1.02] text-white sm:text-5xl lg:text-6xl">
                    <MaskedLine delay={0.25}>RETATRUTIDA:</MaskedLine>
                    <MaskedLine delay={0.4}>
                        <span className="text-neon">CIÊNCIA,</span>
                    </MaskedLine>
                    <MaskedLine delay={0.55}>NÃO HYPE.</MaskedLine>
                </h1>

                <FadeIn delay={0.85}>
                    <p className="mt-7 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
                        O guia técnico independente sobre o agonista triplo{" "}
                        <span className="font-mono-tech text-sky-300">GLP-1 · GIP · Glucagona</span> — mecanismo,
                        estudos TRIUMPH, segurança e o status regulatório real no Brasil.
                    </p>
                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <GoldButton label="Avaliação gratuita no WhatsApp" testid="hero-cta-whatsapp" pulse />
                        <a
                            data-testid="hero-cta-chapters"
                            href="#capitulos"
                            className="group inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/5 px-7 py-4 font-mono-tech text-[11px] font-bold uppercase tracking-[0.18em] text-sky-300 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-sky-400/10 hover:shadow-[0_0_25px_rgba(0,163,255,0.25)]"
                        >
                            Explorar o guia
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                </FadeIn>

                <FadeIn delay={1.05} className="mt-16">
                    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 lg:grid-cols-4">
                        {STATS.map((s) => (
                            <div key={s.label} className="bg-[#05050c]/90 p-5 backdrop-blur-sm sm:p-6">
                                <dt className="font-mono-tech order-2 mt-2 block text-[10px] uppercase leading-relaxed tracking-[0.15em] text-gray-500">
                                    {s.label}
                                </dt>
                                <dd className="font-display text-2xl font-bold text-white sm:text-3xl">
                                    <span className="text-neon">{s.value}</span>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </FadeIn>
            </div>
        </section>
    );
};

const Chapters = () => (
    <section id="capitulos" data-testid="chapters-section" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
            <p className="font-mono-tech mb-4 text-[10px] uppercase tracking-[0.35em] text-sky-400/80">
                O guia · 7 capítulos
            </p>
            <h2 className="font-display max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Um manifesto contra a desinformação, <span className="text-neon">capítulo por capítulo</span>
            </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.06}>
                    <Link
                        to={`/${a.slug}`}
                        data-testid={`chapter-card-${a.slug}`}
                        title={a.keyword}
                        className="glass-panel led-edge group flex h-full flex-col rounded-2xl p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,163,255,0.12)]"
                    >
                        <span className="font-mono-tech text-xs tracking-[0.25em] text-sky-400/70">
                            CAP. {a.chapter}
                        </span>
                        <h3 className="font-display mt-4 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-sky-300">
                            {a.title.split(":")[0]}
                        </h3>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">{a.lede}</p>
                        <span className="font-mono-tech mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-sky-400">
                            Ler capítulo
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                    </Link>
                </Reveal>
            ))}

            <Reveal delay={0.42}>
                <Link
                    to="/consultoria-peptideos"
                    data-testid="chapter-card-consultoria"
                    className="group flex h-full flex-col rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/5 p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(212,175,55,0.15)]"
                >
                    <span className="font-mono-tech text-xs tracking-[0.25em] text-[#D4AF37]/80">CAP. 08</span>
                    <h3 className="font-display mt-4 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#E5C158]">
                        Consultoria em peptídeos
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">
                        Orientação educacional baseada em literatura científica, com avaliação gratuita pelo
                        WhatsApp. Sem venda de medicamentos sem registro.
                    </p>
                    <span className="font-mono-tech mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
                        Conhecer o serviço
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                </Link>
            </Reveal>
        </div>
    </section>
);

const Mechanism = () => (
    <section data-testid="mechanism-section" className="relative border-t border-white/5 bg-[#04040a] py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
                <Reveal>
                    <p className="font-mono-tech mb-4 text-[10px] uppercase tracking-[0.35em] text-sky-400/80">
                        Infográfico · Mecanismo
                    </p>
                    <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                        Três receptores. <br />
                        <span className="text-neon">Uma molécula.</span>
                    </h2>
                    <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-400">
                        O GLP-1 freia o apetite. O GIP modula o tecido adiposo. A glucagona acelera o gasto
                        energético. A retatrutida é a primeira molécula em fase avançada a reunir os três eixos —
                        a hipótese por trás das maiores perdas de peso já vistas em ensaios com incretinas.
                    </p>
                </Reveal>
                <Reveal delay={0.15}>
                    <ul className="mt-8 space-y-4">
                        {[
                            { icon: Activity, t: "GLP-1", d: "Saciedade central, esvaziamento gástrico e insulina glicose-dependente" },
                            { icon: FlaskConical, t: "GIP", d: "Metabolismo do tecido adiposo e sensibilidade à insulina" },
                            { icon: Microscope, t: "Glucagona", d: "Gasto energético e oxidação de gordura hepática" },
                        ].map((it) => (
                            <li key={it.t} className="flex items-start gap-4">
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-sky-400/25 bg-sky-400/5">
                                    <it.icon className="h-4 w-4 text-sky-400" />
                                </span>
                                <div>
                                    <p className="font-mono-tech text-xs font-bold tracking-[0.15em] text-white">{it.t}</p>
                                    <p className="mt-1 text-sm text-gray-400">{it.d}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Link
                        to="/como-funciona"
                        data-testid="mechanism-read-more"
                        className="group mt-8 inline-flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-[0.2em] text-sky-300 transition-colors duration-300 hover:text-sky-200"
                    >
                        Mecanismo completo no Cap. 02
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </Reveal>
            </div>
            <MechanismDiagram />
        </div>
    </section>
);

const HonestMarket = () => (
    <section data-testid="market-truth-section" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="glass-panel led-edge relative overflow-hidden rounded-3xl p-8 sm:p-14">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
                <div>
                    <Reveal>
                        <p className="font-mono-tech mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
                            <Ban className="h-3.5 w-3.5" /> Compromisso editorial
                        </p>
                        <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                            Procurando preço ou onde comprar? <span className="text-neon">Leia isto primeiro.</span>
                        </h2>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400">
                            Não existe preço oficial nem canal legal de venda da retatrutida — no Brasil e em
                            nenhum país. As ofertas que circulam online são irregulares e já foram alvo de alertas
                            da ANVISA. Preferimos perder o clique a perder a honestidade.
                        </p>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/retatrutida-preco"
                                data-testid="market-link-preco"
                                title="retatrutida preço"
                                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-mono-tech text-[10px] font-bold uppercase tracking-[0.18em] text-gray-200 transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                            >
                                Por que não há preço oficial
                                <ArrowUpRight className="h-3.5 w-3.5 text-sky-400" />
                            </Link>
                            <Link
                                to="/onde-comprar-retatrutida"
                                data-testid="market-link-onde-comprar"
                                title="retatrutida onde comprar"
                                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-mono-tech text-[10px] font-bold uppercase tracking-[0.18em] text-gray-200 transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                            >
                                O status real de disponibilidade
                                <ArrowUpRight className="h-3.5 w-3.5 text-sky-400" />
                            </Link>
                        </div>
                    </Reveal>
                </div>
                <Reveal delay={0.1} className="float-slow">
                    <div className="relative overflow-hidden rounded-2xl border border-white/10">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/hero-neon.png`}
                            alt="Arte neon azul representando proteção e pesquisa científica de peptídeos"
                            className="h-72 w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030308]/85 to-transparent" />
                        <p className="font-mono-tech absolute bottom-4 left-4 right-4 text-[9px] uppercase leading-relaxed tracking-[0.2em] text-sky-300/80">
                            FIG. 02 — Pesquisa sob escudo: ciência precisa de regulação
                        </p>
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
);

const Consulting = () => (
    <section data-testid="consulting-section" className="relative overflow-hidden border-t border-white/5 bg-[#04040a] py-24 sm:py-32">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
            <Reveal>
                <p className="font-mono-tech mb-4 text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
                    Consultoria em peptídeos · {SITE.brand}
                </p>
                <h2 className="font-display mx-auto max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    Dúvidas sobre peptídeos? <br />
                    <span className="text-neon">Avaliação gratuita, baseada em ciência.</span>
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400">
                    Orientação educacional sobre peptídeos e incretinas: seu perfil, seus objetivos, o cenário
                    regulatório e os caminhos legítimos — direto no WhatsApp, sem compromisso e sem venda de
                    medicamentos sem registro.
                </p>
            </Reveal>
            <Reveal delay={0.2}>
                <div className="mt-10 flex flex-col items-center gap-4">
                    <GoldButton label="Começar minha avaliação gratuita" testid="consulting-cta-whatsapp" pulse />
                    <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-gray-500">
                        {SITE.whatsappDisplay} · resposta humana, conteúdo técnico
                    </p>
                </div>
            </Reveal>
            <Reveal delay={0.3}>
                <div className="mx-auto mt-14 grid max-w-4xl gap-5 text-left sm:grid-cols-3">
                    {[
                        { icon: BookOpen, t: "Base em literatura", d: "Orientação ancorada em estudos revisados por pares, não em promessa de marketing." },
                        { icon: ShieldCheck, t: "Ética regulatória", d: "Transparência total sobre o que é aprovado, o que é experimental e o que é irregular." },
                        { icon: Activity, t: "Direcionamento médico", d: "Quando o tema é tratamento, o próximo passo é sempre um profissional de saúde." },
                    ].map((c) => (
                        <div key={c.t} className="glass-panel led-edge rounded-2xl p-6">
                            <c.icon className="h-5 w-5 text-sky-400" />
                            <p className="font-display mt-4 text-sm font-bold text-white">{c.t}</p>
                            <p className="mt-2 text-sm leading-relaxed text-gray-400">{c.d}</p>
                        </div>
                    ))}
                </div>
            </Reveal>
        </div>
    </section>
);

export default function Home() {
    return (
        <>
            <Seo
                title="Retatrutida — Hub Científico e Consultoria em Peptídeos"
                description="Guia técnico independente sobre retatrutida: mecanismo triplo agonista GLP-1, GIP e glucagona, estudos TRIUMPH, segurança e status na ANVISA. Avaliação educacional gratuita."
                path="/"
                type="website"
                jsonLd={homeJsonLd}
            />
            <Hero />
            <Marquee />
            <Chapters />
            <Mechanism />
            <HonestMarket />
            <Consulting />
        </>
    );
}
