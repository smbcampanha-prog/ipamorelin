import { HUB as retatrutida } from "./retatrutida";
import { HUB as ipamorelin } from "./ipamorelin";

const HUBS = { retatrutida, ipamorelin };
const KEY = "hub_override";

export const getHub = () => {
    if (typeof window !== "undefined") {
        try {
            const q = new URLSearchParams(window.location.search).get("hub");
            if (q && HUBS[q]) {
                window.sessionStorage.setItem(KEY, q);
                return HUBS[q];
            }
            const saved = window.sessionStorage.getItem(KEY);
            if (saved && HUBS[saved]) return HUBS[saved];
            if (window.location.hostname.includes("ipamorelin")) return ipamorelin;
        } catch (e) {
            /* fall through to default */
        }
    }
    return ipamorelin;
};
