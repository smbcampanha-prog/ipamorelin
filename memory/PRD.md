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
1. `cd /app/frontend && PUBLIC_URL=/retatrutida yarn build`
2. Subir o conteúdo de `build/` para a pasta pública `/retatrutida` do servidor.
3. Nginx (antes das regras do WordPress): `location /retatrutida/ { try_files $uri $uri/ /retatrutida/index.html; }`
   Apache (.htaccess dentro de /retatrutida): `RewriteEngine On` + `RewriteBase /retatrutida/` + fallback para `index.html`.
4. No robots.txt da RAIZ do domínio (o do WooCommerce — crawlers só leem a raiz), adicionar: `Sitemap: https://www.suplementosmaisbaratos.com.br/retatrutida/sitemap.xml`
5. Opcional: copiar llms.txt e llms-full.txt para a raiz do domínio (convenção lê a raiz).

## Implementado (2026-07-14)
- Home com hero cinético, stats, marquee, 8 cards-capítulo, infográfico do mecanismo, seção honesta preço/disponibilidade, seção consultoria.
- 7 páginas-artigo completas com breadcrumbs, aviso regulatório, stat callout, FAQs com schema, backlinks semânticos.
- Página de consultoria (3 passos, inclui/não inclui, CTA dourado) e FAQ com 9 perguntas + FAQPage schema.
- Pacote SEO/GEO completo; badge Emergent removido.
- URLs de produção (canonicals, sitemap, llms) apontando para www.suplementosmaisbaratos.com.br/retatrutida; build configurável por PUBLIC_URL.
- Versão em espanhol foi iniciada por engano e REVERTIDA a pedido do usuário (não é o público dele).

## Observações de handoff
- No preview do Emergent, o proxy injeta um bloco Cloudflare no robots.txt que bloqueia bots de IA; no domínio real isso não se aplica — validar após o deploy.
- Não há credenciais nem backend; site 100% estático.

## Backlog priorizado
- P0: deploy no subdiretório (passos acima), validar robots/canonicals no domínio real, submeter sitemap no Google Search Console.
- P1: imagem do produto com fundo transparente (usuário vai enviar); OG image dedicada por página.
- P2: atualizações dos estudos TRIUMPH; prerender/SSG para SEO ainda mais forte.
