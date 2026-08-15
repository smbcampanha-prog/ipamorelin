# PRD — Hub Retatrutida (www.suplementosmaisbaratos.com.br/retatrutida)

## Problem statement original
Landing page dark underground neon (azul × preto, detalhes dourados) sobre retatrutida, com SEO/GEO completo (metas, llms.txt, llms-full.txt, robots.txt, sitemap.xml), arquitetura pilar com 9 páginas satélite + home, backlinks semânticos, CTAs para WhatsApp +55 21 97223-2170 (Suplementos Mais Baratos), sem badge Emergent. Pedido original incluía venda do produto — NÃO implementado por se tratar de medicamento sem registro ANVISA. Escopo acordado com o usuário: hub de conteúdo técnico-científico + consultoria educacional em peptídeos com avaliação gratuita; páginas de "preço" e "onde comprar" existem para absorver as keywords com texto honesto sobre status regulatório. Hospedagem escolhida pelo usuário: subdiretório /retatrutida no domínio principal (WooCommerce, servidor dedicado) para aproveitar a autoridade do domínio raiz.

## Personas
- Visitante de tráfego pago/orgânico buscando "retatrutida", "retatrutida preço", "onde comprar", "vs mounjaro" etc.
- Lead de consultoria: pessoa interessada em peptídeos que agenda avaliação gratuita via WhatsApp.

## Arquitetura
- Frontend-only: React 19 + react-router-dom 7 + framer-motion 11 + lenis + react-helmet-async (CRACO/CRA).
- 10 rotas pt-BR: `/`, `/o-que-e-retatrutida`, `/como-funciona`, `/estudos-clinicos`, `/retatrutida-vs-mounjaro`, `/efeitos-colaterais`, `/retatrutida-preco`, `/onde-comprar-retatrutida`, `/consultoria-peptideos`, `/faq`.
- Conteúdo dos artigos em `src/data/articles.js`; constantes em `src/data/site.js` (SITE.domain = base de produção com subdiretório).
- SEO: canonicals, OG/Twitter, JSON-LD (WebSite, Organization, MedicalWebPage, BreadcrumbList, FAQPage, Service), robots.txt, sitemap.xml, llms.txt, llms-full.txt em `frontend/public/`.
- Build para produção: `PUBLIC_URL=/retatrutida yarn build` (basename do router e assets usam PUBLIC_URL automaticamente).
- Assets: `/public/assets/hero-neon.png` (arte neon do usuário).
- Design: bg #030308, neon #00A3FF/#38BDF8, dourado #D4AF37 exclusivo de CTAs; fontes Unbounded/Manrope/JetBrains Mono; hero com masked line reveal + parallax; marquee editorial; capítulos numerados; infográfico SVG do mecanismo triplo.

## Deploy no servidor do usuário (WooCommerce, dedicado)
O app é multi-hub: o mesmo código serve os dois sites. O conteúdo muda por hostname (ou `?hub=retatrutida|ipamorelin` no preview); os arquivos SEO estáticos são trocados pelo script `frontend/scripts/apply-hub.js`.
1. Retatrutida: `HUB=retatrutida node scripts/apply-hub.js && PUBLIC_URL=/retatrutida yarn build` → subir `build/` para a pasta `/retatrutida` do servidor www.
2. Ipamorelin: `HUB=ipamorelin node scripts/apply-hub.js && PUBLIC_URL=/ yarn build` → subir `build/` para a raiz do subdomínio ipamorelin.suplementosmaisbaratos.com.br.
3. Nginx (retatrutida, antes das regras do WordPress): `location /retatrutida/ { try_files $uri $uri/ /retatrutida/index.html; }` — no subdomínio ipamorelin: `try_files $uri $uri/ /index.html;` na raiz.
4. No robots.txt da RAIZ do WooCommerce, adicionar: `Sitemap: https://www.suplementosmaisbaratos.com.br/retatrutida/sitemap.xml` (no subdomínio ipamorelin, o robots.txt do hub já vale na raiz).

## Implementado (2026-07-14)
- Hub Retatrutida completo: home cinética, 7 artigos, consultoria, FAQ, SEO/GEO (sitemap, robots, llms.txt, llms-full.txt, JSON-LD).
- Hub Ipamorelin replicado: 10 páginas (o que é, como funciona eixo GHS-R1a→GH→IGF-1, estudos, vs sermorelin, efeitos/WADA S2, preço, onde comprar, consultoria, FAQ), diagrama vetorial próprio, sitemap/robots/llms apontando para ipamorelin.suplementosmaisbaratos.com.br.
- CTAs dourados com glow pulsante reforçado (anéis + halo + brilho).
- Melhorias SEO/GEO orgânico: seção "Referências e fontes externas" (PubMed, ClinicalTrials.gov, ANVISA, WADA) em todos os artigos dos dois hubs; datePublished/dateModified no schema MedicalWebPage.
- Arquitetura multi-hub em `src/hubs/` (retatrutida.js, ipamorelin.js, seletor index.js); build por hub via `scripts/apply-hub.js`.
- Link juice interno: backlinks semânticos no corpo dos artigos (primeira ocorrência da keyword principal aponta para a home; termos secundários apontam para os capítulos), 1 link por destino por página, sem auto-link.
- Badge Emergent removido. Versão em espanhol revertida a pedido do usuário.

## Observações de handoff
- No preview do Emergent, o proxy injeta um bloco Cloudflare no robots.txt que bloqueia bots de IA; no domínio real isso não se aplica — validar após o deploy.
- Preview: hub padrão é ipamorelin; `?hub=retatrutida` alterna (persiste na sessão).
- Não há credenciais nem backend; sites 100% estáticos.

## Backlog priorizado
- P0: deploy dos dois hubs (passos acima), validar robots/canonicals nos domínios reais, submeter sitemaps no Google Search Console.
- P1: imagem do produto com fundo transparente (usuário vai enviar); OG image dedicada por página.
- P2: atualizações dos estudos TRIUMPH; prerender/SSG para SEO ainda mais forte; novos hubs (mesmo modelo) para outros peptídeos.
