// js/hooks/useScroll.js
function useScroll() {
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    const fn = () => setY(window.scrollY);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return y;
}
