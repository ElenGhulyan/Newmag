import {HomeMediaData} from "../../mockData/HomeData/homeMediaData";

const MediaItem = () => {
    return (

        HomeMediaData.map((item) => {
            return (
                <div className='p-[10px] bg-[#F1F6F9] rounded-[20px]'>
                    <div>
                        <img src={item.src} alt={item.alt}/>
                    </div>
                    <p className='w-full max-w-[262px] m-auto mt-[20px] text-black text-base not-italic font-medium leading-7'>
                        {item.desc}
                    </p>
                </div>
            )

        })

    )
}

export default MediaItem