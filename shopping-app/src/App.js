import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/cart" element = {<Cart />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
