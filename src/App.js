import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from './pages/homepage/home';
import ParticleBackground from './components/ParticleBackground';

const About = lazy(() => import('./pages/about/about'));
const Portfolio = lazy(() => import('./pages/portfolio/port'));
const Contact = lazy(() => import('./pages/contact/contact'));
const Resume = lazy(() => import('./pages/resumepage/resume'));

const PageLoader = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
  }}>
    <div className="page-loader">
      <div className="loader-dot"></div>
      <div className="loader-dot"></div>
      <div className="loader-dot"></div>
    </div>
  </div>
);

function App() {
  const location = useLocation();

  return (
    <>
      <ParticleBackground />
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default App;
