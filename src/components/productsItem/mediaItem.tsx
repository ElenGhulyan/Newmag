import {HomeMediaData} from "../../mockData/HomeData/homeMediaData";

const MediaItem = ({item}:{item:any}) => {
    return (


                <div className='p-[10px] w-full max-w-[303px] bg-[#F1F6F9] rounded-[20px] sm:flex sm:gap-[15px] sm:max-w-[350px]'>
                    <div className='3xl:max-w-[280px] sm:max-w-[120px]'>
                        <img src={item.src} alt={item.alt} className='3xl:w-full'/>
                    </div>
                    <p className='w-full max-w-[262px] m-auto mt-[20px] text-black text-base not-italic font-medium leading-7
                    3xl:text-[14px] sm:text-xs sm:max-w-[190px] sm:mt-[10px]'>
                        {item.desc}
                    </p>
                </div>


    )
}

export default MediaItem