import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props){
    function add(){
        console.log('adding to cart');
    }
    return(
        <div className="product">
            <img src={props.data.image} alt=""></img>
            <h4>{props.data.title}</h4>
            <label>${props.data.price}</label>

            <div className="qt">
                <QuantityPicker></QuantityPicker>
                <button className="btn btn-custom" onClick={add}>Add</button>
            </div>
            
        </div>
    );
}

export default Product;