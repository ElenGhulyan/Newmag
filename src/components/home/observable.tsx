import observableImg from '../../assets/images/observable-images.png';
import ObservableItem from "../productsItem/observableItem";
import {HomeProductsItem} from "../../mockData/HomeData/homeData";
import SectionTitle from "../SectioTitle";
// import HomeProductsItem from '../produtsItem'

const Observable = () => {
    return (
        <>
            <section className='bg-[#F1F6F9] '>
                <div className='content py-[100px]'>
                    <div className=' mt-[100px] pt-[100px]'>
                        <SectionTitle title='Բոլոր ապրանքները' url='docs' heading={'Ուշադրության արժանի'} />
                    </div>
                    <div className='flex gap-[60px] pb-[100px] mt-[60px]'>
                        {    HomeProductsItem.map((item)=>{
                            return(
                        <ObservableItem item={item} />
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Observable;