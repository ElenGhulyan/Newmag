import App from "../App";
import Header from "../components/main/header/header";
import BooksPage from "../pages/booksPage";
import Footer from "../components/main/footer/footer";
import BooksSinglePage from "../pages/booksSinglePage";

export default [

    {
        path: "/books",
        element: <><Header/> <BooksPage />  <Footer /> </>  ,
    },
]