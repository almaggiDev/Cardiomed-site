// js/pages/PageEstudios.js
function PageEstudios({ go }) {
  const [q,   setQ]   = React.useState('');
  const [cat, setCat] = React.useState('all');
  useReveal();

  const filtered = React.useMemo(() =>
    ESTUDIOS.filter(e =>
      (cat === 'all' || e.cat === cat) &&
      (e.name.toLowerCase().includes(q.toLowerCase()) ||
       e.who.toLowerCase().includes(q.toLowerCase()))
    ), [q, cat]);

  const cats = [
    { id: 'all',    l: 'Todos'        },
    { id: 'cardio', l: 'Cardiología'  },
    { id: 'pulmon', l: 'Neumonología' },
    { id: 'otros',  l: 'Otros'        },
  ];

  return (
    <>
      <PageHeader go={go} crumb="Estudios"
        title="Estudios médicos especializados"
        sub="Tecnología de última generación para diagnósticos precisos. Resultados digitales disponibles el mismo día, enviados directamente a tu email." />

      <Sec>
        {/* Controls */}
        <div className="filters">
          <div className="search">
            <span className="search__ico"><ISearch sz={14} /></span>
            <input
              className="search__input"
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Buscar estudio o médico..." />
          </div>
          {cats.map(c => (
            <button key={c.id}
                    className={['filter-btn', cat === c.id && 'active'].filter(Boolean).join(' ')}
                    onClick={() => setCat(c.id)}>
              {c.l}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="std-grid r" style={{ marginBottom: 40 }}>
            {filtered.map((e, i) => (
              <div key={i} className="std-tile">
                <p className="std-tile__name">{e.name}</p>
                <p className="std-tile__who">{e.who}</p>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '56px 0', borderTop: '1px solid var(--bone3)' }}>
            <p style={{ color: 'var(--muted)', marginBottom: 12, fontFamily: 'var(--mono)', fontSize: 'var(--t-xs)' }}>
              Sin resultados para "{q}"
            </p>
            <button onClick={() => { setQ(''); setCat('all'); }}
                    style={{ color: 'var(--red)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: 'var(--t-xs)', letterSpacing: '0.06em' }}>
              Limpiar filtros
            </button>
          </div>
        )}

        <div style={{ textAlign: 'center' }}>
          <Btn onClick={() => { go('turnos'); window.scrollTo(0, 0); }} v="red">
            <ICal sz={15} />Reservar un estudio
          </Btn>
        </div>
      </Sec>
      <CTABand go={go} />
    </>
  );
}
