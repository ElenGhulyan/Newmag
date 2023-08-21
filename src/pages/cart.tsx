import React, {useState} from 'react';
import ShopingCart from '../components/payment/shopingCart';
import PaymentSystem from '../components/payment/paymentSystem';
import {CheckoutProvider} from '../components/validation/CheckoutContext';
import PaymentDetails from "../components/payment/paymentDetails";

const Cart = () => {
    const [cartItems, setCartItems] = useState<any[]>([]);

    return (
        <CheckoutProvider>
            <div className='content'>
                <h1 className='text-black text-3xl font_semibold mb-[60px]'>Զամբյուղ</h1>
                <div className='flex gap-[100px]'>
                    <div>
                        <div>
                            <ShopingCart cartItems={cartItems}/>
                            <PaymentDetails/>
                        </div>

                    </div>
                    <PaymentSystem/>
                </div>
            </div>
        </CheckoutProvider>
    );
};

export default Cart;
