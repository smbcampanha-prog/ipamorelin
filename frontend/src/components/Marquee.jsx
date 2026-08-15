import { MARQUEE_TERMS as TERMS } from "../data/site";

export const Marquee = () => (
    <div
        data-testid="editorial-marquee"
        className="relative overflow-hidden border-y border-white/5 bg-[#05050c] py-5"
        aria-hidden="true"
    >
        <div className="marquee-track flex w-max items-center gap-10">
            {[...TERMS, ...TERMS].map((term, i) => (
                <span key={i} className="flex items-center gap-10">
                    <span className="font-mono-tech text-xs uppercase tracking-[0.3em] text-sky-400/70">
                        {term}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[#D4AF37]/60" />
                </span>
            ))}
        </div>
    </div>
);
