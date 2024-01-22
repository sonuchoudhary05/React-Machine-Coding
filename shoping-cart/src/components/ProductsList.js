import { useSelector,useDispatch } from "react-redux"
import Cart from "./Cart";
import { addProductToCart,removeProductFromCart } from "../redux";
import "./ProductsList.css";
const ProductsList = ({products}) => {
    const dispatch = useDispatch();
    console.log("Products is :", products)
    return (
       <div className="main">
        <div className="products-list">
        {
            products.map((product) => {
                return (
                    <div>
                        <div className="products">
                        <img src = {product.thumbnail} alt = {product.title} style = {{height : "100", width : "100"}} />
                        <div className="product-info">
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                        </div>
                        </div>
                        <div className="btn-design">
                        <button
                        onClick = {() => dispatch(addProductToCart(product))}
                         >+</button>
                        <button
                         onClick = {() => dispatch(removeProductFromCart(product))}
                         >-</button>
                        </div>
                    </div>
                )
            })
        }
       </div>
       <div className="cart-design">
       <Cart />
       </div>
       </div>
    )
}

export default ProductsList