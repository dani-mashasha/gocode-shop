
const Product = (props) =>{
    return(
       <div className="product-card">
            <div className="product-image">
            <img src={props.image} alt="item"/>
        </div>
        <div className="product-info">
            <h5>{props.title}</h5>
            <h6>${props.price}</h6>
        </div>
    </div>
    )
}

export default Product;