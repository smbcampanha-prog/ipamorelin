import { getHub } from "../hubs";

export const ARTICLES = getHub().articles;

export const getArticle = (slug) => ARTICLES.find((a) => a.slug === slug);
