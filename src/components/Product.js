import { useContext } from "react";
import { CartContext } from "./CartContext.js";


const Product = (props) =>{
    const [cart, setCart] = useContext(CartContext);   
    const  addToCart = () => {
        const newproduct = props;
        setCart(curr => [...curr, newproduct]);

    };

    return(
       <div className="product-card">
            <div className="product-image">
            <img src={props.image} alt="item"/>
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