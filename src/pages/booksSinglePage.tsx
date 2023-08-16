import BookSlider from "../components/bookSinglePage/bookSlider";
import {useParams} from "react-router-dom";
import BookAuthorInfo from "../components/bookSinglePage/bookAuthorInfo";
import BookReviews from "../components/bookSinglePage/bookReviews";
import SeeAlso from "../components/bookSinglePage/seeAlso";

const BooksSinglePage = () => {
    const { bookId } = useParams<{ bookId: string }>();


    return (
        <>
            <BookSlider  />
            <BookAuthorInfo />
            <BookReviews />
            <SeeAlso />

        </>
    )
}

export default BooksSinglePage