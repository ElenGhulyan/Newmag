import Header from "../components/main/header/header";
import Footer from "../components/main/footer/footer";
import HomePage from "../pages/homePage";
import AboutUsPage from "../pages/aboutUsPage";

export  default [
    {
        path: "/about_us",
        element: <>
            <Header/>
           <AboutUsPage/>
            <Footer/>
        </>  ,
    },
]