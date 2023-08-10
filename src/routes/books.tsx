import App from "../App";
import Header from "../components/main/header/header";
import BooksPage from "../pages/booksPage";

export default [

    {
        path: "/books",
        element: <><Header/> <BooksPage /> </>  ,
    },
]