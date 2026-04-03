// js/pages/PageCoberturas.js
function PageCoberturas({ go }) {
  const [q, setQ] = React.useState('');
  useReveal();

  const filtered = React.useMemo(() =>
    COBERTURAS.filter(c => c.toLowerCase().includes(q.toLowerCase())),
    [q]
  );

  return (
    <>
      <PageHeader go={go} crumb="Coberturas"
        title="Coberturas y Obras Sociales"
        sub="Trabajamos con más de 28 prepagas y obras sociales. Los convenios pueden variar según el profesional — consultanos antes de tu turno." />

      <Sec>
        <div className="filters r">
          <div className="search">
            <span className="search__ico"><ISearch sz={14} /></span>
            <input
              className="search__input"
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Buscar cobertura..." />
          </div>
          <span style={{
            fontFamily: 'var(--mono)', fontSize: 'var(--t-xs)',
            color: 'var(--muted)', letterSpacing: '0.04em',
            display: 'flex', alignItems: 'center',
          }}>
            {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        <div className="cov-grid r" style={{ marginBottom: 24 }}>
          {filtered.map((c, i) => (
            <div key={i} className="cov-cell">
              <span className="cov-cell__chk"><ICheck sz={11} /></span>
              {c}
            </div>
          ))}
        </div>

        <div className="note r" style={{ marginBottom: 28 }}>
          <IShield sz={14} style={{ flexShrink: 0, marginTop: 1, color: 'var(--red)' }} />
          Los convenios con cada profesional pueden variar. Consultanos antes de tu turno para verificar tu cobertura.
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Btn href="https://wa.me/5493489529457" v="ghost" sm>
            <IWA sz={13} />Consultar mi cobertura
          </Btn>
          <Btn onClick={() => { go('turnos'); window.scrollTo(0, 0); }} v="red" sm>
            <ICal sz={13} />Pedir Turno
          </Btn>
        </div>
      </Sec>

      <CTABand go={go} />
    </>
  );
}
