import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Clock3, ShieldAlert, ChevronRight, BookOpen } from "lucide-react";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { GoldButton } from "../components/GoldButton";
import { MechanismDiagram } from "../components/MechanismDiagram";
import { ARTICLES, getArticle } from "../data/articles";
import { SITE, DRUG, DISCLAIMER } from "../data/site";
import NotFound from "./NotFound";

const articleJsonLd = (a) => ({
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "MedicalWebPage",
            "@id": `${SITE.domain}/${a.slug}#webpage`,
            url: `${SITE.domain}/${a.slug}`,
            name: a.title,
            description: a.description,
            inLanguage: "pt-BR",
            datePublished: "2026-07-14",
            dateModified: "2026-07-14",
            about: { "@type": "Drug", name: DRUG.name, alternateName: DRUG.alt },
            isPartOf: { "@id": `${SITE.domain}/` },
            publisher: {
                "@type": "Organization",
                name: SITE.brand,
                url: `${SITE.domain}/`,
            },
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: `${DRUG.name} — Hub`, item: `${SITE.domain}/` },
                { "@type": "ListItem", position: 2, name: a.title, item: `${SITE.domain}/${a.slug}` },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: a.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
        },
    ],
});

export default function ArticlePage() {
    const { slug } = useParams();
    const article = getArticle(slug);
    if (!article) return <NotFound />;

    const related = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

    return (
        <>
            <Seo
                title={`${article.title} | ${SITE.name}`}
                description={article.description}
                path={`/${article.slug}`}
                jsonLd={articleJsonLd(article)}
            />

            <article data-testid={`article-${article.slug}`} className="relative pt-32">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] overflow-hidden">
                    <img src={`${process.env.PUBLIC_URL}/assets/hero-neon.png`} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-25" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#030308]/60 via-[#030308]/85 to-[#030308]" />
                </div>

                <header className="relative mx-auto max-w-4xl px-5 sm:px-8">
                    <nav aria-label="Breadcrumb" className="font-mono-tech flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-500">
                        <Link to="/" data-testid="breadcrumb-home" className="transition-colors duration-300 hover:text-sky-300">
                            {SITE.name}
                        </Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-sky-400/80">Cap. {article.chapter}</span>
                    </nav>

                    <Reveal>
                        <p className="font-mono-tech mt-8 text-[10px] uppercase tracking-[0.35em] text-sky-400/80">
                            Capítulo {article.chapter} · {article.kicker}
                        </p>
                        <h1 className="font-display mt-4 text-3xl font-black leading-[1.08] text-white sm:text-4xl lg:text-5xl">
                            {article.title}
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
                            {article.lede}
                        </p>
                        <p className="font-mono-tech mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gray-500">
                            <Clock3 className="h-3.5 w-3.5" /> Leitura: {article.readTime} · Atualizado em jul/2026
                        </p>
                    </Reveal>
                </header>

                <div className="relative mx-auto max-w-4xl px-5 pb-24 sm:px-8">
                    {article.warning && (
                        <Reveal>
                            <div data-testid="regulatory-warning-box" className="mt-10 flex items-start gap-4 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-6">
                                <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
                                <p className="text-sm leading-relaxed text-gray-300">
                                    <span className="font-bold text-[#E5C158]">Aviso regulatório:</span>{" "}
                                    {DISCLAIMER} Esta página é informativa e não constitui oferta, indicação de
                                    fornecedor ou recomendação de uso.
                                </p>
                            </div>
                        </Reveal>
                    )}

                    <Reveal>
                        <div className="glass-panel led-edge mt-10 flex items-center gap-6 rounded-2xl p-7">
                            <span className="font-display text-neon shrink-0 text-3xl font-black sm:text-4xl">
                                {article.stat.value}
                            </span>
                            <p className="border-l border-white/10 pl-6 text-sm leading-relaxed text-gray-400">
                                {article.stat.label}
                            </p>
                        </div>
                    </Reveal>

                    {article.diagram && (
                        <div className="mt-12">
                            <MechanismDiagram />
                        </div>
                    )}

                    {article.table && (
                        <Reveal className="mt-12 overflow-x-auto">
                            <table data-testid="comparison-table" className="w-full min-w-[640px] border-collapse overflow-hidden rounded-2xl text-left text-sm">
                                <thead>
                                    <tr className="bg-sky-400/10">
                                        {article.table.head.map((h) => (
                                            <th key={h} className="font-mono-tech border border-white/10 px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-sky-300">
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {article.table.rows.map((row, i) => (
                                        <tr key={i} className="bg-white/[0.02] transition-colors duration-300 hover:bg-white/[0.05]">
                                            {row.map((cell, j) => (
                                                <td key={j} className={`border border-white/10 px-5 py-4 leading-relaxed ${j === 0 ? "font-bold text-white" : "text-gray-400"}`}>
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Reveal>
                    )}

                    <div className="mt-12 space-y-12">
                        {article.sections.map((s, i) => (
                            <Reveal key={i}>
                                <section>
                                    <h2 className="font-display flex items-baseline gap-4 text-xl font-bold text-white sm:text-2xl">
                                        <span className="font-mono-tech text-neon text-sm font-medium">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        {s.h}
                                    </h2>
                                    {s.p.map((para, j) => (
                                        <p key={j} className="mt-4 text-base leading-relaxed text-gray-400">
                                            {para}
                                        </p>
                                    ))}
                                </section>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal>
                        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                            <p className="font-mono-tech mb-5 text-[10px] uppercase tracking-[0.3em] text-sky-400/80">
                                Perguntas rápidas
                            </p>
                            {article.faqs.map((f, i) => (
                                <details key={i} className="group border-b border-white/5 py-4 last:border-0" data-testid={`article-faq-${i}`}>
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-white transition-colors duration-300 hover:text-sky-300">
                                        {f.q}
                                        <ChevronRight className="h-4 w-4 shrink-0 text-sky-400 transition-transform duration-300 group-open:rotate-90" />
                                    </summary>
                                    <p className="mt-3 text-sm leading-relaxed text-gray-400">{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </Reveal>

                    {article.refs && (
                        <Reveal>
                            <div data-testid="references-section" className="mt-10 rounded-2xl border border-sky-400/15 bg-sky-400/[0.03] p-7">
                                <p className="font-mono-tech mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-sky-400/80">
                                    <BookOpen className="h-3.5 w-3.5" /> Referências e fontes externas
                                </p>
                                <ul className="space-y-2.5">
                                    {article.refs.map((r) => (
                                        <li key={r.url}>
                                            <a
                                                href={r.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                data-testid={`ref-link-${r.url.replace(/[^a-z0-9]/gi, "-").slice(0, 40)}`}
                                                className="group inline-flex items-center gap-2 text-sm text-gray-300 transition-colors duration-300 hover:text-sky-300"
                                            >
                                                {r.label}
                                                <ArrowUpRight className="h-3.5 w-3.5 text-sky-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    )}

                    <Reveal>
                        <div className="relative mt-14 overflow-hidden rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#D4AF37]/10 via-[#0a0a10] to-[#0a0a10] p-8 sm:p-12">
                            <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                                Consultoria em peptídeos
                            </p>
                            <h2 className="font-display mt-3 text-2xl font-bold text-white sm:text-3xl">
                                Quer entender seu cenário com base em ciência?
                            </h2>
                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-400">
                                Avaliação educacional gratuita pelo WhatsApp com a equipe da {SITE.brand}. Sem
                                venda de substâncias sem registro — apenas orientação técnica e direcionamento
                                legítimo.
                            </p>
                            <GoldButton label="Agendar avaliação gratuita" testid="article-cta-whatsapp" className="mt-7" pulse />
                        </div>
                    </Reveal>

                    <Reveal>
                        <nav aria-label="Capítulos relacionados" className="mt-14">
                            <p className="font-mono-tech mb-5 text-[10px] uppercase tracking-[0.3em] text-sky-400/80">
                                Continue no hub
                            </p>
                            <div className="grid gap-4 sm:grid-cols-3">
                                {related.map((r) => (
                                    <Link
                                        key={r.slug}
                                        to={`/${r.slug}`}
                                        data-testid={`related-link-${r.slug}`}
                                        title={r.keyword}
                                        className="glass-panel led-edge group rounded-xl p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,163,255,0.12)]"
                                    >
                                        <span className="font-mono-tech text-[10px] tracking-[0.25em] text-sky-400/70">
                                            CAP. {r.chapter}
                                        </span>
                                        <p className="mt-2 text-sm font-bold leading-snug text-white transition-colors duration-300 group-hover:text-sky-300">
                                            {r.title.split(":")[0]}
                                        </p>
                                        <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-sky-400">
                                            Ler <ArrowUpRight className="h-3 w-3" />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                            <Link
                                to="/"
                                data-testid="back-to-hub-link"
                                title={DRUG.name.toLowerCase()}
                                className="group mt-8 inline-flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-[0.2em] text-gray-400 transition-colors duration-300 hover:text-sky-300"
                            >
                                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                Voltar ao hub central sobre {DRUG.name.toLowerCase()}
                            </Link>
                        </nav>
                    </Reveal>

                    <p className="font-mono-tech mt-12 border-t border-white/5 pt-6 text-[10px] uppercase leading-relaxed tracking-[0.18em] text-gray-600">
                        {DISCLAIMER}
                    </p>
                </div>
            </article>
        </>
    );
}
