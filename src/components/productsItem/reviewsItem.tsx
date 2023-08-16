import {MediaSharingData} from "../../mockData/HomeData/mediaSharingData";
import reviewsImg from '../../assets/images/reviews-img.png'
import {ReviewsData} from '../../mockData/HomeData/reviewsData'

const ReviewsItem = ({item}:{item:any}) => {
    return (
        <>

                        <div className='flex gap-[40px] items-center '>
                            <div className='w-full max-w-[149px]'>
                                <img src={item.src} alt={item.alt}/>
                            </div>
                            <div>
                                <p className='text-[#000] text-[18px] font-medium leading-[30px] '>{item.desc}</p>
                                <p className='mt-[20px] mb-[10px] text-[#000] text-[16px] leading-[26px] font-[600]'>{item.author.name}</p>
                                <span className='text-[#4C4C4C] text-[16px] font-normal leading-[24px]'>{item.data}</span>
                            </div>
                        </div>

        </>

    )
}
export  default ReviewsItem