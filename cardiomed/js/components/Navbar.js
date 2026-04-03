// js/components/Navbar.js
function Navbar({ page, go }) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const to = id => { go(id); setOpen(false); window.scrollTo(0, 0); };

  return (
    <>
      <nav className={['nav', scrolled && 'is-scrolled'].filter(Boolean).join(' ')}>
        <div className="nav__wrap">
          {/* Logo */}
          <button className="nav__logo" onClick={() => to('inicio')}>
            <div className="nav__mark">
              <IPulse sz={17} />
            </div>
            <div>
              <span className="nav__name">Cardiomed</span>
              <span className="nav__sub">Consultorios Médicos</span>
            </div>
          </button>

          {/* Desktop links */}
          <div className="nav__links hm">
            {NAV.map(n => (
              <button
                key={n.id}
                className={['nav__link', page === n.id && 'active'].filter(Boolean).join(' ')}
                onClick={() => to(n.id)}>
                {n.l}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="nav__actions">
            <a href="https://wa.me/5493489529457" target="_blank"
               className="btn btn--sm btn--ghost hm"
               style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <IWA sz={13} />WhatsApp
            </a>
            <Btn onClick={() => to('turnos')} v="red" sm>
              <ICal sz={13} />Pedir Turno
            </Btn>
            <button className="nav__burger hd" onClick={() => setOpen(!open)}>
              {open ? <IX sz={18} /> : <IMenu sz={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="nav__drawer">
          {NAV.map(n => (
            <button
              key={n.id}
              className={['nav__drawer-link', page === n.id && 'active'].filter(Boolean).join(' ')}
              onClick={() => to(n.id)}>
              {n.l}
              <IChevR sz={14} />
            </button>
          ))}
          <div className="nav__drawer-actions">
            <Btn href="https://wa.me/5493489529457" v="wa" full>
              <IWA sz={15} />Escribir por WhatsApp
            </Btn>
            <Btn onClick={() => to('turnos')} v="red" full>
              <ICal sz={15} />Reservar Turno Online
            </Btn>
          </div>
        </div>
      )}
    </>
  );
}
