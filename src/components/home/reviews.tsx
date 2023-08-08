import ReviewsItem from "../productsItem/reviewsItem";
import {ReviewsData} from "../../mockData/HomeData/reviewsData";
import LoadMore from "../loadMore";
import SectionTitle from "../SectioTitle";

const Reviews = () => {
    return (
        <section className='mt-[100px] mb-[100px]'>
            <div className='content '>
                <SectionTitle title='Բոլոր կարծիքները' url='testimonial' heading={'Կարծիքներ'} />
                <div className='flex gap-[30px]  mt-[40px]'>
                    {
                        ReviewsData.map((item) => {
                            return <ReviewsItem item={item}/>
                        })
                    }
                </div>
            </div>

        </section>
    )
}
export default Reviews