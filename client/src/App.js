import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Products } from './pages/indexPages';
import { Navbar, Footer } from './Sections/indexSecton'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
