import App from "../App";
import Header from "../components/main/header/header";
import Footer from "../components/main/footer/footer";
import AuthorSinglePage from "../pages/authorSinglePage";

export default [

    {
        path: "/articles/:authorId",
        element: <><Header/> <AuthorSinglePage /> <Footer /> </>  ,
    },
]