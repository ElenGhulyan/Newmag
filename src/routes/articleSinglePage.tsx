import App from "../App";
import Header from "../components/main/header/header";
import Footer from "../components/main/footer/footer";
import ArticleSinglePage from "../components/productsItem/articles/single";

export default [

    {
        path: "/authors/:articleId",
        element: <><Header/> <ArticleSinglePage /> <Footer /> </>  ,
    },
]