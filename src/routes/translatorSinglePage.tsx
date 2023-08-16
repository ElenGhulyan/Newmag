import App from "../App";
import Header from "../components/main/header/header";
import Footer from "../components/main/footer/footer";
import TranslatorSinglePage from "../pages/translatorSinglePage";
// import AuthorSinglePage from "../pages/authorSinglePage";

export default [

    {
        path: "/translators/:translatorId",
        element: <><Header/> <TranslatorSinglePage /> <Footer /> </>  ,
    },
]