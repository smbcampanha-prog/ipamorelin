import { getHub } from "../hubs";

export const HUB = getHub();
export const SITE = HUB.site;
export const DRUG = HUB.drug;

export const waLink = (msg = SITE.defaultMsg) =>
    `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const NAV_LINKS = HUB.navLinks;
export const HUB_LINKS = HUB.hubLinks;
export const DISCLAIMER = HUB.disclaimer;
export const MARQUEE_TERMS = HUB.marquee;
export const HERO = HUB.hero;
export const STATS = HUB.stats;
export const MECH = HUB.mech;
export const DIAGRAM = HUB.diagram;
export const MARKET = HUB.market;
export const HOME_SEO = HUB.homeSeo;
export const FAQ_PAGE = HUB.faqPage;
export const FAQS = HUB.faqs;
