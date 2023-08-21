import {BooksData} from "../../mockData/BookData/booksData";
import {useParams} from "react-router-dom";
import {ArticlesData} from "../../mockData/articlesData/articlesData";

const ReviewSinglePage = () => {
    const {reviewId} = useParams<{ reviewId: any }>();
    const booksData = BooksData.find((item:any) => {
        return item.id == reviewId;
    })
    return (
        <>
            {booksData && (

                <div>
                    <h1>{booksData.title}</h1>

                </div>
            )}



        </>
    )
}

export default ReviewSinglePage