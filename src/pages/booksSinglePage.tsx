import BookSlider from "../components/bookSinglePage/bookSlider";
import {useParams} from "react-router-dom";
import BookAuthorInfo from "../components/bookSinglePage/bookAuthorInfo";
import BookReviews from "../components/bookSinglePage/bookReviews";

const BooksSinglePage = () => {
    const { bookId } = useParams<{ bookId: string }>();

    console.log(bookId)
    return (
        <>
            <BookSlider  />
            <BookAuthorInfo />
            <BookReviews />

        </>
    )
}

export default BooksSinglePage