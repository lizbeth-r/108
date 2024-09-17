import Product from "../components/Product";
import "./Catalog.css";
import { catalog as Products } from '../services/DataService';

function Catalog(){
    return(
        <div className="catalog">
            <h1>Our amazing catalog</h1>

            {Products.map(prod => (
            <Product data={prod}></Product>
            ))}

        </div>
    );
}

export default Catalog;