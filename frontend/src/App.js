import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Lenis from "lenis";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import Home from "@/pages/Home";
import ArticlePage from "@/pages/ArticlePage";
import Consultoria from "@/pages/Consultoria";
import Faq from "@/pages/Faq";
import NotFound from "@/pages/NotFound";

const ScrollManager = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname]);
    return null;
};

const useLenis = () => {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
        const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);
};

const Shell = () => {
    useLenis();
    return (
        <>
            <ScrollManager />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/consultoria-peptideos" element={<Consultoria />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/:slug" element={<ArticlePage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
};

function App() {
    return (
        <div className="App">
            <HelmetProvider>
                <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
                    <Shell />
                </BrowserRouter>
            </HelmetProvider>
        </div>
    );
}

export default App;
