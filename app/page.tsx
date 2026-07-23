"use client";

import { FormEvent, useState } from "react";

const experiences = [
  {
    n: "01",
    title: "Cancha",
    kicker: "Juego libre · Competencia",
    text: "Seis canchas con la superficie verde distintiva de Casa Tilia y juego hasta la medianoche. Vestuarios privados, encordado y pelotas nuevas siempre disponibles.",
    image: "experience-cancha.png",
    facts: ["6 canchas", "07:00 — 00:00"],
  },
  {
    n: "02",
    title: "Academia",
    kicker: "Técnica · Estrategia",
    text: "Entrenamiento privado, clínicas y un programa junior de cupos limitados. Un equipo de coaches diseña cada plan según tu juego y tus objetivos.",
    image: "experience-academia.png",
    facts: ["Sesiones 1:1", "Todos los niveles"],
  },
  {
    n: "03",
    title: "La Mesa",
    kicker: "Cocina · Sobremesa",
    text: "Café desde temprano, almuerzos de temporada y aperitivo al borde de la cancha. Una carta breve, producto argentino y esa sobremesa que alarga el partido.",
    image: "experience-mesa.png",
    facts: ["Cocina de estación", "Mesa hasta las 00:00"],
  },
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#inicio" aria-label="Casa Tilia, inicio">
          <span className="brand-mark">CT</span>
          <span>Casa Tilia<small>Tennis & Social Club</small></span>
        </a>
        <nav className={menuOpen ? "links open" : "links"} aria-label="Navegación principal">
          <a href="#club" onClick={() => setMenuOpen(false)}>El club</a>
          <a href="#experiencias" onClick={() => setMenuOpen(false)}>Experiencias</a>
          <a href="#membresia" onClick={() => setMenuOpen(false)}>Membresía</a>
          <button className="nav-cta" onClick={() => { setFormOpen(true); setMenuOpen(false); }}>Solicitar visita</button>
        </nav>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" aria-expanded={menuOpen}>
          <span /><span />
        </button>
      </header>

      <section className="hero" id="inicio" style={{ backgroundImage: `url('${basePath}/images/casa-tilia-hero.png')` }}>
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">Palermo Chico · Buenos Aires</p>
          <h1>El arte de<br />pertenecer.</h1>
          <div className="hero-bottom">
            <p>Tenis, mesa y encuentros<br />bajo las tipas.</p>
            <button className="round-link" onClick={() => setFormOpen(true)}>
              <span>Conocer<br />el club</span><b>↗</b>
            </button>
          </div>
        </div>
        <div className="hero-index">Est. 2026 <span>34°34&apos;S</span></div>
      </section>

      <section className="manifesto" id="club">
        <div className="section-number">(01)</div>
        <div>
          <p className="eyebrow dark">Nuestra manera</p>
          <h2>Un club para jugar bien.<br /><em>Y quedarse un poco más.</em></h2>
          <p className="body-copy">Casa Tilia recupera el ritual del club porteño y lo lleva al presente: excelencia deportiva sin solemnidad, una mesa siempre viva y una comunidad elegida con intención.</p>
        </div>
      </section>

      <section className="editorial-grid">
        <div className="image-tall"><img src={`${basePath}/images/casa-tilia-ritual.png`} alt="Raquetas clásicas, toallas y café junto a la cancha" /></div>
        <div className="quote-card">
          <span className="monogram">CT</span>
          <blockquote>“La mejor parte del partido empieza cuando termina.”</blockquote>
          <div className="court-lines" aria-hidden="true"><i /><i /><i /></div>
        </div>
      </section>

      <section className="experiences" id="experiencias">
        <div className="experience-intro">
          <p className="eyebrow">Dentro de Casa</p>
          <h2>Tu ritmo,<br /><em>todo el día.</em></h2>
        </div>
        <div className="experience-list">
          {experiences.map((item) => (
            <article key={item.n}>
              <div className="experience-image">
                <img src={`${basePath}/images/${item.image}`} alt={`${item.title} en Casa Tilia`} />
                <span className="experience-number">{item.n}</span>
              </div>
              <div className="experience-copy">
                <p className="experience-kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p className="experience-description">{item.text}</p>
                <div className="experience-facts">
                  {item.facts.map((fact) => <span key={fact}>{fact}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="membership" id="membresia">
        <p className="eyebrow">Membresía 2026</p>
        <h2>Hay lugares a los que<br />no se llega por casualidad.</h2>
        <p>El ingreso es por postulación y entrevista personal.<br />Abrimos una cantidad limitada de nuevas membresías por temporada.</p>
        <button className="ivory-button" onClick={() => setFormOpen(true)}>Iniciar postulación <span>↗</span></button>
      </section>

      <footer>
        <div className="footer-brand"><span>Casa Tilia</span><small>Tennis & Social Club</small></div>
        <div><p>Lafinur 2870</p><p>Palermo Chico, CABA</p></div>
        <div><a href="mailto:bonjour@casatilia.club">bonjour@casatilia.club</a><a href="#inicio">Instagram ↗</a></div>
        <div className="footer-note">Todos los días<br />07:00 — 00:00</div>
      </footer>

      {formOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="form-title" onMouseDown={() => setFormOpen(false)}>
          <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setFormOpen(false)} aria-label="Cerrar">×</button>
            {!sent ? <>
              <p className="eyebrow dark">Una primera conversación</p>
              <h2 id="form-title">Conocé Casa Tilia.</h2>
              <p>Contanos un poco sobre vos. Nuestro equipo de membresías se pondrá en contacto.</p>
              <form onSubmit={submit}>
                <label>Nombre y apellido<input required name="name" /></label>
                <label>Email<input required type="email" name="email" /></label>
                <label>¿Qué buscás en un club?<textarea required name="message" rows={3} /></label>
                <button className="submit">Enviar solicitud <span>↗</span></button>
              </form>
            </> : <div className="success"><span>CT</span><h2>Gracias.</h2><p>Recibimos tu solicitud. Te escribiremos muy pronto para coordinar una visita privada.</p></div>}
          </div>
        </div>
      )}
    </main>
  );
}
