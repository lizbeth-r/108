import Product from "../components/Product";
import "./Catalog.css";

function Catalog(){
    return(
        <div className="catalog">
            <h1>Our amazing catalog</h1>

            <Product title="first prod" price="12.34"></Product>
            <Product title="second prod" price="56.43"></Product>
            <Product title="something" price="11.45"></Product>
            <Product title="red blue" price="44.24"></Product>
            <Product title="keyboard" price="33.34"></Product>

        </div>
    );
}

export default Catalog;