// js/components/Footer.js
function Footer({ go }) {
  const to = id => { go(id); window.scrollTo(0, 0); };
  const cols = [
    { h: 'Secciones', ls: NAV.map(n => ({ t: n.l, fn: () => to(n.id) })) },
    { h: 'Contacto',  ls: [
      { t: '(0348) 9 426-123',          href: 'tel:+543489426123' },
      { t: 'WhatsApp',                  href: 'https://wa.me/5493489529457' },
      { t: 'Belgrano 252, Piso 1',      fn: () => to('ubicacion') },
      { t: 'Campana, Buenos Aires',     fn: () => to('ubicacion') },
    ]},
    { h: 'Horarios', ls: [
      { t: 'Lunes a Viernes' },
      { t: '08:00 – 20:00 hs', hi: true },
      { t: 'Atención médica' },
      { t: 'Retiro de informes y recetas' },
    ]},
  ];

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__logo">
            <div className="footer__mark">
              <IPulse sz={15} stroke="white" />
            </div>
            <span className="footer__brand">Cardiomed</span>
          </div>
          <p className="footer__desc">
            Centro médico integral con Hospital de Día en Campana.
          </p>
        </div>
        {cols.map(col => (
          <div key={col.h}>
            <p className="footer__col-h">{col.h}</p>
            {col.ls.map((lk, i) => {
              const cls = ['footer__lnk', lk.hi && 'hi'].filter(Boolean).join(' ');
              if (lk.href) return <a key={i} href={lk.href} target={lk.href.startsWith('http') ? '_blank' : undefined} className={cls}>{lk.t}</a>;
              if (lk.fn)   return <button key={i} onClick={lk.fn} className={cls}>{lk.t}</button>;
              return <span key={i} className={cls}>{lk.t}</span>;
            })}
          </div>
        ))}
      </div>
      <div className="footer__bar">
        <span>© 2025 Cardiomed Consultorios Médicos</span>
        <span>Hospital de Día Sociedad Italiana · Campana, Buenos Aires</span>
      </div>
    </footer>
  );
}
