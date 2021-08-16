import { Link } from "react-router-dom";
import TemporaryDrawer from "../CartDrawer/CartDrawer.js";

const Header = (props) =>{
    return(
        <nav className="product-filter">
          {/* <PrimarySearchAppBar/> */}
          <h1><Link to="/">Go-Code-Shop</Link>  </h1>
          <TemporaryDrawer/>
        </nav>
    )
}
 export default Header;