// js/pages/PageCircuitos.js
function PageCircuitos({ go }) {
  useReveal();
  return (
    <>
      <PageHeader go={go} crumb="Circuitos"
        title="Diagnóstico cardiovascular integral"
        sub="Cuatro estudios coordinados en secuencia, el mismo día, con el mismo equipo. El único centro con Hospital de Día en Campana." />

      <Sec>
        {/* Plans */}
        <div className="crc-grid r" style={{ marginBottom: 72 }}>
          {CIRCUITOS.map((c, i) => (
            <div key={i} className={c.best ? 'crc-card crc-card--best' : 'crc-card'}>
              {c.best && <div className="crc-card__accent" />}
              {c.best && <span className="crc-card__rec">Recomendado</span>}
              <div className="crc-card__time"><IClock sz={12} />{c.time}</div>
              <p className="crc-card__name">{c.name}</p>
              <p className="crc-card__sub">{c.sub}</p>
              <ul className="crc-card__list">
                {c.items.map((it, j) => (
                  <li key={j} className="crc-card__item">
                    <ICheck sz={12} />{it}
                  </li>
                ))}
              </ul>
              <Btn onClick={() => { go('turnos'); window.scrollTo(0, 0); }}
                   v={c.best ? 'ghostw' : 'ghost'} sm full>
                Reservar <IArrow sz={13} />
              </Btn>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="split">
          <div className="rl">
            <Eye t="¿Cómo funciona?" />
            <Hdg mw={360}>Todo en el mismo día</Hdg>
            <Rule my={32} />
            <div className="feat">
              {[
                { t: 'Llegada y registro',       d: 'Recepción con turno programado. Sin largas esperas en sala.' },
                { t: 'Estudios de imagen',        d: 'Eco Doppler cardíaco y vascular con tecnología digital.' },
                { t: 'Prueba de esfuerzo',        d: 'Ergometría computarizada de 12 derivaciones.' },
                { t: 'Análisis complementario',   d: 'Edad arterial por velocidad de onda de pulso + factores de riesgo.' },
                { t: 'Entrega del diagnóstico',   d: 'Informe completo el mismo día. También enviado por email.' },
              ].map((s, i) => (
                <div key={i} className="feat__row">
                  <span className="feat__n">0{i + 1}</span>
                  <div>
                    <p className="feat__title">{s.t}</p>
                    <p className="feat__desc">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rr">
            <div className="tech-grid">
              <p className="tech-grid__lbl">Hospital de Día — incluido</p>
              {[
                { t: 'Accesibilidad total',        d: 'Ascensor apto para sillas de ruedas y camillas' },
                { t: 'Seguridad médica',            d: 'Zona protegida con desfibrilador automático' },
                { t: 'Resultados digitales',        d: 'Informe y estudios enviados por email el mismo día' },
                { t: 'Historia clínica integrada',  d: 'Acceso inmediato desde cualquier consulta' },
                { t: 'Recetas electrónicas',        d: 'Emitidas y registradas al finalizar la visita' },
              ].map((it, i) => (
                <div key={i} className="tech-row">
                  <span className="tech-row__n">0{i + 1}</span>
                  <div>
                    <p className="tech-row__title">{it.t}</p>
                    <p className="tech-row__desc">{it.d}</p>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 28 }}>
                <Btn href="https://wa.me/5493489529457" v="ghost" sm>
                  <IWA sz={13} />Consultar por WhatsApp
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </Sec>
      <CTABand go={go} />
    </>
  );
}
