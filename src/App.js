import Header from './components/Header';
import Products from './components/Products';
import { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loading';




function App() {
  

  const groupBy = (xs, key) => xs.reduce((rv, x) => {
    (rv[x[key]] = true || []);
    return rv;
  }, {});


  const handleChange = (e) =>{
     e.target.value === "all items"? setProducts(productsOrigin):setProducts(productsOrigin.filter((p)=>p.category === e.target.value))
  };
  
  const [productsOrigin, setproductsOrigin] = useState();
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState()


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
      .then(data =>{setProducts(data);
        setproductsOrigin(data);
         setCategories(Object.keys(groupBy(data, 'category')));
         });
  },[])
  

  return (
    <div className="App">
      <Header categories = {categories} handleChange = {handleChange}/>
      {products?<Products products = {products}/>:<Loading/> }
    </div>
  );
}

export default App;
