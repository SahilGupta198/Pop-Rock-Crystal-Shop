import './App.css';
import Navbar from './components/Navbar';
import HeroSec from './components/HeroSec';
import Products from './components/Products';
import Price from './components/Price';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full h-full font-product">
      <Navbar />
      <HeroSec />
      <Products />
      <Price />
      <Footer />

    </div>
  );
}

export default App;
