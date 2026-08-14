export const ARTICLES = [
    {
        slug: "o-que-e-retatrutida",
        chapter: "01",
        kicker: "Fundamentos",
        title: "O que é Retatrutida? O peptídeo triplo agonista explicado",
        description:
            "Entenda o que é a retatrutida (LY3437943), o agonista triplo GLP-1, GIP e glucagona da Eli Lilly, por que ela ainda é experimental e qual seu status regulatório no Brasil.",
        keyword: "retatrutida o que é",
        readTime: "6 min",
        lede: "A retatrutida é um peptídeo experimental que ativa três receptores metabólicos ao mesmo tempo — e é a molécula mais comentada da pesquisa em obesidade. Aqui está o que a ciência realmente sabe sobre ela.",
        sections: [
            {
                h: "Uma molécula, três receptores",
                p: [
                    "A retatrutida (código de desenvolvimento LY3437943) é um peptídeo sintético criado pela farmacêutica Eli Lilly. Seu diferencial estrutural é ativar simultaneamente três receptores hormonais ligados ao metabolismo: GLP-1 (glucagon-like peptide-1), GIP (glucose-dependent insulinotropic polypeptide) e GCG (receptor de glucagona).",
                    "Na prática da pesquisa clínica, isso significa combinar em uma única molécula os efeitos que já eram conhecidos separadamente: controle do apetite e da glicemia (GLP-1), modulação do tecido adiposo (GIP) e aumento do gasto energético (glucagona).",
                ],
            },
            {
                h: "A evolução da família das incretinas",
                p: [
                    "Para situar a retatrutida, ajuda olhar a linha do tempo da classe. A primeira geração foi dos agonistas de GLP-1, como a semaglutida. A segunda trouxe a tirzepatida (Mounjaro), agonista duplo GIP/GLP-1. A retatrutida representa a terceira geração: o agonismo triplo.",
                    "Cada degrau adicionou um alvo fisiológico — e, nos estudos comparativos indiretos, ampliou a magnitude média da perda de peso observada. É essa progressão que explica o volume de buscas pelo nome da molécula.",
                ],
            },
            {
                h: "Por que ela ainda é experimental",
                p: [
                    "Apesar dos resultados publicados em periódicos como o New England Journal of Medicine, a retatrutida segue em fase 3 de desenvolvimento — a etapa final de testes em larga escala antes de um pedido de registro. Nenhuma agência regulatória do mundo aprovou a molécula até o momento.",
                    "Isso importa porque dados de eficácia preliminares não equivalem a aprovação: a fase 3 existe justamente para confirmar benefício, mapear raros eventos adversos e definir posologia segura em populações amplas.",
                ],
            },
            {
                h: "Status regulatório no Brasil",
                p: [
                    "A retatrutida não possui registro na ANVISA. A agência emitiu alertas públicos sobre a comercialização irregular de produtos rotulados com o nome da molécula, sem qualquer garantia de identidade, pureza ou concentração.",
                    "Qualquer oferta atual de 'retatrutida' no varejo brasileiro opera fora do marco sanitário. Detalhamos esse cenário — e os caminhos legítimos — nas páginas sobre preço e disponibilidade.",
                ],
            },
        ],
        stat: { value: "−24,2%", label: "redução média de peso em 48 semanas na fase 2 (dose de 12 mg) — NEJM, 2023" },
        faqs: [
            { q: "Retatrutida é um remédio aprovado?", a: "Não. A retatrutida é uma molécula experimental em fase 3 de estudos clínicos, sem aprovação em nenhum país e sem registro na ANVISA." },
            { q: "Retatrutida é o mesmo que Mounjaro?", a: "Não. Mounjaro é o nome comercial da tirzepatida, agonista duplo (GIP/GLP-1) já aprovado no Brasil. A retatrutida é um agonista triplo ainda em desenvolvimento." },
        ],
    },
    {
        slug: "como-funciona",
        chapter: "02",
        kicker: "Mecanismo de ação",
        title: "Como funciona a Retatrutida? O mecanismo triplo agonista",
        description:
            "GLP-1, GIP e glucagona: entenda receptor por receptor como a retatrutida atua no apetite, na glicemia e no gasto energético — e por que o agonismo triplo é o diferencial científico.",
        keyword: "retatrutida como funciona",
        readTime: "7 min",
        diagram: true,
        lede: "Três receptores, uma molécula. O mecanismo da retatrutida combina supressão de apetite, modulação metabólica e aumento de gasto calórico — e cada alvo tem um papel distinto.",
        sections: [
            {
                h: "GLP-1: o freio do apetite",
                p: [
                    "O receptor de GLP-1 é o alvo mais conhecido da classe. Sua ativação age no sistema nervoso central aumentando a saciedade, retarda o esvaziamento gástrico (a sensação de 'ficar satisfeito por mais tempo') e potencializa a secreção de insulina de forma dependente da glicose — ou seja, principalmente quando a glicemia está elevada.",
                    "É o mesmo alvo da semaglutida e de outros agonistas já aprovados, com décadas de dados de segurança acumulados na classe.",
                ],
            },
            {
                h: "GIP: o modulador do tecido adiposo",
                p: [
                    "O GIP foi por muito tempo subestimado na pesquisa da obesidade. Hoje se sabe que seu receptor, ativado em conjunto com o GLP-1, participa da regulação do tecido adiposo e da sensibilidade à insulina, com efeito sinérgico na redução de peso.",
                    "Foi a combinação GIP + GLP-1 que diferenciou a tirzepatida da geração anterior — e a retatrutida mantém esse eixo.",
                ],
            },
            {
                h: "Glucagona: o acelerador energético",
                p: [
                    "O terceiro alvo é o que torna a retatrutida singular. O receptor de glucagona, quando ativado de forma controlada, aumenta o gasto energético e estimula a oxidação de gordura no fígado — um componente de 'queima' que os agonistas duplos não possuem.",
                    "O desafio histórico era ativar glucagona sem elevar a glicemia; a engenharia da molécula buscou exatamente esse equilíbrio, contrabalançado pelo eixo GLP-1/GIP.",
                ],
            },
            {
                h: "A hipótese da sinergia",
                p: [
                    "A tese científica por trás do agonismo triplo é a de sinergia: menos apetite (GLP-1), melhor manejo metabólico da gordura (GIP) e maior gasto calórico (glucagona) ao mesmo tempo.",
                    "Os resultados da fase 2 — as maiores reduções médias de peso já registradas em ensaios com incretinas até então — são consistentes com essa hipótese, que a fase 3 TRIUMPH foi desenhada para confirmar.",
                ],
            },
        ],
        stat: { value: "3 alvos", label: "GLP-1 + GIP + glucagona ativados por uma única molécula de peptídeo" },
        faqs: [
            { q: "A retatrutida queima gordura diretamente?", a: "O braço de glucagona aumenta o gasto energético e a oxidação de gordura hepática, mas a perda de peso observada nos estudos resulta da combinação dos três mecanismos, sobretudo da redução sustentada da ingestão calórica." },
            { q: "O efeito no apetite é imediato?", a: "Nos ensaios, a supressão de apetite aparece nas primeiras semanas, enquanto a perda de peso máxima se acumula ao longo de meses de titulação e manutenção da dose." },
        ],
    },
    {
        slug: "estudos-clinicos",
        chapter: "03",
        kicker: "Evidência clínica",
        title: "Estudos clínicos da Retatrutida: fase 2, TRIUMPH e os números",
        description:
            "Todos os dados públicos da retatrutida: o estudo de fase 2 publicado no NEJM (2023), o ensaio em diabetes tipo 2 (Lancet) e o programa de fase 3 TRIUMPH, incluindo os resultados do TRIUMPH-4.",
        keyword: "retatrutida estudos clínicos",
        readTime: "9 min",
        lede: "Por trás do hype existem ensaios randomizados, publicados e revisados por pares. Este é o mapa completo da evidência — o que já foi publicado, o que está em andamento e o que falta.",
        sections: [
            {
                h: "Fase 2 em obesidade (NEJM, 2023)",
                p: [
                    "O estudo que colocou a retatrutida no mapa foi publicado no New England Journal of Medicine em 2023 (Jastreboff e colaboradores): 338 adultos com obesidade, randomizados para doses semanais de 1, 4, 8 ou 12 mg — ou placebo — por 48 semanas.",
                    "Os resultados: redução média de peso de até 24,2% no grupo de 12 mg, contra 2,1% no placebo. Todos os participantes das doses de 8 e 12 mg perderam ao menos 5% do peso corporal, e mais de 80% do grupo de 12 mg perdeu 15% ou mais.",
                ],
            },
            {
                h: "Fase 2 em diabetes tipo 2 (Lancet, 2023)",
                p: [
                    "Um segundo ensaio, publicado no The Lancet, avaliou a molécula em pessoas com diabetes tipo 2: além da perda de peso (cerca de 17% em 36 semanas na dose de 12 mg), a retatrutida reduziu a hemoglobina glicada (HbA1c) em aproximadamente 2 pontos percentuais.",
                    "O dado importa porque sugere potencial terapêutico duplo — obesidade e controle glicêmico —, a hipótese central do programa de fase 3.",
                ],
            },
            {
                h: "O programa TRIUMPH (fase 3)",
                p: [
                    "A Eli Lilly estruturou a fase 3 no programa TRIUMPH: uma família de estudos em larga escala cobrindo obesidade, diabetes tipo 2, osteoartrite de joelho e desfechos cardiometabólicos, com milhares de participantes em vários países.",
                    "O primeiro resultado divulgado foi o do TRIUMPH-4 (dezembro de 2025), em adultos com obesidade e osteoartrite de joelho: redução média de peso de aproximadamente 28,7% em 68 semanas na dose de 12 mg, acompanhada de melhora média de cerca de 75,8% no escore de dor WOMAC do joelho.",
                ],
            },
            {
                h: "Como as doses foram usadas nos protocolos de pesquisa",
                p: [
                    "Nos ensaios, a administração é subcutânea, uma vez por semana, com titulação progressiva — iniciando em doses baixas (2 mg) e escalando a cada poucas semanas até as doses-alvo de 4, 8 ou 12 mg, sempre sob supervisão médica e monitoramento de eventos adversos.",
                    "É importante registrar: essas são doses de protocolos de pesquisa, não uma posologia aprovada. Não existe bula, dose recomendada ou orientação de uso fora de ensaios clínicos, porque a molécula não tem registro.",
                ],
            },
            {
                h: "O que ainda falta",
                p: [
                    "Os demais braços do programa TRIUMPH seguem em andamento, e a Eli Lilly não anunciou data oficial de submissão regulatória. Analistas do setor projetam um possível pedido de registro nos próximos anos, mas qualquer cronograma é especulativo até a leitura completa dos dados de fase 3.",
                    "Acompanhamos os desfechos publicados e atualizamos este capítulo conforme novos resultados saem em periódicos revisados por pares.",
                ],
            },
        ],
        stat: { value: "−28,7%", label: "redução média de peso em 68 semanas no TRIUMPH-4 (12 mg), resultado de fase 3 divulgado em dez/2025" },
        faqs: [
            { q: "Os resultados da retatrutida são definitivos?", a: "Não. Os dados de fase 2 e o primeiro resultado de fase 3 são robustos, mas a aprovação depende do conjunto completo do programa TRIUMPH e da avaliação das agências regulatórias." },
            { q: "Quando a retatrutida pode ser aprovada?", a: "Não há data oficial. A Eli Lilly ainda conduz estudos de fase 3 e não anunciou cronograma de submissão." },
        ],
    },
    {
        slug: "retatrutida-vs-mounjaro",
        chapter: "04",
        kicker: "Comparativo técnico",
        title: "Retatrutida ou Mounjaro (tirzepatida): a comparação técnica",
        description:
            "Retatrutida ou Mounjaro? Comparação objetiva entre o agonista triplo experimental e o agonista duplo já aprovado pela ANVISA: mecanismo, evidência de perda de peso, segurança e disponibilidade legal.",
        keyword: "retatrutida ou mounjaro",
        readTime: "7 min",
        table: {
            head: ["Critério", "Retatrutida", "Mounjaro (tirzepatida)"],
            rows: [
                ["Alvos", "GLP-1 + GIP + glucagona (triplo)", "GIP + GLP-1 (duplo)"],
                ["Status no Brasil", "Experimental — sem registro ANVISA", "Aprovado pela ANVISA (2023)"],
                ["Evidência de perda de peso", "−24,2% (fase 2, 48 sem); −28,7% (TRIUMPH-4, 68 sem)", "≈ −20,9% (SURMOUNT-1, 15 mg, 72 sem)"],
                ["Administração", "Subcutânea semanal (nos ensaios)", "Subcutânea semanal (bula aprovada)"],
                ["Disponibilidade legal", "Nenhuma — em nenhum país", "Farmácias, com prescrição médica"],
                ["Segurança de longo prazo", "Em avaliação na fase 3", "Dossiê regulatório completo"],
            ],
        },
        lede: "É a comparação mais buscada do tema — e também a mais mal respondida na internet. Os números lado a lado, sem torcida e sem marketing.",
        sections: [
            {
                h: "O que diferencia as duas moléculas",
                p: [
                    "Mounjaro é o nome comercial da tirzepatida, agonista duplo dos receptores GIP e GLP-1, aprovado pela ANVISA em 2023 e disponível legalmente no Brasil mediante prescrição. A retatrutida adiciona um terceiro alvo — o receptor de glucagona — e permanece em fase 3 de desenvolvimento.",
                    "Na prática científica, a diferença de mecanismo se traduz em magnitude: o braço de glucagona adiciona gasto energético à equação, e os ensaios da retatrutida mostraram reduções médias de peso superiores às da tirzepatida — embora em populações e desenhos de estudo distintos, o que impede uma equivalência direta.",
                ],
            },
            {
                h: "O ponto decisivo: disponibilidade e segurança",
                p: [
                    "Números de eficácia não compram disponibilidade. A tirzepatida passou pelo crivo completo de registro: dossiê de segurança, bula aprovada, farmacovigilância ativa e cadeia de produção certificada. A retatrutida ainda está construindo esse dossiê.",
                    "Por isso, a resposta técnica honesta para 'retatrutida ou Mounjaro' hoje é assimétrica: uma é opção terapêutica real, com prescrição e acompanhamento médico; a outra é uma promessa científica em validação.",
                ],
            },
            {
                h: "O que observar nos próximos capítulos",
                p: [
                    "Se a fase 3 confirmar o perfil de eficácia e segurança, a retatrutida pode reposicionar o tratamento da obesidade — e a comparação deixará de ser teórica. Até lá, qualquer produto vendido com esse nome no Brasil é irregular.",
                    "Nossa consultoria educacional acompanha essa fronteira e ajuda você a interpretar o que cada novo resultado significa na prática.",
                ],
            },
        ],
        stat: { value: "2023", label: "ano de aprovação da tirzepatida (Mounjaro) pela ANVISA — a retatrutida segue sem registro" },
        faqs: [
            { q: "Retatrutida emagrece mais que Mounjaro?", a: "Nos dados publicados, as reduções médias de peso da retatrutida (24,2% na fase 2; ~28,7% no TRIUMPH-4) superam as da tirzepatida (~20,9% no SURMOUNT-1). Mas os estudos têm desenhos e durações diferentes, e a retatrutida ainda não concluiu a fase 3." },
            { q: "Posso trocar Mounjaro por retatrutida?", a: "Não existe retatrutida legal disponível para troca. Qualquer ajuste de tratamento deve ser feito com o médico responsável, dentro das opções aprovadas." },
        ],
    },
    {
        slug: "efeitos-colaterais",
        chapter: "05",
        kicker: "Segurança",
        title: "Efeitos colaterais da Retatrutida: o que os estudos mostram",
        description:
            "Perfil de segurança da retatrutida nos ensaios clínicos: efeitos gastrointestinais, frequência cardíaca, disestesia, alertas de classe e por que a supervisão médica é indispensável.",
        keyword: "retatrutida efeitos colaterais",
        readTime: "7 min",
        lede: "Toda molécula potente tem um preço fisiológico. Este é o balanço objetivo dos eventos adversos reportados nos ensaios da retatrutida — sem minimizar e sem dramatizar.",
        sections: [
            {
                h: "O eixo gastrointestinal",
                p: [
                    "Como em toda a classe das incretinas, os eventos mais frequentes foram gastrointestinais: náusea, vômito, diarreia e constipação. Nos ensaios, esses efeitos foram majoritariamente leves a moderados, concentrados no período de titulação (a fase de escalada de dose) e transitórios na maioria dos participantes.",
                    "A intensidade foi dose-dependente: quanto maior a dose-alvo, maior a incidência — um dos motivos pelos quais os protocolos sobem a dose gradualmente.",
                ],
            },
            {
                h: "Frequência cardíaca e achados da fase 3",
                p: [
                    "Um aumento transitório da frequência cardíaca foi observado em algumas doses, comportamento também conhecido de outros agonistas de GLP-1 e monitorado de perto no programa de fase 3.",
                    "No TRIUMPH-4, um achado específico chamou atenção: relatos de disestesia (sensibilidade anormal ou desconfortável da pele) em parte dos participantes, geralmente sem gravidade. É o tipo de sinal que a fase 3 existe para quantificar com precisão.",
                ],
            },
            {
                h: "Alertas de classe e contraindicações teóricas",
                p: [
                    "Os agonistas dessa família carregam um alerta regulatório sobre tumores de células C da tireoide observados em estudos com roedores — a relevância para humanos é desconhecida, mas por precaução, histórico pessoal ou familiar de carcinoma medular de tireoide ou de neoplasia endócrina múltipla tipo 2 (MEN2) é tratado como contraindicação nos protocolos.",
                    "Pancreatite, eventos de vesícula e hipoglicemia (em combinação com outros antidiabéticos) também integram o radar de monitoramento da classe.",
                ],
            },
            {
                h: "Por que a supervisão médica não é opcional",
                p: [
                    "Nos ensaios, cerca de 7% dos participantes das maiores doses descontinuaram por eventos adversos — um número administrável dentro de um protocolo com equipe médica, exames e titulação controlada, mas inaceitável no improviso.",
                    "Esse é o argumento central contra o mercado informal: sem produto verificado, sem titulação e sem monitoramento, o perfil de risco deixa de ser o dos estudos e passa a ser imprevisível.",
                ],
            },
        ],
        stat: { value: "≈7%", label: "de descontinuação por eventos adversos nas maiores doses da fase 2 — sob supervisão médica integral" },
        faqs: [
            { q: "A retatrutida é segura?", a: "Nos ensaios, o perfil foi considerado administrável, com predominância de efeitos gastrointestinais leves a moderados. Mas a segurança definitiva só será estabelecida com a conclusão da fase 3 e a análise regulatória." },
            { q: "Os efeitos colaterais passam com o tempo?", a: "Nos estudos, os sintomas gastrointestinais se concentraram no período de titulação e diminuíram com a manutenção da dose na maioria dos participantes." },
        ],
    },
    {
        slug: "retatrutida-preco",
        chapter: "06",
        kicker: "Mercado e regulação",
        title: "Preço da Retatrutida: por que não existe valor oficial",
        description:
            "Pesquisando o preço da retatrutida? A resposta honesta: não existe preço oficial, porque a molécula não tem registro em nenhum país. Entenda o mercado, os riscos das ofertas informais e o que esperar.",
        keyword: "retatrutida preço",
        readTime: "6 min",
        warning: true,
        lede: "Se você chegou aqui buscando quanto custa a retatrutida, a resposta técnica é curta: não existe preço oficial. O que existe — e importa saber — é o porquê.",
        sections: [
            {
                h: "Sem registro, sem preço",
                p: [
                    "Preço oficial de medicamento pressupõe registro sanitário: um laboratório detentor, uma bula aprovada, uma cadeia de distribuição certificada. A retatrutida não tem nada disso — nem no Brasil, nem em nenhum outro país — porque segue em fase 3 de estudos.",
                    "Nos ensaios clínicos, aliás, a lógica se inverte: o participante não paga pelo medicamento investigacional — ele é fornecido pelo patrocinador dentro do protocolo.",
                ],
            },
            {
                h: "E os anúncios com preço que circulam por aí?",
                p: [
                    "Qualquer oferta atual de 'retatrutida' com valor em reais refere-se a produtos do mercado informal. A ANVISA emitiu alertas públicos sobre essa comercialização irregular: sem registro, não há como garantir identidade da molécula, pureza, concentração por dose ou condições de esterilidade e armazenamento.",
                    "Na prática, o comprador não sabe o que está adquirindo — e a literatura de fiscalização sanitária sobre peptídeos falsificados mostra desde produtos subdosados até substâncias completamente diferentes no frasco.",
                ],
            },
            {
                h: "Quanto ela deve custar quando for aprovada?",
                p: [
                    "Qualquer número hoje seria especulação. A referência de mercado são os análogos já aprovados da classe — como a tirzepatida —, posicionados na faixa premium dos tratamentos para obesidade, com preço definido apenas após o registro e as negociações de cada mercado.",
                    "O cronograma também é aberto: sem data oficial de submissão, não há data de lançamento nem tabela de preço à vista.",
                ],
            },
            {
                h: "O que fazer enquanto isso",
                p: [
                    "O caminho racional é se informar com fonte primária (os estudos), acompanhar o processo regulatório e, se o objetivo é tratamento agora, conversar com um médico sobre as opções já aprovadas e legais.",
                    "Nossa consultoria educacional oferece uma avaliação gratuita exatamente para isso: entender seu contexto, explicar o cenário com base na ciência e indicar os próximos passos legítimos — sem venda de medicamento irregular, jamais.",
                ],
            },
        ],
        stat: { value: "R$ 0", label: "é o preço oficial da retatrutida — porque nenhum laboratório pode precificar uma molécula sem registro" },
        faqs: [
            { q: "Qual é o preço da retatrutida?", a: "Não existe preço oficial: a retatrutida não tem registro em nenhum país. Qualquer valor anunciado hoje refere-se a produtos irregulares do mercado informal, sobre os quais a ANVISA já emitiu alertas." },
            { q: "Retatrutida de farmácia de manipulação é confiável?", a: "Sem matéria-prima de referência registrada e sem bula aprovada, não há como verificar identidade, pureza ou dose. O risco sanitário é real e já foi objeto de alerta da ANVISA." },
        ],
    },
    {
        slug: "onde-comprar-retatrutida",
        chapter: "07",
        kicker: "Disponibilidade",
        title: "Onde comprar Retatrutida? O status real de disponibilidade",
        description:
            "Onde comprar retatrutida com segurança? A resposta direta: não existe canal legal de venda — no Brasil e no mundo. Veja os alertas da ANVISA, os riscos do mercado informal e os caminhos legítimos.",
        keyword: "retatrutida onde comprar",
        readTime: "6 min",
        warning: true,
        lede: "Esta é uma das perguntas mais buscadas do tema no Google Brasil. A resposta honesta não é uma lista de fornecedores — é um mapa da realidade regulatória.",
        sections: [
            {
                h: "A resposta direta",
                p: [
                    "Não existe onde comprar retatrutida legalmente. A molécula não foi aprovada por nenhuma agência regulatória do mundo — nem ANVISA, nem FDA, nem EMA — e, portanto, não pode ser vendida em farmácias, sites ou clínicas.",
                    "Isso vale para qualquer formato: canetas injetáveis, frascos, 'versões manipuladas' ou produtos importados anunciados em redes sociais e marketplaces.",
                ],
            },
            {
                h: "O que a ANVISA diz",
                p: [
                    "A ANVISA emitiu alertas públicos sobre a comercialização irregular de produtos rotulados como retatrutida no Brasil. A venda de medicamento sem registro configura infração sanitária, e a compra coloca o consumidor diante de um produto sem qualquer verificação oficial.",
                    "Os riscos documentados do mercado informal de peptídeos incluem falsificação, subdosagem e sobredosagem por erro de concentração, contaminação microbiológica e armazenamento inadequado — todos especialmente graves em um produto injetável.",
                ],
            },
            {
                h: "Os caminhos legítimos que existem hoje",
                p: [
                    "Existem duas rotas reais. A primeira é a participação em ensaios clínicos: estudos do programa TRIUMPH recrutaram participantes em vários países, e novos estudos são listados no ClinicalTrials.gov — dentro deles, o medicamento investigacional é fornecido gratuitamente, com acompanhamento médico completo.",
                    "A segunda é tratar agora com o que já é aprovado: moléculas como a tirzepatida (Mounjaro) e a semaglutida têm registro na ANVISA, cadeia de distribuição certificada e indicação médica estruturada.",
                ],
            },
            {
                h: "Como se posicionar para o futuro",
                p: [
                    "Quando — e se — a retatrutida concluir a fase 3 e obtiver registro, a disponibilidade seguirá o caminho normal: prescrição médica e farmácias. Até lá, a melhor estratégia é entender a ciência, acompanhar o processo e organizar seu contexto de saúde com profissionais.",
                    "É exatamente esse o papel da nossa consultoria educacional em peptídeos: uma avaliação gratuita para alinhar expectativas, explicar o cenário e mapear os próximos passos legítimos para o seu caso.",
                ],
            },
        ],
        stat: { value: "0", label: "canais legais de venda de retatrutida no Brasil e no mundo — qualquer oferta atual é irregular" },
        faqs: [
            { q: "Onde comprar retatrutida online?", a: "Não existe canal legal online ou físico. Sites e perfis que vendem 'retatrutida' operam no mercado informal, sem garantia de conteúdo, e foram alvo de alertas da ANVISA." },
            { q: "Posso importar retatrutida para uso pessoal?", a: "A importação de medicamento sem registro não garante legalidade nem segurança, e produtos injetáveis sem cadeia certificada carregam risco sanitário grave. Converse com um médico sobre alternativas aprovadas." },
        ],
    },
];

export const getArticle = (slug) => ARTICLES.find((a) => a.slug === slug);
