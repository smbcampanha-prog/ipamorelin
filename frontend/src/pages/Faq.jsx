import { ChevronRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { Reveal, MaskedLine, FadeIn } from "../components/Reveal";
import { GoldButton } from "../components/GoldButton";
import { SITE } from "../data/site";

const FAQS = [
    {
        q: "A retatrutida é aprovada no Brasil?",
        a: "Não. A retatrutida não possui registro na ANVISA nem aprovação em nenhum país. Ela segue em fase 3 de estudos clínicos (programa TRIUMPH, da Eli Lilly). Qualquer produto vendido com esse nome no Brasil é irregular.",
    },
    {
        q: "Retatrutida: como tomar?",
        a: "Não existe orientação de uso aprovada, porque a molécula não tem registro. Nos protocolos de pesquisa, a administração é subcutânea, uma vez por semana, com titulação progressiva de dose sob supervisão médica integral. Fora de ensaios clínicos, não há posologia segura definida — e produtos do mercado informal não têm dose verificada.",
    },
    {
        q: "Qual é o preço da retatrutida?",
        a: "Não existe preço oficial: sem registro regulatório, nenhum laboratório pode precificar ou vender a molécula. Anúncios com valores em reais referem-se a produtos irregulares, sobre os quais a ANVISA já emitiu alertas. Detalhamos isso no capítulo sobre preço.",
    },
    {
        q: "Onde comprar retatrutida com segurança?",
        a: "Não existe canal legal de venda — no Brasil e em nenhum país. Os caminhos legítimos hoje são a participação em ensaios clínicos (listados no ClinicalTrials.gov) e as alternativas já aprovadas pela ANVISA, como a tirzepatida (Mounjaro), sempre com prescrição médica.",
    },
    {
        q: "Retatrutida ou Mounjaro: qual é melhor?",
        a: "São estágios diferentes. Mounjaro (tirzepatida) é um agonista duplo aprovado e disponível legalmente; a retatrutida é um agonista triplo experimental, com reduções de peso maiores nos estudos até agora, mas sem registro e sem segurança de longo prazo estabelecida. Hoje, a única opção real entre as duas é a tirzepatida, com acompanhamento médico.",
    },
    {
        q: "Quais são os efeitos colaterais da retatrutida?",
        a: "Nos ensaios, os mais frequentes foram gastrointestinais (náusea, vômito, diarreia, constipação), geralmente leves a moderados e concentrados na fase de titulação. Também foram observados aumento transitório da frequência cardíaca e, no TRIUMPH-4, relatos de disestesia. O perfil definitivo só será conhecido ao fim da fase 3.",
    },
    {
        q: "Quando a retatrutida chega ao Brasil?",
        a: "Não há data oficial. A Eli Lilly ainda conduz o programa de fase 3 e não anunciou cronograma de submissão às agências regulatórias. Qualquer previsão de lançamento é especulativa até a conclusão e publicação desses estudos.",
    },
    {
        q: "O que é a consultoria em peptídeos?",
        a: `É um serviço educacional da ${SITE.brand}: uma avaliação gratuita pelo WhatsApp (${SITE.whatsappDisplay}) para entender seu perfil, esclarecer dúvidas com base na literatura científica e mapear os caminhos legítimos para seus objetivos. Não vendemos medicamentos sem registro.`,
    },
    {
        q: "A consultoria substitui uma consulta médica?",
        a: "Não, jamais. A consultoria é educacional: organizamos informação técnica e cenário regulatório. Diagnóstico, prescrição e tratamento são atribuições exclusivas de profissionais de saúde habilitados.",
    },
];

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
                title="FAQ Retatrutida — Perguntas Frequentes Respondidas com Ciência"
                description="Retatrutida é aprovada? Como tomar? Qual o preço? Onde comprar? Retatrutida ou Mounjaro? Respostas diretas e honestas para as perguntas mais buscadas sobre a molécula."
                path="/faq"
                jsonLd={faqJsonLd}
            />

            <section data-testid="faq-section" className="relative overflow-hidden pt-36">
                <div className="grid-bg absolute inset-0 opacity-40" />
                <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
                <div className="relative mx-auto max-w-4xl px-5 pb-24 sm:px-8">
                    <FadeIn>
                        <p className="font-mono-tech text-[10px] uppercase tracking-[0.35em] text-sky-400/80">
                            Perguntas frequentes · respostas sem filtro
                        </p>
                    </FadeIn>
                    <h1 className="font-display mt-5 text-3xl font-black leading-[1.08] text-white sm:text-5xl">
                        <MaskedLine delay={0.15}>O QUE O BRASIL</MaskedLine>
                        <MaskedLine delay={0.3}>
                            PERGUNTA SOBRE <span className="text-neon">RETATRUTIDA</span>
                        </MaskedLine>
                    </h1>
                    <FadeIn delay={0.5}>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400">
                            Reunimos as dúvidas mais buscadas no Google e respondemos com base nos estudos e no
                            cenário regulatório real — inclusive quando a resposta não é a que você esperava.
                        </p>
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
