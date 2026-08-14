import { Helmet } from "react-helmet-async";
import { SITE } from "../data/site";

export const Seo = ({ title, description, path = "/", type = "article", jsonLd, image = "/assets/hero-neon.png" }) => {
    const url = `${SITE.domain}${path}`;
    const img = image.startsWith("http") ? image : `${SITE.domain}${image}`;
    return (
        <Helmet>
            <html lang="pt-BR" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
            <link rel="canonical" href={url} />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={`${SITE.name} — ${SITE.brand}`} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={img} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={img} />
            {jsonLd && (
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            )}
        </Helmet>
    );
};
