import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext.js";


const Product = (props) =>{
    const {addToCart} = useContext(CartContext);   
    return(
       <div className="product-card">
            <div className="product-image">
            <Link to={`/product/${props.id}`}><img src={props.image} alt="item"/></Link>
        </div>
        <div className="product-info">
            <h5>{props.title}</h5>
            <h6>${props.price}</h6>
            <button onClick = {addToCart} value = {props.id} >add to cart</button>
        </div>
    </div>
    )
}

export default Product;