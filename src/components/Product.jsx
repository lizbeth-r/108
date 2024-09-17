import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props){
    function add(){
        console.log('adding to cart');
    }
    return(
        <div className="product">
            <img src="https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw854cc9be/images/product/0000000004220_A.jpg?sw=445&sh=445&sm=fit" alt=""></img>
            <h4>{props.title}</h4>
            <label>${props.price}</label>

            <QuantityPicker></QuantityPicker>

            <button className="btn btn-sm btn-primary" onClick={add}>Add</button>
        </div>
    );
}

export default Product;