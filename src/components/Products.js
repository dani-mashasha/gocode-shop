import { ProductsContext } from "./ProductsContext.js";
import Product from "./Product";
import { useContext } from "react";

const Products = () =>{
    const [products, setProducts]= useContext(ProductsContext);
    
    return(
        <section className="products">
           {products.map((prod) => <Product key = {prod.id} {...prod}/>)}
        </section>
    )
}

export default Products;