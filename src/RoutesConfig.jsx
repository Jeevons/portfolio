import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Hobbies from './pages/hobbies/Hobbies';
import Biographie from './pages/biographie/Biographie';
import Astronomie from './pages/astronomie/Astronomie';
import Contact from './pages/contact/Contact';
import Projets from './pages/projets/Projets';
import Programming from './pages/programming/Programming';
import Design from './pages/design/Design';
import Privacy from './pages/privacy/Privacy'

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programming" element={<Programming />} />
      <Route path="/astronomie" element={<Astronomie />} />
      <Route path="/design" element={<Design />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/projets" element={<Projets />} />
      <Route path="/biographie" element={<Biographie />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
};

export default RoutesConfig;