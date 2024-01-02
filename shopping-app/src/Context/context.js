import { createContext, useContext, useReducer } from "react";
import * as faker from 'faker';
import { cartReducer } from "./Reducer";


const CartConext = createContext();
const CartProvider = ({children}) => {
    const products = [...Array(20)].map(() =>({
        userId: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery: faker.datatype.boolean(),
        ratings : faker.random.arrayElement([1,2,3,4,5]),
    }))
    const [state,dispatch] = useReducer(cartReducer, {
        products : products,
        cart : []
    })
    return <CartConext.Provider value = {{state,dispatch}}>
        {children}
    </CartConext.Provider>
}

export default CartProvider;

export const CartState = () => {
    return useContext(CartConext);
}