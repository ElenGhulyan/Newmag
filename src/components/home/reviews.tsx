import ReviewsItem from "../productsItem/reviewsItem";
import {ReviewsData} from "../../mockData/HomeData/reviewsData";
import LoadMore from "../loadMore";
import SectionTitle from "../SectioTitle";
import ReviewsHomePageItem from "../productsItem/reviewsHomPageItem";

const Reviews = () => {
    return (
        <section className='mt-[100px] mb-[100px]'>
            <div className='content '>
                <SectionTitle title='Բոլոր կարծիքները' url='testimonial' heading={'Կարծիքներ'} />
                <div className='flex gap-[60px]  flex-wrap mt-[40px] justify-between 2xl:gap-[30px] 2xl:justify-center '>
                    {
                        ReviewsData.map((item) => {
                            return <ReviewsHomePageItem item={item}/>
                        })
                    }
                </div>
            </div>

        </section>
    )
}
export default Reviews