import { useSelector } from "react-redux";
import "./ProductsList.css";
import { useEffect, useState } from "react";

const Cart = () => {
    const cart = useSelector((state) => state.shoping.cart);
    const [subtotal,setSubTotal] = useState(0);
    console.log("Cart is :",cart);
    useEffect(() => {
        setSubTotal(() => cart.reduce((acc,curr) => acc+ Number(curr.price)*curr.qty,0))
    },[cart])
    return (
        <div>
            <p>{subtotal}</p>
            {
                cart.length > 0 ? (
                   cart.map((c) => {
                    return (
                        <div className="products">
                        <img src = {c.thumbnail} alt = {c.title} style = {{height : "100", width : "100"}} />
                        <div className="product-info">
                            <p>{c.title}</p>
                            <p>{c.price}</p>
                        </div>
                        </div>
                    )
                   })
                ):(
                    <p>Cart is Empty</p>
                )
            }
        </div>
    )
}
export default Cart;