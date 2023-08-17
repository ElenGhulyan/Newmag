import BookSectionImg from "../../assets/images/book-section-img.png";
import {Link, useParams} from "react-router-dom";
import {BooksData} from "../../mockData/BookData/booksData";
import {ArticlesData} from "../../mockData/articlesData/articlesData";
import {useRef, useState} from "react";
import ShopingCart from "../../pages/shopingCart";



const BookItem = ({ item }: { item: any }) => {

    const { articleId } = useParams<{ articleId: any }>();
    const bookData = BooksData.find((bookItem: any) => {
        return bookItem.id == articleId;
    });

    const addToCart = () => {

        let existingCartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        const isItemInCart = existingCartItems.find((cartItem:any) => cartItem.id === item.id);

        let updatedCart;
        if (isItemInCart) {
            updatedCart = existingCartItems.map((existingItem:any) => {
                if(existingItem.id == item.id) {
                    return {
                        id: existingItem.id,
                        title: existingItem.title,
                        image: existingItem.image,
                        count: existingItem.count+=1,
                        price: existingItem.price
                    }
                }
                return existingItem;
            })
        } else {
            updatedCart = [...existingCartItems, {
                id: item.id,
                title: item.title,
                image: item.src,
                count: 1,
                price: item.price
            }];
        }

        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };


    return (
        <>
            <div className='px-[20px] py-[30px] border  rounded-[10px] bg-white shadow'>
                <div className='w-full max-w-[140px] h-[200px] m-auto'>
                    <Link to={`/books/${item.id}`}  >
                        <img  src={BookSectionImg}  alt="" className='w-full h-full'/>
                    </Link>
                </div>
                <div className='mt-[30px]'>
                    <h2 className='text-base font-bold text-black '>{item.title} </h2>
                    <p className='text-xs font-normal text-[#4C4C4C] my-[8px]'>{item.shortDesc}</p>
                    <span className='text-[#F34802] text-lg font-bold'>{item.price}</span>
                </div>
                <div className='flex gap-[10px] mt-[15px]'>
                    <a href="#" className='py-[11px] px-[27px] text-black text-center text-sm font-semibold border border-black rounded-[10px]'>Դիտել</a>
                    {item.count ?
                        <button className='bg-black py-[9px] px-[9px] rounded-[10px] w-full max-w-[42px] h-[42px]'
                                onClick={addToCart}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10.125 21.75C9.82663 21.75 9.54048 21.6315 9.3295 21.4205C9.11853 21.2095 9 20.9234 9 20.625C9 20.3266 9.11853 20.0405 9.3295 19.8295C9.54048 19.6185 9.82663 19.5 10.125 19.5C10.4234 19.5 10.7095 19.6185 10.9205 19.8295C11.1315 20.0405 11.25 20.3266 11.25 20.625C11.25 20.9234 11.1315 21.2095 10.9205 21.4205C10.7095 21.6315 10.4234 21.75 10.125 21.75ZM17.625 21.75C17.3266 21.75 17.0405 21.6315 16.8295 21.4205C16.6185 21.2095 16.5 20.9234 16.5 20.625C16.5 20.3266 16.6185 20.0405 16.8295 19.8295C17.0405 19.6185 17.3266 19.5 17.625 19.5C17.9234 19.5 18.2095 19.6185 18.4205 19.8295C18.6315 20.0405 18.75 20.3266 18.75 20.625C18.75 20.9234 18.6315 21.2095 18.4205 21.4205C18.2095 21.6315 17.9234 21.75 17.625 21.75ZM2.25 3C2.05109 3 1.86032 2.92098 1.71967 2.78033C1.57902 2.63968 1.5 2.44891 1.5 2.25C1.5 2.05109 1.57902 1.86032 1.71967 1.71967C1.86032 1.57902 2.05109 1.5 2.25 1.5H6C6.17332 1.5001 6.34125 1.56023 6.47525 1.67017C6.60924 1.7801 6.70103 1.93304 6.735 2.103L7.515 6H21.75C21.8619 5.99997 21.9724 6.02496 22.0733 6.07316C22.1743 6.12136 22.2632 6.19153 22.3335 6.27854C22.4038 6.36556 22.4538 6.4672 22.4798 6.57603C22.5057 6.68486 22.507 6.79811 22.4835 6.9075L20.2335 17.4075C20.1975 17.5753 20.105 17.7256 19.9715 17.8334C19.838 17.9413 19.6716 18.0001 19.5 18H9C8.82668 17.9999 8.65875 17.9398 8.52475 17.8298C8.39076 17.7199 8.29897 17.567 8.265 17.397L5.385 3H2.25ZM9.615 16.5H18.894L20.823 7.5H7.815L9.615 16.5Z" fill="white" stroke="white" stroke-width="0.3"/>
                    </svg>
                    </button> : <button className='bg-black py-[11px] px-[21px] text-white text-sm font-normal rounded-[10px]'>Առկա չէ</button>}
                </div>
            </div>
        </>
    )
}



export default BookItem