// js/App.js

const PAGES = {
  inicio:        PageInicio,
  servicios:     PageInicio,       // Same content as inicio for now
  circuitos:     PageCircuitos,
  estudios:      PageEstudios,
  profesionales: PageProfesionales,
  coberturas:    PageCoberturas,
  ubicacion:     PageUbicacion,
  turnos:        PageTurnos,
};

function App() {
  const [page, setPage] = React.useState('inicio');

  const go = React.useCallback(id => {
    setPage(id);
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  }, []);

  const Page = PAGES[page] || PAGES.inicio;

  return (
    <>
      <Navbar page={page} go={go} />
      <main style={{ minHeight: '100dvh' }}>
        <Page go={go} />
      </main>
      <Footer go={go} />
      <WAFloat />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
