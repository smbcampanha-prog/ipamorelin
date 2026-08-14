export const SITE = {
    name: "Hub Retatrutida",
    brand: "Suplementos Mais Baratos",
    domain: "https://www.suplementosmaisbaratos.com.br/retatrutida",
    whatsapp: "5521972232170",
    whatsappDisplay: "+55 21 97223-2170",
    defaultMsg:
        "Olá! Vim pelo Hub Retatrutida e quero agendar minha avaliação educacional gratuita sobre peptídeos.",
};

export const waLink = (msg = SITE.defaultMsg) =>
    `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const NAV_LINKS = [
    { to: "/o-que-e-retatrutida", label: "O que é" },
    { to: "/estudos-clinicos", label: "Estudos" },
    { to: "/retatrutida-vs-mounjaro", label: "vs Mounjaro" },
    { to: "/retatrutida-preco", label: "Preço" },
    { to: "/onde-comprar-retatrutida", label: "Disponibilidade" },
    { to: "/faq", label: "FAQ" },
];

export const HUB_LINKS = [
    { to: "/", label: "Retatrutida — Hub Científico", anchor: "retatrutida" },
    { to: "/o-que-e-retatrutida", label: "O que é retatrutida", anchor: "retatrutida o que é" },
    { to: "/como-funciona", label: "Como funciona a retatrutida", anchor: "retatrutida como funciona" },
    { to: "/estudos-clinicos", label: "Estudos clínicos da retatrutida", anchor: "retatrutida estudos clínicos" },
    { to: "/retatrutida-vs-mounjaro", label: "Retatrutida ou Mounjaro", anchor: "retatrutida ou mounjaro" },
    { to: "/efeitos-colaterais", label: "Efeitos colaterais da retatrutida", anchor: "retatrutida efeitos colaterais" },
    { to: "/retatrutida-preco", label: "Preço da retatrutida", anchor: "retatrutida preço" },
    { to: "/onde-comprar-retatrutida", label: "Onde comprar retatrutida", anchor: "retatrutida onde comprar" },
    { to: "/consultoria-peptideos", label: "Consultoria em peptídeos", anchor: "consultoria em peptídeos" },
    { to: "/faq", label: "Perguntas frequentes", anchor: "retatrutida perguntas frequentes" },
];

export const DISCLAIMER =
    "Conteúdo exclusivamente educacional. A retatrutida não possui registro na ANVISA nem aprovação em nenhum país. Este site não vende nem intermedia medicamentos. Consulte sempre um médico.";
