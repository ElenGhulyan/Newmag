import {AboutUsData} from "../../mockData/aboutUs/aboutUsData";

const AboutUsInfo = () => {

    return(
        <>

            {AboutUsData.map((item)=>{
                return (
                    <div>
                        <h1 className='font_semibold text-3xl text-black mb-[60px]'>{item.pageTitle}</h1>
                        <p className='text-lg font-normal text-black'>{item.description}</p>

                        <div className='mt-[60px] flex gap-[40px]'>
                            {item.events.map((event) =>{
                                return (
                                    <>
                                        <div className=' '>
                                            <div className='w-full max-w-533px rounded-[20px]'>
                                                <img src={event.img} alt={event.alt}/>
                                            </div>
                                            <h2 className='text-3xl font_semibold text-black mt-[30px]'>{event.title}</h2>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>
                )
            })}

        </>
    )
}
export default AboutUsInfo