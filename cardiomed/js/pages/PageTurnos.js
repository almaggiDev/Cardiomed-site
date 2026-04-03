// js/pages/PageTurnos.js
function PageTurnos({ go }) {
  useReveal();

  const channels = [
    {
      ico: <ICal sz={22} />,
      title: 'Turnos Online',
      desc: 'Disponible las 24hs. Elegí especialidad, médico, día y horario sin intermediarios.',
      cta: 'Ir al sistema de turnos',
      href: 'https://cardiomed.online/turnos#95aa89e6-26ac-4bd9-a4cb-751c2059c741',
      v: 'red',
    },
    {
      ico: <IWA sz={22} />,
      title: 'WhatsApp',
      desc: 'Escribinos y coordinamos. Respuesta rápida en horario de atención médica.',
      cta: 'Escribir ahora',
      href: 'https://wa.me/5493489529457',
      v: 'wa',
    },
  ];

  const tips = [
    'Para Ergometría: ropa cómoda y zapatillas deportivas',
    'Para Holter: no usar crema en el pecho el día del estudio',
    'Traer estudios anteriores si los tenés disponibles',
    'Llegar 10 minutos antes del horario del turno',
    'Las coberturas pueden variar por profesional — consultá antes',
  ];

  return (
    <>
      <PageHeader go={go} crumb="Turnos"
        title="Reservar un turno"
        sub="Sistema de turnos online disponible las 24 horas. También por WhatsApp o teléfono en horario de atención." />

      <Sec>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          {/* Channel tiles */}
          <div className="trn-grid r">
            {channels.map((ch, i) => (
              <div key={i} className="trn-tile">
                <div style={{ color: 'var(--red)', marginBottom: 16 }}>{ch.ico}</div>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 'var(--t-lg)', color: 'var(--ink2)', marginBottom: 8, fontWeight: 400, lineHeight: 1.2 }}>
                  {ch.title}
                </p>
                <p style={{ fontFamily: 'var(--mono)', fontSize: 'var(--t-xs)', color: 'var(--muted)', lineHeight: 1.65, marginBottom: 24, letterSpacing: '0.03em' }}>
                  {ch.desc}
                </p>
                <Btn href={ch.href} v={ch.v} sm>
                  {ch.cta} <IArrow sz={13} />
                </Btn>
              </div>
            ))}
          </div>

          {/* Phone strip */}
          <div className="r" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 16,
            border: '1px solid var(--bone3)',
            padding: '18px 24px',
            background: 'var(--paper)',
            marginBottom: 40,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 38, height: 38, border: '1px solid var(--bone3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--red)', flexShrink: 0,
              }}>
                <IPhone sz={17} />
              </div>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--ink2)', marginBottom: 2, fontSize: 'var(--t-sm)' }}>
                  Por teléfono
                </p>
                <p style={{ fontFamily: 'var(--mono)', fontSize: 'var(--t-xs)', color: 'var(--muted)', letterSpacing: '0.04em' }}>
                  Lunes a Viernes de 8:00 a 20:00 hs
                </p>
              </div>
            </div>
            <Btn href="tel:+543489426123" v="ghost" sm>
              <IPhone sz={13} />(0348) 9 426-123
            </Btn>
          </div>

          {/* Tips */}
          <div className="r" style={{ borderTop: '2px solid var(--red)', paddingTop: 28 }}>
            <p style={{
              fontFamily: 'var(--mono)', fontSize: 'var(--t-xs)',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--muted)', marginBottom: 20,
            }}>
              Antes de tu turno
            </p>
            {tips.map((tip, i) => (
              <div key={i} style={{
                display: 'flex', gap: 10, alignItems: 'flex-start',
                marginBottom: i < tips.length - 1 ? 14 : 0,
                paddingBottom: i < tips.length - 1 ? 14 : 0,
                borderBottom: i < tips.length - 1 ? '1px solid var(--bone3)' : 'none',
              }}>
                <span style={{ color: 'var(--red)', flexShrink: 0, marginTop: 2 }}>
                  <ICheck sz={12} />
                </span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 'var(--t-xs)', color: 'var(--muted)', lineHeight: 1.55, letterSpacing: '0.03em' }}>
                  {tip}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Sec>
    </>
  );
}
