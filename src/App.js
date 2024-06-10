import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/home';
import About from './pages/about/about';
import Portfolio from './pages/portfolio/port';
import Contact from './pages/contact/contact';
import Resume from './pages/resumepage/resume';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
