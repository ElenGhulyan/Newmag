import {BooksData} from "../../mockData/BookData/booksData";
import {useParams} from "react-router-dom";
import {useState} from "react";
import parse from 'html-react-parser';

const ReviewSinglePage = () => {
    const {reviewId, bookId} = useParams<{ reviewId: any , bookId: any}>();



    const book = BooksData.find((item:any) => {
        return item.id == bookId;
    })

    const review = (book && book.reviews) ? book.reviews.find((item:any) =>{
        return item.id == reviewId
    }) : false;



    return (
        <div className='content'>


                <div>
                    <h1 className='my-[60px] text-black text-3xl leading-[44px] pb-[60px] border-b border-[#979797]'></h1>

                    <p>{book && book.title} </p>

                    <h2>{review && review.description}</h2>



                </div>




        </div>
    )
}

export default ReviewSinglePage