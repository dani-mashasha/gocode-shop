import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
    const [productsOrigin, setproductsOrigin] = useState([]);
    const [products, setProducts] = useState([]);

    return(
        <ProductsContext.Provider value={[products, setProducts, productsOrigin, setproductsOrigin]}>
            {props.children}
        </ProductsContext.Provider>
    )

};