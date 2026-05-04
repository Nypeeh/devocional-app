"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

type Screen = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;


function getProgress(screen: Screen): number {
  const map: Record<number, number> = { 0: 0, 1: 20, 2: 40, 3: 60, 4: 70, 5: 80, 6: 85, 7: 90, 8: 95, 9: 100, 10: 100 };
  return map[screen] ?? 0;
}

function MaryIcon() {
  return <Image src="/logo.png" alt="Com Maria" width={160} height={40} style={{ objectFit: "contain" }} />;
}


function ProgressBar({ pct }: { pct: number }) {
  return (
    <div className="progress-track">
      <div className="progress-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}

interface OptionCardProps {
  emoji: string;
  text: string;
  selected: boolean;
  onClick: () => void;
}

function OptionCard({ emoji, text, selected, onClick }: OptionCardProps) {
  return (
    <button className={`option-card${selected ? " selected" : ""}`} onClick={onClick}>
      <span className="option-emoji">{emoji}</span>
      <span className="option-text">{text}</span>
      <span className="option-check">
        {selected && <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>}
      </span>
    </button>
  );
}

// SCREEN 0 — Landing
function Screen0({ onNext }: { onNext: () => void }) {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/881493a9-47f0-42d7-937f-c676b564aa5d/players/69f8cd07cf46b4b4aa9eab78/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <div className="screen-content">
      <p className="t-tag">ISSO NÃO É POR ACASO 🕊️</p>
      <h1 className="t-h1">Ela chega no seu WhatsApp<br />toda manhã para orar com você</h1>
      <p className="t-body" style={{ marginTop: 8 }}>Responda algumas perguntas rápidas e conheça<br />a Maria — sua companheira espiritual diária.</p>

      <div
        style={{ width: "100%", margin: "16px auto" }}
        dangerouslySetInnerHTML={{ __html: '<vturb-smartplayer id="vid-69f8cd07cf46b4b4aa9eab78" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>' }}
      />

      <div id="vturb-continue-btn" style={{ display: "none", width: "100%" }}>
        <button className="btn-primary" onClick={onNext}>INICIAR MINHA JORNADA →</button>
        <div className="landing-support-text" style={{ marginTop: 12 }}>🔒 Responda em 2 minutos. Sem compromisso.</div>
      </div>
    </div>
  );
}

// SCREEN 1 — Áreas da vida
const q1Options = [
  { emoji: "💼", text: "Minha vida financeira e profissional" },
  { emoji: "❤️", text: "Harmonia nos relacionamentos e na família" },
  { emoji: "🛡️", text: "Proteção e força espiritual" },
  { emoji: "🙏", text: "Minha caminhada de fé" },
  { emoji: "🌿", text: "Paz interior e saúde" },
  { emoji: "✨", text: "Outra intenção" },
];

function Screen1({ onNext }: { onNext: (v: string[]) => void }) {
  const [sel, setSel] = useState<string[]>([]);
  const toggle = (t: string) => setSel(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t]);
  return (
    <div className="screen-content">
      <h2 className="t-h2">Em quais áreas você quer colocar<br />seu coração neste devocional?</h2>
      <p className="t-instruction">Pode escolher mais de uma</p>
      <div className="options-grid">
        {q1Options.map(o => <OptionCard key={o.text} emoji={o.emoji} text={o.text} selected={sel.includes(o.text)} onClick={() => toggle(o.text)} />)}
      </div>
      <button className="btn-primary" onClick={() => onNext(sel)} disabled={sel.length === 0}>CONTINUAR →</button>
    </div>
  );
}

// SCREEN 2 — Estado espiritual
const q2Options = [
  { emoji: "🍓", text: "Sinto que preciso de uma purificação interior" },
  { emoji: "🌿", text: "Busco uma renovação espiritual" },
  { emoji: "🕊️", text: "Estou em paz, mas quero mais clareza e direção" },
  { emoji: "🛡️", text: "Sinto necessidade de proteção e paz espiritual" },
  { emoji: "🙏", text: "Quero fortalecer minha fé e minha comunhão com Deus" },
];

function Screen2({ onNext }: { onNext: (v: string) => void }) {
  return (
    <div className="screen-content">
      <h2 className="t-h2">Como está o seu coração<br />espiritual agora?</h2>
      <p className="t-instruction">Seja honesta — só assim podemos orar por você de verdade</p>
      <div className="options-grid">
        {q2Options.map(o => <OptionCard key={o.text} emoji={o.emoji} text={o.text} selected={false} onClick={() => onNext(o.text)} />)}
      </div>
    </div>
  );
}

// SCREEN 3 — O que está travado
const q3Options = [
  { emoji: "😔", text: "Sim… Sinto que tudo está travado e nada parece dar certo." },
  { emoji: "😞", text: "Sim… Algumas áreas da minha vida parecem estagnadas." },
  { emoji: "😊", text: "Graças a Deus, sinto que tudo está fluindo bem no momento." },
];

function Screen3({ onNext }: { onNext: (v: string) => void }) {
  return (
    <div className="screen-content">
      <h2 className="t-h2">Você sente que há algo em sua vida que, apesar dos seus esforços, ainda não se resolve?</h2>
      <div className="spacer-md" />
      <div className="options-grid">
        {q3Options.map(o => <OptionCard key={o.text} emoji={o.emoji} text={o.text} selected={false} onClick={() => onNext(o.text)} />)}
      </div>
    </div>
  );
}

// SCREEN 4 — Captura de nome
function Screen4({ onNext }: { onNext: (name: string) => void }) {
  const [name, setName] = useState("");
  return (
    <div className="screen-content">
      <h2 className="t-h2">Gostaria de incluir seu nome em<br />nosso Livro de Orações?</h2>
      <div className="spacer-sm" />
      <p className="t-body">Com grande alegria, levaremos seu nome ao altar em nossas orações diárias. Ao registrá-lo aqui, unimos sua intenção à nossa comunidade de fé, confiando tudo ao Coração Misericordioso de Jesus e à Intercessão de Nossa Senhora. 🙏❤️</p>
      <div className="spacer-md" />
      <input className="form-input" type="text" placeholder="Digite seu nome aqui" value={name} onChange={e => setName(e.target.value)} onKeyDown={e => e.key === "Enter" && name.trim() && onNext(name.trim())} />
      <div className="spacer-md" />
      <button className="btn-primary" onClick={() => onNext(name.trim())} disabled={!name.trim()}>ENVIAR →</button>
      <p className="t-small" style={{ marginTop: 16 }}>Seus dados estão seguros e nunca serão compartilhados.</p>
    </div>
  );
}

// SCREEN 5 — Oração em Vídeo
function Screen5({ name, onNext }: { name: string; onNext: () => void }) {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/881493a9-47f0-42d7-937f-c676b564aa5d/players/69f8d52af4d26cf4d5d05ddf/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <div className="screen-content">
      <h2 className="t-h2 blue">{name}, é uma bênção contar com sua presença! 🙏</h2>
      <div className="spacer-sm" />
      <p className="t-body">Vamos rezar juntos com fé e confiança.<br /><br />Assista ao vídeo abaixo para acompanhar a oração e colocar suas intenções sob a proteção do Coração Imaculado de Maria. 🙏❤️</p>

      <div
        style={{ width: "100%", margin: "16px auto" }}
        dangerouslySetInnerHTML={{ __html: '<vturb-smartplayer id="vid-69f8d52af4d26cf4d5d05ddf" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>' }}
      />

      <div id="vturb-continue-btn-prayer" style={{ display: "none", width: "100%" }}>
        <button className="btn-primary" onClick={onNext}>CONTINUAR →</button>
      </div>
    </div>
  );
}

// SCREEN 6 — Intenção pessoal
function Screen6({ name, onNext }: { name: string; onNext: (v: string) => void }) {
  const [text, setText] = useState("");
  return (
    <div className="screen-content">
      <h2 className="t-h2">{name}, Deus quer te abençoar hoje! 🙏</h2>
      <div className="spacer-sm" />
      <p className="t-body" style={{ textAlign: "left" }}>Se você pudesse ver seu maior desejo realizado, o que pediria?<br /><br />Talvez seja uma cura, a restauração da sua família, a libertação de um vício, a prosperidade financeira, o reencontro com o amor verdadeiro, ou simplesmente, a paz no coração.<br /><br />Declare com fé seu pedido abaixo. Nossa Senhora, cheia de graça e fonte de bênçãos, levará sua súplica ao coração de Jesus. Ela intercederá poderosamente por você! ❤️🕊️<br /><br />Acredite: nada é impossível para Deus. Com este Devocional, Ele agirá com amor e poder em sua vida. ✨</p>
      <div className="spacer-md" />
      <textarea className="form-textarea" rows={4} placeholder="Digite aqui sua prece…" value={text} onChange={e => setText(e.target.value)} />
      <div className="spacer-md" />
      <button className="btn-primary" onClick={() => onNext(text.trim())} disabled={!text.trim()}>CONTINUAR →</button>
    </div>
  );
}

// SCREEN 7 — Confirmação da intenção
function Screen7({ name, onNext }: { name: string; onNext: () => void }) {
  return (
    <div className="screen-content" style={{ alignItems: "center", textAlign: "center" }}>
      <div style={{ fontSize: 64, marginBottom: 8 }}>🙏</div>
      <h2 className="t-h2 blue">{name}, é uma bênção contar com sua presença! 🙏</h2>
      <div className="spacer-sm" />
      <p className="t-body">Seu nome e sua intenção já foram cuidadosamente incluídos em nosso Livro de Orações.<br /><br />Você será lembrada com carinho e fé cada dia, diante do altar do Senhor.</p>
      <div className="spacer-lg" />
      <button className="btn-primary" onClick={onNext}>CONTINUAR →</button>
    </div>
  );
}

// SCREEN 8 — Transição
function Screen8({ intention, onNext }: { intention: string; onNext: () => void }) {

  const [barPct, setBarPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const total = 3500;
    const raf = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / total) * 100, 100);
      setBarPct(pct);
      if (pct < 100) requestAnimationFrame(raf);
      else setDone(true);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="screen-content" style={{ alignItems: "center", textAlign: "center" }}>
      <div className="transition-loader">
        <p className="t-body">Preparando sua companheira espiritual… 🙏❤️</p>
        <div className="transition-bar-track" style={{ width: "100%" }}>
          <div className="transition-bar-fill" style={{ width: `${barPct}%` }} />
        </div>
      </div>
      {done && (
        <div style={{ animation: "fadeSlideIn 0.5s ease", width: "100%" }}>
          <div className="intention-display">
            &quot;Neste Devocional os caminhos se abrirão e o meu desejo de {intention || "uma vida plena"} será realizado em nome de Jesus pela intercessão de Nossa Senhora.&quot;
          </div>

          <div style={{ fontSize: 80, marginBottom: 16 }}>🌸</div>
          <button className="btn-primary" onClick={onNext}>CONTINUAR →</button>
        </div>
      )}
    </div>
  );
}

// SCREEN 9 — Oferta
const features = [
  "Devocional do dia personalizado para sua intenção",
  "Versículo bíblico selecionado para o seu momento",
  "Oração guiada para começar o dia com fé",
  "Suporte para seus pedidos a qualquer hora do dia",
  "Novenas e datas especiais do calendário mariano",
  "Acesso ao Livro de Orações comunitário",
];


function Screen9({ onNext }: { onNext: (plan: string) => void }) {
  return (
    <div className="screen-content offer-section">
      <p className="t-tag">Sua companheira espiritual está pronta! Veja abaixo 🙏</p>
      <h1 className="t-h1">Transforme Seus Dias com Maria: Uma Companheira Espiritual que Chega Todo Dia no Seu WhatsApp</h1>
      <div className="spacer-sm" />
      <p className="t-sub">Devocional diário personalizado · Orações · Acolhimento a qualquer hora<br />Direto no WhatsApp. Sem app para baixar. Sem complicação.</p>
      <div className="divider" />
      <h3 className="t-h3">O que você vai receber todo dia</h3>
      <div className="features-list">
        {features.map(f => (
          <div key={f} className="feature-item">
            <span className="feature-icon">✅</span>
            <span>{f}</span>
          </div>
        ))}
      </div>
      <div className="divider" />
      <div className="price-anchor">
        <p>Muitas pessoas buscam esse tipo de acompanhamento espiritual em retiros e grupos presenciais que custam <strong>centenas de reais por mês</strong>.<br /><br />A Maria chega no seu WhatsApp todos os dias por menos de <strong>R$1,00 por dia</strong>.</p>
      </div>
      <div className="plans-grid">
        <div className="plan-card">
          <div className="plan-title">Plano Mensal</div>
          <div className="plan-desc">Para começar sua jornada</div>
          <div className="plan-price-row">
            <span className="plan-price-new">R$29,90</span>
            <span className="plan-price-period">/mês</span>
          </div>
          <div className="plan-cta">
            <a className="btn-primary checkout" href="https://pay.cakto.com.br/6zwb7c9_872899">QUERO MARIA COMIGO →</a>
          </div>

        </div>
        <div className="plan-card featured">
          <div className="plan-badge">★ MAIS ESCOLHIDO</div>
          <div className="plan-title">Plano Semestral</div>
          <div className="plan-desc">O compromisso que transforma</div>
          <div className="plan-price-row">
            <span className="plan-price-old">R$179,40</span>
            <span className="plan-price-new">R$137,00</span>
          </div>
          <div style={{ fontSize: 13, color: "var(--text-sub)", marginTop: 2 }}>equivale a R$22,90/mês</div>
          <span className="plan-savings">Você economiza R$42,00 🎉</span>
          <div className="plan-cta">
            <a className="btn-cta checkout" href="https://pay.cakto.com.br/qyyom4c">QUERO MARIA COMIGO →</a>
          </div>

        </div>
      </div>
      <div className="divider" />
      <div className="testimonials-section">
        <h3 className="t-h3">Nosso Devocional é confiável?</h3>
        <p className="t-sub" style={{ marginTop: 4 }}>Sim! Aqui estão algumas avaliações de mulheres que já fazem parte da nossa comunidade 💙</p>
        <div className="testimonial-carousel">
          {[1, 2, 3, 4, 5].map(num => (
            <div key={num} className="testimonial-slide">
              <Image src={`/dep0${num}.jpeg`} alt={`Avaliação ${num}`} width={600} height={800} />
            </div>
          ))}
        </div>
      </div>
      <div className="divider" />
      <div className="guarantee-section">
        <span className="guarantee-icon">🛡️</span>
        <h3 className="t-h3">Tem garantia?</h3>
        <p className="t-body" style={{ marginTop: 8 }}>Sim! Estamos tão confiantes que o nosso Devocional vai transformar a sua rotina espiritual que garantimos reembolso total no prazo de <strong>30 dias</strong> após a compra. Sem perguntas. Sem burocracia.</p>
      </div>
      <a className="btn-cta checkout" href="https://pay.cakto.com.br/qyyom4c">EU QUERO MARIA COMIGO →</a>

      <p className="t-small" style={{ marginTop: 12 }}>Plano Mensal R$29,90 · Plano Semestral R$137,00<br />Cancele quando quiser · Pagamento 100% seguro 🔒</p>
    </div>
  );
}

// SCREEN 10 — Pós-pagamento
function Screen10({ name }: { name: string }) {
  const msg = encodeURIComponent(`Olá! Me chamo ${name} e acabei de me tornar assinante. Estou pronta para começar! 🙏`);
  const waLink = `https://wa.me/5500000000000?text=${msg}`;
  return (
    <div className="screen-content">
      <div className="success-screen">
        <div className="confetti-icon">🎉</div>
        <h1 className="t-h1" style={{ color: "var(--blue-primary)" }}>Bem-vinda, {name}! 🎉🙏</h1>
        <p className="t-body">Sua intenção está guardada com carinho.<br /><br />A partir de amanhã às 7h da manhã, a Maria vai chegar no seu WhatsApp com uma palavra, um versículo e uma oração pensada para você.<br /><br />E sempre que precisar colocar um pedido no coração de Nossa Senhora, é só escrever para ela.</p>
        <div className="divider" />
        <h3 className="t-h3">Último passo: ativar sua companheira espiritual</h3>
        <div className="activation-steps">
          <p>Clique no botão abaixo para abrir o WhatsApp e enviar uma mensagem para a Maria. Isso ativa sua conta e confirma que chegamos até você. 💙</p>
        </div>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          💬 ABRIR WHATSAPP E ATIVAR →
        </a>

        <p className="t-small">Caso não receba mensagem em até 5 minutos, entre em contato pelo e-mail suporte@commaria.com.br</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [screen, setScreen] = useState<Screen>(0);
  const [answers, setAnswers] = useState({
    areas: [] as string[],
    spiritual: "",
    blocked: "",
    name: "",
    intention: "",
    plan: "",
  });

  const go = (s: Screen) => { setScreen(s); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const pct = getProgress(screen);

  return (
    <div className="funnel-wrapper">
      <div className="funnel-container">
        <div className="funnel-header">
          <MaryIcon />
          {screen > 0 && screen < 10 && <ProgressBar pct={pct} />}
        </div>

        {screen === 0 && <Screen0 onNext={() => go(1)} />}
        {screen === 1 && <Screen1 onNext={v => { setAnswers(a => ({ ...a, areas: v })); go(2); }} />}
        {screen === 2 && <Screen2 onNext={v => { setAnswers(a => ({ ...a, spiritual: v })); go(3); }} />}
        {screen === 3 && <Screen3 onNext={v => { setAnswers(a => ({ ...a, blocked: v })); go(4); }} />}
        {screen === 4 && <Screen4 onNext={v => { setAnswers(a => ({ ...a, name: v })); go(5); }} />}
        {screen === 5 && <Screen5 name={answers.name} onNext={() => go(6)} />}
        {screen === 6 && <Screen6 name={answers.name} onNext={v => { setAnswers(a => ({ ...a, intention: v })); go(7); }} />}
        {screen === 7 && <Screen7 name={answers.name} onNext={() => go(8)} />}
        {screen === 8 && <Screen8 intention={answers.intention} onNext={() => go(9)} />}

        {screen === 9 && <Screen9 onNext={() => {}} />}

        {screen === 10 && <Screen10 name={answers.name} />}

        {screen < 10 && <div className="funnel-footer">Feito com ♡ e fé · Com Maria</div>}
      </div>
    </div>
  );
}
