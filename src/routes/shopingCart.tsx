import Header from "../components/main/header/header";
import Footer from "../components/main/footer/footer";
import ShopingCart from "../pages/shopingCart";


export  default [
    {
        path: "/shopingCart",
        element: <>
            <Header/>
            <ShopingCart />
            <Footer/>
        </>  ,
    },
]