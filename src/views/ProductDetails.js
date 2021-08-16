import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header.js";
import Loading from "../components/Loader/Loader.js";


function ProductDetails() {
    const [product, setProduct] = useState();
    const [loader, setLoader] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
          .then(data =>{
            setProduct(data);
            setLoader(false)
             });
      });


    return(
    <>
    <Header/>
     {loader? <Loading/> :
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt="item"/>
            </div>
            <div className="product-info">
                <h5>{product.title}</h5>
                <h6>${product.price}</h6>
                <button  value = {product.id} >add to cart</button>
            </div>
        </div>
     }
     </>
   
           
        
    )
}

export default ProductDetails;