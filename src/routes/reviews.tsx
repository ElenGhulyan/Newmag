import Header from "../components/main/header/header";
import Footer from "../components/main/footer/footer";
import Review from "../components/review/review";
import ReviewSinglePage from "../components/review/single";

export  default [
    {
        path: "/reviews",
        element: <>
            <Header/>
            <Review />
            <Footer/>
        </>  ,
    },
    {
        path: "/reviews/:reviewId",
        element: <><Header/> <ReviewSinglePage  /> <Footer /> </>  ,
    },
    {
        path: "/reviews/:reviewId/:reviewId",
        element: <><Header/> <ReviewSinglePage  /> <Footer /> </>  ,
    },

]