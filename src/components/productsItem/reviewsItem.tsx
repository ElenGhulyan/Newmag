import {MediaSharingData} from "../../mockData/HomeData/mediaSharingData";
import reviewsImg from '../../assets/images/reviews-img.png'
import {ReviewsData} from '../../mockData/HomeData/reviewsData'
import {Link, useParams} from "react-router-dom";
import {BooksData} from "../../mockData/BookData/booksData";

const ReviewsItem = ({item}:{item:any}) => {
    const {reviewId} = useParams<{ reviewId: any }>();
    const reviewItem = BooksData.find((item:any) => {
        return item.id == reviewId;
    })

    return (
        <>

                        <div className=' '>

                            <div className='flex gap-[40px]'>
                                <div className='w-full max-w-[100px] h-[163px]'>
                                    <img src={item.src} alt="" className='w-full'/>
                                </div>
                                <div>
                                    <h3 className='text-2xl font-extrabold'>{item.title}</h3>
                                    <p>{item.author && item.author.name}</p>
                                </div>
                            </div>


                            {item.reviews && item.reviews.map( (review:any) => {
                                return (
                                    <div className='flex gap-[14px]'>

                                        <Link to={`/reviews/${item.id}/${item.id}`}>
                                            <div>
                                                <img src={review.avatar} alt=""/>
                                            </div>
                                        </Link>
                                        <div>
                                            <h4>{review.name}</h4>
                                            <p>{review.comment}</p>
                                        </div>

                                    </div>
                                )
                            }).splice(0,4)}

                            <p>
                                <Link to={`/reviews/${item.id}`}>Տեսնել ավելին</Link>
                            </p>

                        </div>

        </>

    )
}
export  default ReviewsItem