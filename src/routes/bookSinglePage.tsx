import App from "../App";
import Header from "../components/main/header/header";
import Footer from "../components/main/footer/footer";
import BooksSinglePage from "../pages/booksSinglePage";

export default [

    {
        path: "/books/:bookId",
        element: <><Header/> <BooksSinglePage /> <Footer /> </>  ,
    },
]