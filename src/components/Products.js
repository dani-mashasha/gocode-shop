import Product from "./Product";

const Products = (props) =>{
    return(
        <section className="products">
           {props.ProductsList.map((prod) => <Product key = {prod.id} {...prod}/>)}
        </section>
    )
}

export default Products;