// js/components/Atoms.js

function Btn({ children, href, onClick, v = 'ink', sm, lg, full, cls = '' }) {
  const sz = sm ? 'btn--sm' : lg ? 'btn--lg' : 'btn--md';
  const all = ['btn', sz, `btn--${v}`, full ? 'btn--full' : '', cls].filter(Boolean).join(' ');
  if (href) return <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className={all}>{children}</a>;
  return <button onClick={onClick} className={all}>{children}</button>;
}

function Eye({ t, white }) {
  return <p className={white ? 'eye eye--white' : 'eye'}>{t}</p>;
}

function Hdg({ children, xl2, white, as: Tag = 'h2', mw }) {
  const cls = ['hdg', xl2 && 'hdg--2xl', white && 'hdg--white'].filter(Boolean).join(' ');
  return <Tag className={cls} style={mw ? { maxWidth: mw } : {}}>{children}</Tag>;
}

function Copy({ children, white, mw }) {
  return <p className="body-copy" style={{ color: white ? 'rgba(255,255,255,0.4)' : undefined, maxWidth: mw }}>{children}</p>;
}

function Rule({ my = 40 }) {
  return <div style={{ height: 1, background: 'var(--bone3)', margin: `${my}px 0` }} />;
}

function Sec({ children, cls = '', bg, py }) {
  return (
    <section className={['sec', cls].filter(Boolean).join(' ')} style={{ ...(bg ? { background: bg } : {}), ...(py ? { padding: `${py}px 0` } : {}) }}>
      <div className="wrap">{children}</div>
    </section>
  );
}

function Av({ init, sz = 34 }) {
  return <div className="prof-tile__av" style={{ width: sz, height: sz, fontSize: sz * 0.38 }}>{init.slice(0, 2)}</div>;
}
