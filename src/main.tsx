import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main>
      <p className="eyebrow">PACKAGE STUDIO / DEVELOPMENT</p>
      <h1>A foundation for<br />packaging design.</h1>
      <p className="intro">The web environment is ready. This starter will grow into a workspace for structural design, artwork and 3D packaging previews.</p>
      <section aria-label="Planned workspace modules">
        <article><span>01</span><h2>Structure</h2><p>Dimensions, materials and shared geometry.</p></article>
        <article><span>02</span><h2>Design</h2><p>Panel artwork and a vector dieline workspace.</p></article>
        <article><span>03</span><h2>Preview</h2><p>Folded views, camera controls and folding.</p></article>
      </section>
      <footer>Development starter · Editor features are planned.</footer>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
