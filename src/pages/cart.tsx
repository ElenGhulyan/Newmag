import ShopingCart from "./shopingCart";
import {useState} from "react";

const Cart = () => {
    const [cartItems, setCartItems] = useState<any[]>([]);
    return (
        <>
            <ShopingCart cartItems={cartItems} />

        </>
    )
}

export default Cart