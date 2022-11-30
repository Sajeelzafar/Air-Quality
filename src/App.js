import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import City from './Components/City';
import Home from './Components/Home';
import Navbars from './Components/Navbars';
import Pollution from './Components/Pollution';
import Search from './Components/Search';



function App() {
  return (
    <Router>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city" element={<City />} />
        <Route path="/pollutiondata" element={<Pollution />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
