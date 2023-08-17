import Header from "../components/main/header/header";
import Footer from "../components/main/footer/footer";
import ShopingCart from "../pages/shopingCart";
import Cart from "../pages/cart";


export  default [
    {
        path: "/shopingCart",
        element: <>
            <Header/>
            <Cart />
            <Footer/>
        </>  ,
    },
]