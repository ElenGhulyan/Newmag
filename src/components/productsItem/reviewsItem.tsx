import {MediaSharingData} from "../../mockData/HomeData/mediaSharingData";
import reviewsImg from '../../assets/images/reviews-img.png'
import {ReviewsData} from '../../mockData/HomeData/reviewsData'
import {Link, useParams} from "react-router-dom";
import {BooksData} from "../../mockData/BookData/booksData";
import ReviewSubItem from "./reviewSubItem";

const ReviewsItem = ({item}:{item:any}) => {
   
    return (
        <>

                        <div className='border border-[#D8DFE9] py-[40px] px-[40px] rounded-[20px]'>

                            <div className='flex gap-[40px] items-center mb-[40px]'>
                                <div className='w-full max-w-[100px] h-[163px]'>
                                    <img src={item.src} alt="" className='w-full'/>
                                </div>
                                <div>
                                    <h3 className='text-2xl font-extrabold'>{item.title}</h3>
                                    <p>{item.author && item.author.name}</p>
                                </div>
                            </div>


                            {item.reviews && item.reviews.map( (item:any) => {
                                return (
                                  /*  <div className='flex gap-[14px] mb-[35px]'>

                                        <Link to={`/reviews/${item.id}/${item.id}`}>
                                            <div>
                                                <img src={review.avatar} alt=""/>
                                            </div>
                                        </Link>
                                        <div>
                                            <h4 className='text-base text-black font-bold mb-[10px]'>{review.name}</h4>
                                            <p className='text-base font-normal  leading-[28px] text-black'>{review.comment}</p>
                                        </div>

                                    </div>*/
                                  < ReviewSubItem item={item} />
                                )
                            }).splice(0,4) }

                            <p className='text-[#F34802] text-base font-medium  decoration-solid underline'>
                                <Link to={`/reviews/${item.id}`}>Տեսնել ավելին</Link>
                            </p>

                        </div>

        </>

    )
}
export  default ReviewsItem