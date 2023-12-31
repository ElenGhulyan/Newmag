
import {HomeProductsItem} from '../../mockData/HomeData/homeData'

const ObservableItem = ({item}:{item:any}) => {
    return (
        <>

                    <div className=''>
                        <div className='w-full max-w-[230px] h-[354px] 2xl:max-w-[190px] 2xl:h-[290px] sm:max-w-[164px] sm:h-auto'>
                            <img src={item.src} className='w-full' alt={item.alt}/>
                        </div>
                        <div>
                            <p className='mt-[21px] mb-[10px] text-black text-lg not-italic font-bold sm:mt-[15px]'>{item.title}</p>
                            <p className='text-gray-700 text-base not-italic font-normal'>{item.author.name}</p>
                            <span className='mt-[10px] mb-[23px] text-orange-600 text-lg not-italic font-bold'>{item.price}</span>
                        </div>
                        <div className="mt-[23px] border border-solid border-black rounded-[10px] bg-[rgba(0, 0, 0, 0.00)] text-center py-[10px]">
                            <a href="src/components/productsItem/observableItem" className='text-black text-center text-[16px] font-medium '>Դիտել</a>
                        </div>
                    </div>

        </>
    )
}

export default ObservableItem