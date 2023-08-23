import { BooksData } from "../../mockData/BookData/booksData";
import { useParams } from "react-router-dom";
import { useState } from "react";

import parse from 'html-react-parser';
import ReviewSubItem from "../productsItem/reviewSubItem";

const ReviewSinglePage = () => {
    const { reviewId, bookId } = useParams<{ reviewId: any, bookId: any }>();

    const book = BooksData.find((item: any) => {
        return item.id == bookId;
    })

    const review = (book && book.reviews) ? book.reviews.find((item: any) => {
        return item.id == reviewId
    }) : undefined;

    console.log(review)

    return (
        <div className='px-[460px]'>
            <div className='mb-[60px]'>
                <h1 className='my-[60px] text-black text-3xl leading-[44px] pb-[60px] border-b border-[#979797]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, totam?</h1>
                <p>{book && book.title}</p>
                <h2>{review && review.description && parse(review.description)}</h2>
            </div>



            {book &&(
                <div className=' flex w-full gap-[60px] rounded-[20px] bg-[#F1F6F9] py-[60px] px-[60px]'>
                    <div className='w-full max-w-[332px] h-[540px]'>
                        <img src={ book.images[0]} alt="" className='w-full h-full'/>
                    </div>
                    <div className='w-full max-w-[486px]'>
                        <h2 className='text-2xl font-extrabold text-black'>{book.title}</h2>
                        <p className='mt-[15px] text-[#4C4C4C] text-lg font-normal'>{book.author && book.author.name}</p>

                        <p className='mt-[30px] text-xl font_semibold'>Նկարագրություն</p>
                        <p className='mt-[20px] text-base font-normal'>{book.description}</p>

                        <div className='mt-[40px] flex gap-[40px]'>
                            <h3 className='text-[#F34802] font-bold text-3xl '>{book.price} ֏</h3>
                            <button className=' rounded-[10px] border border-black py-[10px] w-full max-w-[232px] text-center text-base font-medium'>Դիտել</button>
                        </div>
                    </div>



                </div>


            )}
            <h2 className='mt-[100px] mb-[60px] font-semibold text-[28px] text-black'>Այլ կարծիքներ </h2>

            { book && (

                <div className='px-[40px] py-[40px] bg-[#F1F6F9] rounded-[20px] mb-[100px]'>
                    <div>
                        { book.reviews && book.reviews.map( (item:any) => {
                            return (
                                <ReviewSubItem item={item} />
                            )
                        })}
                    </div>
                </div>
            )}



        </div>
    )
}

export default ReviewSinglePage;