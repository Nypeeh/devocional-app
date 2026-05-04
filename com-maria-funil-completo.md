# Com Maria — Funil Completo, Copy e Design System

---

## Índice

1. [Design System](#design-system)
2. [Estrutura do Funil](#estrutura-do-funil)
3. [Tela 0 — Landing Page com Mini-VSL](#tela-0--landing-page-com-mini-vsl)
4. [Roteiro da Mini-VSL](#roteiro-da-mini-vsl)
5. [Tela 1 — Pergunta 1: Áreas da vida](#tela-1--pergunta-1-áreas-da-vida)
6. [Tela 2 — Pergunta 2: Estado espiritual](#tela-2--pergunta-2-estado-espiritual)
7. [Tela 3 — Pergunta 3: O que está travado](#tela-3--pergunta-3-o-que-está-travado)
8. [Tela 4 — Captura de nome](#tela-4--captura-de-nome)
9. [Tela 5 — Áudio de oração](#tela-5--áudio-de-oração)
10. [Tela 6 — Intenção pessoal](#tela-6--intenção-pessoal)
11. [Tela 7 — Confirmação da intenção](#tela-7--confirmação-da-intenção)
12. [Tela 8 — Transição para oferta](#tela-8--transição-para-oferta)
13. [Tela 9 — Oferta e planos](#tela-9--oferta-e-planos)
14. [Tela 10 — Pós-pagamento e ativação](#tela-10--pós-pagamento-e-ativação)

---

## Design System

### Identidade Visual

O produto precisa transmitir **fé, acolhimento e modernidade** ao mesmo tempo. O visual é limpo e respira — nada de excessos religiosos kitsch. A referência estética é uma mistura de aplicativo espiritual contemporâneo com a delicadeza do universo mariano.

---

### Paleta de Cores

```
Primária (Azul Mariano)
  Principal:    #1A56DB   → botões primários, links, destaques
  Escuro:       #1E429F   → hover, títulos em destaque
  Claro:        #E8EFFF   → fundos de cards, highlights suaves

Secundária (Dourado)
  Principal:    #C9921A   → âncoras de preço riscado, selos, estrelas
  Claro:        #FEF3C7   → backgrounds de aviso ou destaque suave

Ação / CTA
  Principal:    #16A34A   → botões de compra e CTA principal da oferta
  Hover:        #15803D   → hover do botão de compra

Neutros
  Texto:        #111827   → corpo de texto principal
  Subtítulo:    #6B7280   → textos secundários e instruções
  Borda:        #E5E7EB   → divisores, bordas de cards
  Fundo:        #FFFFFF   → fundo padrão das telas
  Fundo suave:  #F9FAFB   → fundo alternado de seções

Feedback
  Erro:         #DC2626
  Sucesso:      #16A34A
```

---

### Tipografia

```
Família principal:   Inter (Google Fonts)
Família de apoio:    Playfair Display (títulos com emoção)

Hierarquia:

  H1 — Playfair Display, 32px, Bold, #111827
       Usado em: título principal da landing e da oferta

  H2 — Inter, 22px, SemiBold, #111827
       Usado em: títulos de cada tela do quiz

  H3 — Inter, 18px, SemiBold, #1A56DB
       Usado em: subtítulos, nomes em destaque

  Body — Inter, 16px, Regular, #374151
         Usado em: parágrafos e descrições

  Small — Inter, 14px, Regular, #6B7280
          Usado em: rodapés, créditos, notas legais

  CTA Button — Inter, 16px, Bold, UPPERCASE, #FFFFFF
```

---

### Componentes

#### Barra de Progresso
```
Altura:           6px
Cor preenchida:   #1A56DB
Cor vazia:        #E5E7EB
Border-radius:    999px
Posição:          topo da tela, abaixo do ícone de Nossa Senhora
Animação:         transição suave de 400ms
```

#### Ícone de Nossa Senhora
```
Tamanho:          48px × 48px
Formato:          círculo com borda suave #E8EFFF
Posição:          centralizado, acima da barra de progresso
Imagem:           ícone estilizado de Nossa Senhora (não foto — ilustração clean)
```

#### Cards de Opção (respostas do quiz)
```
Background:       #FFFFFF
Borda:            1px solid #E5E7EB
Border-radius:    12px
Padding:          16px 20px
Sombra:           0 1px 3px rgba(0,0,0,0.06)
Hover:            borda #1A56DB, background #F0F5FF
Selecionado:      borda #1A56DB 2px, background #E8EFFF
Gap entre cards:  12px
Ícone:            emoji à esquerda, 24px
Texto:            Inter 15px Regular #111827
```

#### Botão Primário (navegação do quiz)
```
Background:       #1A56DB
Texto:            #FFFFFF, Inter 16px Bold
Border-radius:    10px
Padding:          16px 32px
Largura:          100%
Hover:            #1E429F
Sombra:           0 4px 12px rgba(26,86,219,0.3)
```

#### Botão CTA da Oferta
```
Background:       #16A34A
Texto:            #FFFFFF, Inter 17px Bold, UPPERCASE
Border-radius:    10px
Padding:          18px 32px
Largura:          100%
Hover:            #15803D
Sombra:           0 4px 16px rgba(22,163,74,0.35)
Animação:         pulso suave de 2s no idle (chama atenção sem irritar)
```

#### Input de Texto
```
Border:           1px solid #E5E7EB
Border-radius:    10px
Padding:          14px 16px
Placeholder:      #9CA3AF, Inter 15px Italic
Focus:            borda #1A56DB, sombra 0 0 0 3px rgba(26,86,219,0.15)
```

#### Card de Plano (tela de oferta)
```
Padrão:
  Border:         1px solid #E5E7EB
  Background:     #FFFFFF
  Border-radius:  14px

Destaque (mais escolhido):
  Border:         2px solid #1A56DB
  Background:     #F0F5FF
  Badge topo:     "Mais escolhido" — background #1A56DB, texto branco, 12px Bold
  Border-radius:  14px
```

---

### Layout Geral das Telas do Quiz

```
Largura máxima:   480px (mobile-first)
Padding lateral:  24px
Padding vertical: 32px
Alinhamento:      centralizado na tela
Fundo da página:  #FFFFFF

Ordem dos elementos em cada tela:
  1. Ícone de Nossa Senhora (center)
  2. Barra de progresso (full width)
  3. Espaço de 24px
  4. Título H2 (center)
  5. Subtítulo/descrição Body (center, #6B7280)
  6. Espaço de 20px
  7. Cards de opção ou input
  8. Espaço de 20px
  9. Botão de ação
  10. Rodapé "Feito com ♡ e fé" (Small, center)
```

---

## Estrutura do Funil

```
Landing Page (mini-VSL)
        ↓
   Quiz — 3 perguntas
        ↓
   Captura de nome
        ↓
   Áudio de oração
        ↓
   Intenção pessoal
        ↓
   Confirmação da intenção
        ↓
   Transição emocional
        ↓
   Oferta — escolha do plano
        ↓
   Pagamento (Stripe/Hotmart)
        ↓
   Pós-pagamento — ativação WhatsApp
```

---

## Tela 0 — Landing Page com Mini-VSL

### Objetivo
Responder em menos de 10 segundos a pergunta silenciosa de quem chegou: *"o que é isso e por que eu deveria continuar?"*. A VSL faz esse trabalho. A tela só precisa enquadrar bem o vídeo e ter um CTA claro abaixo.

---

### Elementos da Tela

**Tag acima do título** (texto pequeno, azul, sem fundo)
```
ISSO NÃO É POR ACASO 🕊️
```

**Título principal** (H1, Playfair Display)
```
Ela chega no seu WhatsApp
toda manhã para orar com você
```

**Subtítulo** (Body, #6B7280)
```
Responda algumas perguntas rápidas e conheça
a Maria — sua companheira espiritual diária.
```

**Player de vídeo**
```
Formato:        16:9, border-radius 14px, sombra suave
Thumbnail:      imagem de Nossa Senhora com play button centralizado
Autoplay:       NÃO — a pessoa escolhe assistir
Legenda:        SIM — muita gente assiste sem som
```

**CTA abaixo do vídeo** (botão primário azul)
```
INICIAR MINHA JORNADA →
```

**Texto de apoio abaixo do botão** (Small, center, #6B7280)
```
🔒 Responda em 2 minutos. Sem compromisso.
```

---

## Roteiro da Mini-VSL

**Duração alvo:** 75 a 90 segundos  
**Formato:** Câmera direta, fundo neutro claro, iluminação suave. Tom íntimo, como conversa entre amigas. A pessoa que fala não precisa ser famosa — precisa ser verdadeira.

---

### Roteiro completo

---

*[Pausa de 1 segundo. Olhar direto para a câmera. Voz calma e próxima.]*

"Você já teve aquela sensação de que precisava orar, mas não sabia nem por onde começar?"

*[Pequena pausa. Deixa a pergunta pousar.]*

"Ou então tentou criar uma rotina espiritual… e depois de alguns dias foi esquecendo?"

*[Acena com a cabeça, como quem entende bem.]*

"Eu sei como é. A vida é corrida. O dia começa cheio. E de repente chegou a noite e você não parou nem um minuto para respirar com Deus."

*[Tom muda levemente — mais suave, como quem vai contar um segredo.]*

"Foi pensando nisso que eu criei a Maria."

*[Pausa curta.]*

"A Maria é uma companheira espiritual que chega no seu WhatsApp todo dia de manhã. Com um versículo, uma reflexão e uma oração feita para o que você está vivendo."

*[Sorriso leve.]*

"E quando você precisar colocar um pedido — uma cura, uma situação de família, algo que só você e Deus sabem — é só escrever para ela. Ela está lá."

*[Tom volta a ser direto, com leveza.]*

"Não é um aplicativo que você precisa lembrar de abrir. Não é mais um grupo de WhatsApp que você vai silenciar. É uma companheira que te procura. Todo dia. Com carinho."

*[CTA final — voz firme mas gentil.]*

"Responda algumas perguntas abaixo e veja o que a Maria vai orar por você hoje."

*[Pausa. Sorriso.]*

"Ela já está esperando por você."

---

**Notas de direção:**
- Falar devagar, com pausas reais. Não apressar.
- Evitar termos muito técnicos ou formais do catolicismo. Linguagem de conversa.
- A pessoa não precisa ser religiosa para passar credibilidade — precisa ser acolhedora.
- Gravação em vertical (9:16) para reaproveitamento em Stories e Reels.

---

## Tela 1 — Pergunta 1: Áreas da vida

### Objetivo
Criar identificação imediata e dar à usuária a sensação de que o produto será feito para ela especificamente.

---

### Copy da tela

**Progresso:** 1 de 3

**Título** (H2)
```
Em quais áreas você quer colocar
seu coração neste devocional?
```

**Instrução** (Small, #6B7280)
```
Pode escolher mais de uma
```

**Opções** (cards com emoji)
```
💼  Minha vida financeira e profissional
❤️  Harmonia nos relacionamentos e na família
🛡️  Proteção e força espiritual
🙏  Minha caminhada de fé
🌿  Paz interior e saúde
✨  Outra intenção
```

**Botão**
```
CONTINUAR →
```

---

## Tela 2 — Pergunta 2: Estado espiritual

### Objetivo
Aprofundar a identificação e coletar o dado que vai personalizar o tom do devocional entregue.

---

### Copy da tela

**Progresso:** 2 de 3

**Título** (H2)
```
Como está o seu coração
espiritual agora?
```

**Instrução** (Small, #6B7280)
```
Seja honesta — só assim podemos orar por você de verdade
```

**Opções** (cards com emoji)
```
🍓  Sinto que preciso de uma purificação interior
🌿  Busco uma renovação espiritual
🕊️  Estou em paz, mas quero mais clareza e direção
🛡️  Sinto necessidade de proteção e paz espiritual
🙏  Quero fortalecer minha fé e minha comunhão com Deus
```

**Botão**
```
CONTINUAR →
```

---

## Tela 3 — Pergunta 3: O que está travado

### Objetivo
Tocar na dor mais profunda. Essa pergunta é a que mais gera identificação emocional e prepara o terreno para o áudio de oração.

---

### Copy da tela

**Progresso:** 3 de 3

**Título** (H2)
```
Você sente que há algo em sua vida
que, apesar dos seus esforços,
ainda não se resolve?
```

**Opções** (cards com emoji)
```
😔  Sim… Sinto que tudo está travado e nada parece dar certo.
😞  Sim… Algumas áreas da minha vida parecem estagnadas.
😊  Graças a Deus, sinto que tudo está fluindo bem no momento.
```

**Botão**
```
CONTINUAR →
```

---

## Tela 4 — Captura de nome

### Objetivo
Criar personalização e reciprocidade. Ao pedir o nome antes de pedir qualquer coisa, o funil demonstra que se importa com quem está do outro lado.

---

### Copy da tela

**Título** (H2)
```
Gostaria de incluir seu nome em
nosso Livro de Orações?
```

**Descrição** (Body, #6B7280)
```
Com grande alegria, levaremos seu nome ao altar em nossas
orações diárias. Ao registrá-lo aqui, unimos sua intenção
à nossa comunidade de fé, confiando tudo ao Coração
Misericordioso de Jesus e à Intercessão de Nossa Senhora. 🙏❤️
```

**Placeholder do input**
```
Digite seu nome aqui
```

**Botão**
```
ENVIAR →
```

**Rodapé da tela** (Small, #6B7280)
```
Seus dados estão seguros e nunca serão compartilhados.
```

---

## Tela 5 — Áudio de oração

### Objetivo
Este é o momento de maior conexão emocional do funil. A usuária para, ouve, e experimenta o produto antes de pagar. O áudio deve ser gravado por uma voz feminina, suave e devota.

---

### Copy da tela

**Título** (H2, azul)
```
[Nome], é uma bênção contar com sua presença! 🙏
```

**Texto abaixo do título** (Body)
```
Vamos rezar juntos com fé e confiança.

Clique abaixo para ouvir esta oração e colocar suas
intenções sob a proteção do Coração Imaculado de Maria. 🙏❤️
```

**Player de áudio**
```
Estilo:         moderno, minimalista
Cor:            azul #1A56DB
Controle:       play/pause + barra de progresso
Sem autoplay
```

---

### Roteiro do áudio de oração

*[Música suave ao fundo — instrumental, sem letra. Tom de orquestra de câmara ou piano solo.]*

*[Voz feminina, pausada, calorosa.]*

"[Nome], eu te convido a respirar fundo agora.

Coloca uma mão no coração.

E sente: você não chegou aqui por acaso.

Nossa Senhora te chamou até aqui porque ela conhece o peso que você carrega. Ela sabe o que está no seu coração antes mesmo de você falar.

Agora, coloque seu pedido nas mãos dela.

Fala com ela: *'Mãe, este pedido eu coloco em suas mãos. Me ajude a pedir a Jesus. Peça com comigo. Interceda por mim.'*

*[Pausa de 4 segundos.]*

Amém.

Nossa Senhora está com você. E a partir de agora, ela vai caminhar com você todos os dias."

*[Música desvanece suavemente.]*

---

**Instrução abaixo do player** (Small, #6B7280)
```
Ouça até o final antes de continuar 🙏
```

**Botão** (aparece após 30 segundos de áudio ou ao fim)
```
CONTINUAR →
```

---

## Tela 6 — Intenção pessoal

### Objetivo
Fazer a usuária investir emocionalmente no produto antes de ver o preço. Quando ela escreve o pedido dela, ela já está dentro — o que aumenta muito a conversão na tela seguinte.

---

### Copy da tela

**Título** (H2)
```
[Nome], Deus quer te abençoar hoje! 🙏
```

**Texto** (Body)
```
Se você pudesse ver seu maior desejo realizado, o que pediria?

Talvez seja uma cura, a restauração da sua família,
a libertação de um vício, a prosperidade financeira,
o reencontro com o amor verdadeiro,
ou simplesmente, a paz no coração.

Declare com fé seu pedido abaixo. Nossa Senhora,
cheia de graça e fonte de bênçãos, levará sua súplica
ao coração de Jesus. Ela intercederá poderosamente por você! ❤️🕊️

Acredite: nada é impossível para Deus. Com este Devocional,
Ele agirá com amor e poder em sua vida. ✨
```

**Placeholder do input** (textarea, 3 linhas)
```
Digite aqui sua prece…
```

**Botão**
```
CONTINUAR →
```

---

## Tela 7 — Confirmação da intenção

### Objetivo
Recompensar o ato de compartilhar o pedido. Criar calor emocional e preparar psicologicamente para a transição para a oferta.

---

### Copy da tela

**Ícone:** Nossa Senhora centralizado

**Título** (H2, azul)
```
[Nome], é uma bênção contar com sua presença! 🙏
```

**Texto** (Body, center)
```
Seu nome e sua intenção já foram cuidadosamente
incluídos em nosso Livro de Orações.

Você será lembrada com carinho e fé cada dia,
diante do altar do Senhor.
```

**Botão**
```
CONTINUAR →
```

---

## Tela 8 — Transição para oferta

### Objetivo
Fazer a ponte emocional entre a experiência do quiz e a apresentação do produto. A usuária precisa entender o que está prestes a receber antes de ver o preço.

---

### Copy da tela

**Barra de progresso animada** com texto abaixo:
```
Preparando sua companheira espiritual… 🙏❤️
```

*[A barra preenche por 3 a 4 segundos. Após isso, o conteúdo abaixo aparece gradualmente.]*

**Texto que aparece após a animação** (Body, center)
```
Neste Devocional os caminhos se abrirão e o meu
desejo de [intenção da usuária] será realizado em
nome de Jesus pela intercessão de Nossa Senhora.
```

**Imagem do produto** (capa do devocional/app)

**Botão**
```
CONTINUAR →
```

---

## Tela 9 — Oferta e planos

### Objetivo
Converter. A copy aqui precisa justificar o valor da assinatura antes de mostrar o preço, ancorar o preço contra algo mais caro, e remover o risco com garantia.

---

### Bloco 1 — Headline

**Tag** (Small, azul, sem fundo)
```
Sua companheira espiritual está pronta! Veja abaixo 🙏
```

**Título** (H1, Playfair Display)
```
Transforme Seus Dias com Maria:
Uma Companheira Espiritual que Chega
Todo Dia no Seu WhatsApp
```

**Subtítulo** (Body, #6B7280)
```
Devocional diário personalizado · Orações · Acolhimento a qualquer hora
Direto no WhatsApp. Sem app para baixar. Sem complicação.
```

---

### Bloco 2 — O que está incluso

**Título do bloco** (H3)
```
O que você vai receber todo dia
```

**Itens** (lista com ícone ✅)
```
✅ Devocional do dia personalizado para sua intenção
✅ Versículo bíblico selecionado para o seu momento
✅ Oração guiada para começar o dia com fé
✅ Suporte para seus pedidos a qualquer hora do dia
✅ Novenas e datas especiais do calendário mariano
✅ Acesso ao Livro de Orações comunitário
```

---

### Bloco 3 — Âncora de preço

**Texto** (Body, center)
```
Muitas mulheres buscam esse tipo de acompanhamento
espiritual em retiros e grupos presenciais
que custam centenas de reais por mês.

A Maria chega no seu WhatsApp todos os dias
por menos de R$1,00 por dia.
```

---

### Bloco 4 — Cards de plano

**Plano Mensal**
```
Título:         Plano Mensal
Preço:          R$29,90/mês
Descrição:      Para começar sua jornada
CTA:            QUERO MARIA COMIGO →
```

**Plano Semestral** (com badge "Mais escolhido")
```
Badge:          ★ MAIS ESCOLHIDO
Título:         Plano Semestral
Preço riscado:  ~~R$179,40~~
Preço:          R$137,00 (equivale a R$22,90/mês)
Economia:       Você economiza R$42,00
Descrição:      O compromisso que transforma
CTA:            QUERO MARIA COMIGO →
```

---

### Bloco 5 — Prova social

**Título** (H3, center)
```
Nosso Devocional é confiável?
```

**Texto** (Body, center)
```
Sim! Aqui estão algumas avaliações de mulheres
que já fazem parte da nossa comunidade 💙
```

*[Cards de depoimentos — mínimo 3. Formato: foto de perfil + nome + texto curto + estrelas.]*

**Modelo de depoimento:**
```
"Eu acordava e já tinha aquela mensagem me esperando.
Era como se alguém realmente estivesse orando por mim."
— Keyla R., São Paulo ★★★★★
```

---

### Bloco 6 — Garantia

**Título** (H3, center)
```
Tem garantia?
```

**Texto** (Body, center)
```
Sim! Estamos tão confiantes que o nosso Devocional
vai transformar a sua rotina espiritual que garantimos
reembolso total no prazo de 30 dias após a compra.
Sem perguntas. Sem burocracia.
```

**Ícone:** Selo de garantia 30 dias

**CTA final** (botão verde, grande)
```
EU QUERO MARIA COMIGO →
```

**Texto abaixo do botão** (Small, center, #6B7280)
```
Plano Mensal R$29,90 · Plano Semestral R$137,00
Cancele quando quiser · Pagamento 100% seguro 🔒
```

---

## Tela 10 — Pós-pagamento e ativação

### Objetivo
Concluir o processo emocional iniciado no funil, confirmar a compra e conduzir a usuária para o WhatsApp de forma clara e entusiasmada.

---

### Copy da tela

**Ícone:** Nossa Senhora centralizado com confetes animados (leves)

**Título** (H1, Playfair Display, azul)
```
Bem-vinda, [Nome]! 🎉🙏
```

**Texto** (Body, center)
```
Sua intenção está guardada com carinho.

A partir de amanhã às 7h da manhã, a Maria
vai chegar no seu WhatsApp com uma palavra,
um versículo e uma oração pensada para você.

E sempre que precisar colocar um pedido
no coração de Nossa Senhora, é só escrever para ela.
```

**Instrução de ativação** (H3, azul)
```
Último passo: ativar sua companheira espiritual
```

**Texto de instrução** (Body)
```
Clique no botão abaixo para abrir o WhatsApp e enviar
uma mensagem para a Maria. Isso ativa sua conta
e confirma que chegamos até você. 💙
```

**Botão** (verde, ícone do WhatsApp)
```
💬 ABRIR WHATSAPP E ATIVAR →
```

*[O botão abre o WhatsApp com mensagem pré-preenchida: "Olá! Me chamo [Nome] e acabei de me tornar assinante. Estou pronta para começar! 🙏"]*

**Texto abaixo** (Small, #6B7280)
```
Caso não receba mensagem em até 5 minutos,
entre em contato pelo e-mail suporte@commaria.com.br
```

---

## Notas Finais de Implementação

### Personalização dinâmica
Os campos `[Nome]` e `[intenção da usuária]` devem ser substituídos dinamicamente com base nas respostas coletadas nas telas anteriores. Isso precisa estar disponível via `localStorage` ou `sessionStorage` durante toda a navegação do funil.

### Mobile-first obrigatório
100% do tráfego desse público chega via celular. Todas as telas devem ser desenvolvidas e testadas primeiro em 375px de largura.

### Velocidade de carregamento
O funil deve carregar em menos de 2 segundos em 4G. Evitar fontes pesadas, imagens sem compressão e scripts desnecessários. O vídeo da VSL deve ser hospedado no Vimeo ou Bunny.net (nunca em servidor próprio).

### Pixels e rastreamento
Instalar Meta Pixel e Google Tag Manager antes de qualquer tráfego pago. Eventos a rastrear: PageView por tela, QuizCompleted, IntentionSubmitted, CheckoutStarted, Purchase.

### A/B Tests prioritários para depois do MVP
1. Headline da landing page
2. Cor do botão CTA da oferta (verde vs azul)
3. Plano em destaque (mensal vs semestral)
4. Com VSL vs sem VSL na landing
