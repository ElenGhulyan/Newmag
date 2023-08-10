import BagItem from "../productsItem/bagItem";
import {BagData} from "../../mockData/HomeData/bagdata";
import SectionTitle from "../SectioTitle";

const Bags = () => {
    return (
        <>
            <section className=' '>
                <div className='content py-[100px]'>
                    <div >
                        <SectionTitle title='Բոլոր ապրանքները' url='docs' heading={'Պայուսակներ'} />
                    </div>

                    <div className='flex gap-[30px] pb-[100px] mt-[60px]'>
                        {
                            BagData.map((item) => {
                       return  <BagItem item={item} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Bags