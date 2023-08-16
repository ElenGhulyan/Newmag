import Header from "../components/main/header/header";
import Footer from "../components/main/footer/footer";
import Articles from "../pages/articles";

export  default [
    {
        path: "/articles",
        element: <>
            <Header/>
            <Articles />
            <Footer/>
        </>  ,
    },
]