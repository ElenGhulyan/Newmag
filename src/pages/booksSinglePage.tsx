import BookSlider from "../components/bookSinglePage/bookSlider";
import {useParams} from "react-router-dom";

const BooksSinglePage = () => {
    const { bookId } = useParams<{ bookId: string }>();

    console.log(bookId)
    return (
        <>
            <BookSlider  />

        </>
    )
}

export default BooksSinglePage