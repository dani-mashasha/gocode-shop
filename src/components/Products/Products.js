import { ProductsContext } from "../../contexts/ProductsContext.js";
import Product from "../Product/Product";
import { useContext} from "react";
import Loading from "../Loader/Loader.js";
import ProductsBar from "../ProductsBar/ProductsBar.js";

const Products = () =>{
    const {products}= useContext(ProductsContext);

    return(
        <div>
         <ProductsBar/>
        <section className="products">
           {products.length < 1 ? <Loading/> : products.map((prod) => <Product key = {prod.id} {...prod}/>)}
        </section>
        </div>
    )
}

export default Products;