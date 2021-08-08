import Header from './components/Header';
import Products from './components/Products';
import ProductsList from "./components/ProductList";
import { useState } from 'react';
import './App.css';


function App() {
  const groupBy = (xs, key) => xs.reduce((rv, x) => {
    (rv[x[key]] = true || []);
    return rv;
  }, {});

  const categories = Object.keys(groupBy(ProductsList, 'category'));

  const [category, setCategory] = useState({category: "all items"});

  const handleChange = (e) =>{
    setCategory({category: e.target.value})
  };
  
  
  return (
    <div className="App">
      <Header categories = {categories} handleChange = {handleChange}/>
      <Products ProductsList = {category.category !== "all items"? ProductsList.filter((p)=>p.category === category.category): ProductsList}/>
    </div>
  );
}

export default App;
