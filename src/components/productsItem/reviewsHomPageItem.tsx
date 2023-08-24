import {MediaSharingData} from "../../mockData/HomeData/mediaSharingData";
import reviewsImg from '../../assets/images/reviews-img.png'
import {ReviewsData} from '../../mockData/HomeData/reviewsData'
import {Link, useParams} from "react-router-dom";
import {BooksData} from "../../mockData/BookData/booksData";
import ReviewSubItem from "./reviewSubItem";

const ReviewsHomePageItem = ({item}:{item:any}) => {
    console.log(item)

    return (
        <>

            <div className=' w-full max-w-[517px]'>

                <div className='flex gap-[40px] items-center mb-[40px] 3xl:gap-[20px]'>
                    <div className='w-full max-w-[148px] h-[224px] '>
                        <img src={item.src} alt="" className='w-full h-full object-cover rounded-[10px]'/>
                    </div>
                    <div>
                        <h3 className='text-lg font-medium text-black leading-[30px] xl:text-[16px]'>{item.desc}</h3>
                        <p className='text-base font-semibold leading-[26px] mt-[20px] mb-[10px] xl:text-[14px]'>{ item.author}</p>
                        <span className='text-base text-[#4C4C4C] xl:text-[14px]'>{item.data}</span>
                    </div>
                </div>

            </div>

        </>

    )
}
export  default ReviewsHomePageItem