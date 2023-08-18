import ShopingCart from "../components/payment/shopingCart";
import {useState} from "react";
import PaymentDetails from "../components/payment/paymentDetails";
import PaymentSystem from "../components/payment/paymentSystem";

const Cart = () => {
    const [cartItems, setCartItems] = useState<any[]>([]);


    return (
        <div className='content'>
            <h1 className='text-black text-3xl font_semibold mb-[60px]'>Զամբյուղ</h1>

            <div className='flex gap-[100px]'>
                <div className=''>
                    <ShopingCart cartItems={cartItems} />
                    <PaymentDetails />
                </div>
                <PaymentSystem />

            </div>


        </div>
    )
}

export default Cart