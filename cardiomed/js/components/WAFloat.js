// js/components/WAFloat.js
function WAFloat() {
  return (
    <a href="https://wa.me/5493489529457" target="_blank"
       rel="noopener noreferrer"
       className="wa-float"
       aria-label="Contactar por WhatsApp">
      <IWA sz={22} />
    </a>
  );
}

// js/components/CTABand.js
function CTABand({ go }) {
  return (
    <section className="cta-band">
      <div className="cta-band__inner">
        <p className="eye eye--white" style={{ justifyContent: 'center' }}>Reservar turno</p>
        <h2 className="cta-band__title">
          ¿Listo para cuidar<br />su salud hoy?
        </h2>
        <p className="cta-band__sub">
          Turnos disponibles en línea las 24 horas. Sin esperas, sin llamadas.
        </p>
        <div className="cta-band__btns">
          <Btn onClick={() => { go('turnos'); window.scrollTo(0, 0); }} v="ghostw">
            <ICal sz={15} />Reservar Turno Online
          </Btn>
          <Btn href="https://wa.me/5493489529457" v="wa">
            <IWA sz={15} />WhatsApp
          </Btn>
        </div>
      </div>
    </section>
  );
}

// js/components/PageHeader.js
function PageHeader({ title, sub, go, crumb }) {
  useReveal();
  return (
    <section className="ph">
      <div className="ph__wrap">
        <div className="bc">
          <button className="bc__item" onClick={() => { go('inicio'); window.scrollTo(0, 0); }}>Inicio</button>
          <span className="bc__sep">/</span>
          <span className="bc__cur">{crumb}</span>
        </div>
        <div className="r" style={{ maxWidth: 600 }}>
          <h1 className="hdg hdg--2xl hdg--white" style={{ marginBottom: 16 }}>{title}</h1>
          <p className="body-copy" style={{ color: 'rgba(255,255,255,0.38)', maxWidth: 500 }}>{sub}</p>
        </div>
      </div>
    </section>
  );
}
