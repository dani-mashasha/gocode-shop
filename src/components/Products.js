import Product from "./Product";

const Products = (props) =>{
    return(
        <section className="products">
           {props.products.map((prod) => <Product key = {prod.id} {...prod}/>)}
        </section>
    )
}

export default Products;