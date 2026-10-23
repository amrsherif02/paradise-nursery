import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

import AboutUs from './components/AboutUs';


function Home() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <h2>Bring Nature Into Your Home</h2>

        <p>
          Discover our beautiful collection of houseplants and transform
          your home into a green paradise.
        </p>

        <Link to="/plants" className="get-started-button">
          Get Started
        </Link>

        <AboutUs />
      </div>
    </div>
  );
}

function Cart() {
  return <CartItem />;
}

function App() {
const cartItems = useSelector((state) => state.cart.items);

const totalQuantity = cartItems.reduce(
(total, item) => total + item.quantity,
0
);

return ( <BrowserRouter> <nav className="navbar"> <Link to="/">Home</Link> <Link to="/plants">Plants</Link> <Link to="/cart">Cart 🛒 ({totalQuantity})</Link> </nav>

```
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/plants" element={<ProductList />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
</BrowserRouter>


);
}

export default App;


