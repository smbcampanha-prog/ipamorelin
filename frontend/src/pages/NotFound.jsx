import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { MaskedLine, FadeIn } from "../components/Reveal";

export default function NotFound() {
    return (
        <>
            <Seo
                title="Página não encontrada | Hub Retatrutida"
                description="A página que você procurou não existe. Volte ao hub científico sobre retatrutida."
                path="/404"
            />
            <section data-testid="not-found-page" className="grid-bg flex min-h-[80vh] flex-col items-center justify-center px-5 pt-24 text-center">
                <h1 className="font-display text-6xl font-black text-white sm:text-8xl">
                    <MaskedLine delay={0.1}>
                        <span className="outline-text">404</span>
                    </MaskedLine>
                </h1>
                <FadeIn delay={0.4}>
                    <p className="mt-6 max-w-md text-base text-gray-400">
                        Esta rota não existe no hub. O conteúdo científico está a um clique de distância.
                    </p>
                    <Link
                        to="/"
                        data-testid="not-found-home-link"
                        className="mt-8 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/5 px-7 py-4 font-mono-tech text-[11px] font-bold uppercase tracking-[0.18em] text-sky-300 transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-sky-400/10"
                    >
                        Voltar ao hub
                    </Link>
                </FadeIn>
            </section>
        </>
    );
}
