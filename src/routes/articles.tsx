import Header from "../components/main/header/header";
import Footer from "../components/main/footer/footer";
import Articles from "../pages/articles";
import ArticleSinglePage from "../components/productsItem/articles/single";

export  default [
    {
        path: "/articles",
        element: <>
            <Header/>
            <Articles />
            <Footer/>
        </>  ,
    },
    {
        path: "/articles/:articleId",
        element: <><Header/> <ArticleSinglePage /> <Footer /> </>  ,
    },
]