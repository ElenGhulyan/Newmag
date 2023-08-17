import {useEffect, useState} from "react";

interface ShoppingCartProps {
    cartItems: {
        id: number,
        title: string,
        image: string,
        price: number,
        count: number
    }[];
}

const ShopingCart: React.FC<ShoppingCartProps> = () => {
    const [cartItems, setCartItems] = useState<any>(
        JSON.parse(localStorage.getItem("cart") || "[]")
    );
    const clearCart = () => {
        localStorage.removeItem("cartItems");
        setCartItems([]);
    };


    console.log(cartItems)
    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.map((item:any) => (
                <div key={item.id}>{item.title} {item.price} {item.count}</div>
            ))}

            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};
export default ShopingCart