import RangeSlider from "./RangeSlider.js";


const Header = (props) =>{
    return(
        <nav className="product-filter">
            <h1>Jackets</h1>
        <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select onChange ={props.handleChange}>
              <option value = "all items">all items</option>
              {props.categories? props.categories.map((c) => <option key={c} value={c}>{c}</option>): <option/>}
          </select>
        </div>

        <div className="collection-sort">
          <label>Price range</label>
          <RangeSlider/>

        </div>
      </div>
        </nav>
    )
}
 export default Header;