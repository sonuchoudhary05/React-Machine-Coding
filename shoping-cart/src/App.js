import './App.css';
import { useEffect, useState } from 'react';
import ProductsList from './components/ProductsList';

function App() {
  //const dispatch = useDispatch()
  const [products, setProducts] = useState([]);
  const fetchProductsData = async() => {
    try{
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
   fetchProductsData();
  }, []);
  return (
    <div className="App">
      <div>
        <ProductsList products = {products} />
      </div>
    </div>
  );
}

export default App;
