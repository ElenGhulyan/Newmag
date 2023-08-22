import {BooksData} from "../../mockData/BookData/booksData";
import {useParams} from "react-router-dom";
import {ArticlesData} from "../../mockData/articlesData/articlesData";
import {useState} from "react";

const BookReviewsPage = () => {
    const {bookId} = useParams<{ bookId: any }>();
    const bookReviews = BooksData.find((item:any) => {
        return item.id == bookId;
    })

    return (
        <div className='content'>


            <div>
                <h1 className='my-[60px] text-black text-3xl leading-[44px] pb-[60px] border-b border-[#979797]'></h1>
                <span>Book Reviews</span>
                <p>{bookReviews && bookReviews.title} </p>



            </div>




        </div>
    )
}

export default BookReviewsPage