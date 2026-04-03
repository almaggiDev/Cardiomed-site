// js/pages/PageInicio.js
function PageInicio({ go }) {
  useReveal();

  const services = [
    { ico: <IPulse sz={20} />, title: 'Circuitos de Chequeo', desc: 'Diagnóstico cardiovascular completo en menos de 2 horas. Eco, Ergometría, Edad Arterial y análisis de riesgo.', pg: 'circuitos', flag: 'Más elegido' },
    { ico: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>, title: 'Especialistas Médicos', desc: 'Más de 15 profesionales en cardiología, clínica médica, neumonología, traumatología, dermatología y más.', pg: 'profesionales' },
    { ico: <IMonitor sz={20} />, title: 'Estudios Especializados', desc: 'Ecocardiograma, Holter 24hs, MAPA, Espirometría computarizada, Ergometría y Bioimpedancia.', pg: 'estudios' },
    { ico: <IShield sz={20} />, title: 'Coberturas Médicas', desc: 'Trabajamos con más de 28 prepagas y obras sociales: OSDE, Swiss Medical, Galeno, Medicus y más.', pg: 'coberturas' },
    { ico: <ICal sz={20} />, title: 'Turnos Online 24hs', desc: 'Reservá cuando quieras, para cualquier especialidad o estudio disponible. Sin llamadas ni filas.', pg: 'turnos' },
    { ico: <IMail sz={20} />, title: 'Tecnología Digital', desc: 'Historia clínica electrónica, resultados por email, recetas electrónicas e imágenes en alta resolución.' },
  ];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__watermark" aria-hidden="true">2h</div>
        <div className="hero__inner">
          {/* Left */}
          <div>
            <p className="hero__eye ha1">Hospital de Día · Campana, Buenos Aires</p>
            <h1 className="hero__h1 ha2">
              Medicina<br />de <em>precisión.</em>
            </h1>
            <p className="hero__body ha3">
              Centro médico integral con más de 15 especialistas y tecnología de última generación. Diagnóstico cardiovascular completo en menos de 2 horas.
            </p>
            <div className="hero__btns ha4">
              <Btn onClick={() => { go('turnos'); window.scrollTo(0, 0); }} v="ghostw" lg>
                <ICal sz={16} />Reservar Turno Online
              </Btn>
              <Btn href="https://wa.me/5493489529457" v="wa" lg>
                <IWA sz={16} />WhatsApp
              </Btn>
            </div>
            <div className="hero__meta ha5">
              {[
                { ico: <IClock sz={13} />, t: 'Lun–Vie  8:00–20:00' },
                { ico: <IPin sz={13} />,   t: 'Belgrano 252, Piso 1' },
                { ico: <IPhone sz={13} />, t: '(0348) 9 426-123' },
              ].map((it, i) => (
                <span key={i} className="hero__meta-item">
                  {it.ico}{it.t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div className="hero__panel ha6 hm">
            <p className="hero__panel-lbl">Cardiomed — datos</p>
            <div className="hero__stats">
              {[
                { n: '15+', l: 'Especialistas' },
                { n: '<2h', l: 'Diagnóstico integral' },
                { n: '28+', l: 'Obras sociales' },
                { n: '12',  l: 'Estudios disponibles' },
              ].map((s, i) => (
                <div key={i} className="hero__stat">
                  <div className="hero__stat-n">{s.n}</div>
                  <div className="hero__stat-l">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="hero__status">
              <span className="hero__dot" />
              <span className="hero__status-txt">Abierto hoy — 08:00 a 20:00 hs</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────── */}
      <div className="trust">
        <div className="trust__row">
          {[
            { ico: <IShield sz={14} />, t: 'Hospital de Día certificado' },
            { ico: <IMonitor sz={14} />, t: 'Historia clínica electrónica' },
            { ico: <ICal sz={14} />, t: 'Turnos online 24hs' },
            { ico: <IMail sz={14} />, t: 'Resultados por email' },
            { ico: <IPulse sz={14} />, t: '+15 especialistas' },
          ].map((it, i, arr) => (
            <div key={i} className="trust__item"
                 style={{ borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
              {it.ico}{it.t}
            </div>
          ))}
        </div>
      </div>

      {/* ── DIFERENCIAL ──────────────────────────────────── */}
      <Sec>
        <div className="split split--7-5">
          <div className="rl">
            <Eye t="Nuestro diferencial" />
            <Hdg xl2 mw={500}>El primer Hospital<br />de Día de Campana</Hdg>
            <Rule my={32} />
            <Copy mw={440}>
              Todo el diagnóstico cardiovascular en un solo lugar, en menos de 2 horas. Sin derivaciones, sin traslados. Tecnología de última generación con el compromiso de un equipo médico dedicado.
            </Copy>
            <div className="feat" style={{ marginTop: 36 }}>
              {[
                { t: 'Diagnóstico sin salir del centro', d: 'Eco, ergometría, edad arterial y factores de riesgo en una sola visita.' },
                { t: 'Historia clínica electrónica',     d: 'Acceso inmediato y seguro al historial completo del paciente.' },
                { t: 'Resultados digitales el mismo día', d: 'Enviados directamente a tu correo electrónico.' },
                { t: 'Recetas electrónicas',              d: 'Emitidas y registradas en el sistema digital integrado.' },
              ].map((it, i) => (
                <div key={i} className="feat__row">
                  <span className="feat__n">0{i + 1}</span>
                  <div>
                    <p className="feat__title">{it.t}</p>
                    <p className="feat__desc">{it.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28, display: 'flex', gap: 10 }}>
              <Btn onClick={() => { go('circuitos'); window.scrollTo(0, 0); }} v="red" sm>
                <IPulse sz={13} />Ver circuitos
              </Btn>
              <Btn onClick={() => { go('estudios'); window.scrollTo(0, 0); }} v="ghost" sm>
                Estudios disponibles
              </Btn>
            </div>
          </div>

          <div className="rr">
            <div className="tech-grid">
              <p className="tech-grid__lbl">Tecnología integrada</p>
              {[
                { t: 'Historia Clínica Electrónica', d: 'Acceso inmediato al historial completo del paciente' },
                { t: 'Resultados Digitales',         d: 'Enviados directamente a tu correo electrónico' },
                { t: 'Imágenes en Alta Resolución',  d: 'Eco Doppler digital archivado en la nube' },
                { t: 'Recetas Electrónicas',         d: 'Emitidas y registradas digitalmente' },
              ].map((it, i) => (
                <div key={i} className="tech-row">
                  <span className="tech-row__n">0{i + 1}</span>
                  <div>
                    <p className="tech-row__title">{it.t}</p>
                    <p className="tech-row__desc">{it.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Sec>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <Sec cls="sec--bone2">
        <div className="sec-head">
          <div className="r">
            <Eye t="Servicios" />
            <Hdg>Todo en un<br />solo lugar</Hdg>
          </div>
        </div>
        <div className="svc-grid r">
          {services.map((s, i) => (
            <div key={i}
                 className="svc-tile"
                 onClick={s.pg ? () => { go(s.pg); window.scrollTo(0, 0); } : undefined}>
              {s.flag && <span className="svc-tile__flag">{s.flag}</span>}
              <div className="svc-tile__ico">{s.ico}</div>
              <p className="svc-tile__title">{s.title}</p>
              <p className="svc-tile__desc">{s.desc}</p>
              {s.pg && (
                <span className="svc-tile__cta">
                  Ver más <IArrow sz={12} />
                </span>
              )}
            </div>
          ))}
        </div>
      </Sec>

      {/* ── NOVEDADES ────────────────────────────────────── */}
      <Sec>
        <div className="sec-head">
          <div className="rl">
            <Eye t="Novedades" />
            <Hdg>Nuevos servicios<br />incorporados</Hdg>
          </div>
          <div className="rr">
            <Btn onClick={() => { go('servicios'); window.scrollTo(0, 0); }} v="ghost" sm>
              Ver todos <IArrow sz={13} />
            </Btn>
          </div>
        </div>
        <div className="nov-grid r">
          {NOVEDADES.map((n, i) => (
            <div key={i} className="nov-tile">
              <span className="nov-tile__tag">{n.tag}</span>
              <p className="nov-tile__title">{n.title}</p>
              <p className="nov-tile__desc">{n.desc}</p>
              <div className="nov-tile__who">
                <div className="nov-tile__av">{n.init.slice(0, 2)}</div>
                <span className="nov-tile__name">{n.who}</span>
              </div>
            </div>
          ))}
        </div>
      </Sec>

      <CTABand go={go} />
    </>
  );
}
