import Header from './components/Header';
import Products from './components/Products';
import { useEffect, useState } from 'react';
import './App.css';
import { CartProvider } from './components/CartContext.js';
import Cart from './components/Cart';

import { ProductsContext } from './components/ProductsContext.js';
import {useContext} from 'react';



function App() {

  const groupBy = (xs, key) => xs.reduce((rv, x) => {
    (rv[x[key]] = true || []);
    return rv;
  }, {});


  const handleChange = (e) =>{
     e.target.value === "all items"? setProducts(productsOrigin):setProducts(productsOrigin.filter((p)=>p.category === e.target.value))
  };
  
  const [categories, setCategories] = useState();
  const [products, setProducts, productsOrigin, setproductsOrigin] = useContext(ProductsContext);
  console.log(productsOrigin)

 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
      .then(data =>{
        setProducts(data);
        setproductsOrigin(data);
        setCategories(Object.keys(groupBy(data, 'category')));
         });
  },[]);

  return (
    <CartProvider>
    <div className="App">
      <Header categories = {categories} handleChange = {handleChange} />
      <Cart/>
      <Products/>
    </div>
    </CartProvider>
  );
}

export default App;
