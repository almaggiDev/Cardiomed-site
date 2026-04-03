// js/pages/PageProfesionales.js
function PageProfesionales({ go }) {
  const [cat, setCat] = React.useState('all');
  useReveal();

  const filtered = React.useMemo(() =>
    cat === 'all' ? PROFESIONALES : PROFESIONALES.filter(p => p.cat === cat),
    [cat]
  );

  const cats = [
    { id: 'all',     l: 'Todos'               },
    { id: 'cardio',  l: 'Cardiología'          },
    { id: 'clinica', l: 'Clínica Médica'       },
    { id: 'otros',   l: 'Otras especialidades' },
  ];

  return (
    <>
      <PageHeader go={go} crumb="Profesionales"
        title="Nuestro equipo médico"
        sub="Más de 15 profesionales especializados, trabajando en equipo para ofrecerte el mejor diagnóstico y tratamiento posible." />

      <Sec>
        <div className="filters r">
          {cats.map(c => (
            <button key={c.id}
                    className={['filter-btn', cat === c.id && 'active'].filter(Boolean).join(' ')}
                    onClick={() => setCat(c.id)}>
              {c.l}
            </button>
          ))}
        </div>

        <div className="prof-grid r" style={{ marginBottom: 40 }}>
          {filtered.map((p, i) => (
            <div key={p.init + i} className="prof-tile">
              <div className="prof-tile__av"
                   style={{ width: 34, height: 34, fontSize: '0.9rem' }}>
                {p.init.slice(0, 2)}
              </div>
              <span className="prof-tile__spec">{p.spec}</span>
              <p className="prof-tile__name">{p.name}</p>
              <button className="prof-tile__cta"
                      onClick={() => { go('turnos'); window.scrollTo(0, 0); }}>
                <ICal sz={11} />Pedir turno
              </button>
            </div>
          ))}
        </div>

        {/* Reception strip */}
        <div className="r" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 16,
          padding: '20px 24px',
          border: '1px solid var(--bone3)',
          background: 'var(--paper)',
        }}>
          <div>
            <p style={{ fontWeight: 600, color: 'var(--ink2)', marginBottom: 4, fontSize: 'var(--t-base)' }}>
              Secretaría — Marcela Rotela · Maira Gimenez
            </p>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 'var(--t-xs)', color: 'var(--muted)', letterSpacing: '0.04em' }}>
              Lunes a Viernes, 08:00–20:00 hs
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Btn href="tel:+543489426123" v="ghost" sm>
              <IPhone sz={13} />(0348) 9 426-123
            </Btn>
            <Btn href="https://wa.me/5493489529457" v="wa" sm>
              <IWA sz={13} />WhatsApp
            </Btn>
          </div>
        </div>
      </Sec>

      <CTABand go={go} />
    </>
  );
}
