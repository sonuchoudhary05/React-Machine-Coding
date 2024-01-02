import { CartState } from "../Context/context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import "./style.css";
function Home(){
    const {state: {products}} = CartState();
    return (
        <div className="home">
            <Filters />
            <div className="productContainer">
                {products.map((product) => {
                   return <SingleProduct product = {product} key = {product.id} />
                })}
            </div>
        </div>
    )
}

export default Home;