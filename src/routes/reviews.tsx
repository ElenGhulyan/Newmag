import Header from "../components/main/header/header";
import Footer from "../components/main/footer/footer";
import Review from "../components/review/review";
import ReviewSinglePage from "../components/review/single";
import BookReviewsPage from "../components/review/bookReviews";

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
        path: "/reviews/:bookId",
        element: <><Header/> <BookReviewsPage  /> <Footer /> </>  ,
    },
    {
        path: "/reviews/:bookId/:reviewId",
        element: <><Header/> <ReviewSinglePage  /> <Footer /> </>  ,
    },

]