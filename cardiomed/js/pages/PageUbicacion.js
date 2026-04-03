// js/pages/PageUbicacion.js
function PageUbicacion({ go }) {
  useReveal();

  const details = [
    {
      ico: <IPin sz={18} />,
      label: 'Dirección',
      val: <>General Belgrano 252, Piso 1<br />Hospital de Día Sociedad Italiana<br />Campana, Buenos Aires</>,
    },
    {
      ico: <IClock sz={18} />,
      label: 'Horarios',
      val: <>Lunes a Viernes: <strong>08:00 – 20:00 hs</strong><br />Atención médica, retiro de informes y recetas</>,
    },
    {
      ico: <IPhone sz={18} />,
      label: 'Teléfono',
      val: <a href="tel:+543489426123"
              style={{ color: 'var(--red)', fontWeight: 600, textDecoration: 'none' }}>
             (0348) 9 426-123
           </a>,
    },
  ];

  const amenities = [
    'Ascensor apto para sillas de ruedas y camillas',
    'Zona médica protegida con desfibrilador automático',
    'Cambiador de bebés disponible',
  ];

  return (
    <>
      <PageHeader go={go} crumb="Ubicación"
        title="Dónde encontrarnos"
        sub="En el corazón de Campana, dentro del Hospital de Día Sociedad Italiana. Fácil acceso y comodidades pensadas para todos nuestros pacientes." />

      <Sec>
        <div className="split">
          {/* Info column */}
          <div>
            {details.map((it, i) => (
              <div key={i} className="rl" style={{
                display: 'flex', gap: 16, alignItems: 'flex-start',
                paddingBottom: i < 2 ? 28 : 0,
                marginBottom: i < 2 ? 28 : 0,
                borderBottom: i < 2 ? '1px solid var(--bone3)' : 'none',
              }}>
                <div style={{
                  width: 40, height: 40, border: '1px solid var(--bone3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, color: 'var(--red)',
                }}>
                  {it.ico}
                </div>
                <div>
                  <p style={{
                    fontFamily: 'var(--mono)', fontSize: 'var(--t-xs)',
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--muted)', marginBottom: 7,
                  }}>
                    {it.label}
                  </p>
                  <div style={{ fontSize: 'var(--t-base)', color: 'var(--ink2)', lineHeight: 1.6, fontWeight: 400 }}>
                    {it.val}
                  </div>
                </div>
              </div>
            ))}

            {/* Amenities */}
            <div className="r" style={{
              marginTop: 28,
              borderTop: '2px solid var(--red)',
              paddingTop: 24,
            }}>
              <p style={{
                fontFamily: 'var(--mono)', fontSize: 'var(--t-xs)',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--muted)', marginBottom: 20,
              }}>
                Instalaciones
              </p>
              {amenities.map((it, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 10, alignItems: 'flex-start',
                  marginBottom: i < amenities.length - 1 ? 12 : 0,
                  paddingBottom: i < amenities.length - 1 ? 12 : 0,
                  borderBottom: i < amenities.length - 1 ? '1px solid var(--bone3)' : 'none',
                }}>
                  <span style={{ color: 'var(--red)', marginTop: 2, flexShrink: 0 }}>
                    <ICheck sz={12} />
                  </span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 'var(--t-xs)', color: 'var(--muted)', lineHeight: 1.55, letterSpacing: '0.03em' }}>
                    {it}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Btn href="https://wa.me/543489529457" v="wa" sm>
                <IWA sz={13} />Escribir por WhatsApp
              </Btn>
              <Btn onClick={() => { go('turnos'); window.scrollTo(0, 0); }} v="ghost" sm>
                <ICal sz={13} />Pedir turno
              </Btn>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="rr">
            <a href="https://www.google.com/maps/search/Belgrano+252+Campana+Buenos+Aires"
               target="_blank"
               rel="noopener noreferrer"
               className="loc-map">
              <div className="loc-map__pin">
                <IPin sz={22} />
              </div>
              <p style={{ fontWeight: 600, color: 'var(--ink2)', fontSize: 'var(--t-base)', marginBottom: 5 }}>
                General Belgrano 252, Piso 1
              </p>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 'var(--t-xs)', color: 'var(--muted)', marginBottom: 3, letterSpacing: '0.04em' }}>
                Hospital de Día Sociedad Italiana
              </p>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 'var(--t-xs)', color: 'var(--muted)', marginBottom: 24, letterSpacing: '0.04em' }}>
                Campana, Buenos Aires
              </p>
              <Btn v="red" sm cls="loc-map__btn" style={{ pointerEvents: 'none' }}>
                <IPin sz={13} />Ver en Google Maps
              </Btn>
            </a>
          </div>
        </div>
      </Sec>
    </>
  );
}
