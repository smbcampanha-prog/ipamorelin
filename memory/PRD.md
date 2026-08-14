# PRD — Hub Retatrutida (retatrutida.suplementosmaisbaratos.com.br)

## Problem statement original
Landing page dark underground neon (azul × preto, detalhes dourados) sobre retatrutida, com SEO/GEO completo (metas, llms.txt, llms-full.txt, robots.txt, sitemap.xml), arquitetura pilar com 9 páginas satélite + home, backlinks semânticos, CTAs para WhatsApp +55 21 97223-2170 (Suplementos Mais Baratos), sem badge Emergent. Pedido original incluía venda do produto — NÃO implementado por se tratar de medicamento sem registro ANVISA. Escopo acordado com o usuário: hub de conteúdo técnico-científico + consultoria educacional em peptídeos com avaliação gratuita; páginas de "preço" e "onde comprar" existem para absorver as keywords com texto honesto sobre status regulatório.

## Personas
- Visitante de tráfego pago/orgânico buscando "retatrutida", "retatrutida preço", "onde comprar", "vs mounjaro" etc.
- Lead de consultoria: pessoa interessada em peptídeos que agenda avaliação gratuita via WhatsApp.

## Arquitetura
- Frontend-only: React 19 + react-router-dom 7 + framer-motion 11 + lenis + react-helmet-async (CRACO/CRA).
- 10 rotas: `/`, `/o-que-e-retatrutida`, `/como-funciona`, `/estudos-clinicos`, `/retatrutida-vs-mounjaro`, `/efeitos-colaterais`, `/retatrutida-preco`, `/onde-comprar-retatrutida`, `/consultoria-peptideos`, `/faq`.
- Conteúdo dos artigos em `src/data/articles.js`; constantes em `src/data/site.js`.
- SEO: canonicals, OG/Twitter, JSON-LD (WebSite, Organization, MedicalWebPage, BreadcrumbList, FAQPage, Service), robots.txt, sitemap.xml, llms.txt, llms-full.txt em `frontend/public/`.
- Assets: `/public/assets/hero-neon.png` (arte neon do usuário), `produto-caneta.jpeg` (não usado — produto irregular).
- Design: bg #030308, neon #00A3FF/#38BDF8, dourado #D4AF37 exclusivo de CTAs; fontes Unbounded/Manrope/JetBrains Mono; hero com masked line reveal + parallax; marquee editorial; capítulos numerados; infográfico SVG do mecanismo triplo.

## Implementado (2026-07-14)
- Home com hero cinético, stats, marquee, 8 cards-capítulo, infográfico do mecanismo, seção honesta preço/disponibilidade, seção consultoria.
- 7 páginas-artigo completas com breadcrumbs, aviso regulatório, stat callout, FAQs com schema, backlinks semânticos.
- Página de consultoria (3 passos, inclui/não inclui, CTA dourado).
- FAQ com 9 perguntas + FAQPage schema.
- Pacote SEO/GEO completo na raiz pública.
- Badge Emergent removido (index.html reescrito sem emergent-main.js; template React do badge substituído).

## Observações de handoff
- No preview do Emergent, o proxy injeta um bloco Cloudflare no robots.txt que bloqueia bots de IA (GPTBot, ClaudeBot...). As regras próprias do site estão no fim do arquivo e prevalecem quando o domínio real apontar direto para o app — validar após o deploy no domínio final.
- Não há credenciais nem backend; site 100% estático.

## Backlog priorizado
- P0: apontar domínio retatrutida.suplementosmaisbaratos.com.br e validar robots.txt/canonicals no domínio real; submeter sitemap no Google Search Console.
- P1: imagem do produto com fundo transparente (usuário vai enviar) para seção visual; OG image dedicada por página.
- P2: blog/atualizações dos estudos TRIUMPH; versão em espanhol; schema HowTo para titulação dos protocolos de pesquisa.
