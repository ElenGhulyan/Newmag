import {BooksData} from "../../mockData/BookData/booksData";
import {useParams} from "react-router-dom";
import {ArticlesData} from "../../mockData/articlesData/articlesData";
import {useState} from "react";

const ReviewSinglePage = () => {
    // const {reviewId} = useParams<{ reviewId: any }>();
    // const booksData = BooksData.find((item:any) => {
    //     return item.id == reviewId;
    // })

    return (
        <div className='content'>


                <div>
                    <h1 className='my-[60px] text-black text-3xl leading-[44px] pb-[60px] border-b border-[#979797]'></h1>

                    <p>text </p>



                </div>




        </div>
    )
}

export default ReviewSinglePage