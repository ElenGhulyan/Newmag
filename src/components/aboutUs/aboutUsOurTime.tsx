import {AboutUsData} from "../../mockData/aboutUs/aboutUsData";

const AboutUsOurTime = () => {

    return (
        <div className='my-[100px]'>

            <h2 className='text-3xl font_semibold text-black mb-[60px]'>Մեր թիմը</h2>
            {AboutUsData.map((item)=>{

                return (
                    <div className=' rounded-[20px] py-[30px] px-[60px] bg-[#F1F6F9]'>
                        {item.ourTime.map((time) =>{

                            return (
                                <>
                                    <div className='flex justify-between items-center py-[30px] border-b border-[#D8DFE9]'>
                                        <h4 className=' w-full max-w-[506px] text-lg font-bold text-black'>{time.jobTitle}</h4>
                                        <p className=' w-full max-w-[210px] text-lg font-normal text-black'>{time.name}</p>
                                        <span className='w-full max-w-[285px] text-lg font-normal text-black'>{time.email}</span>
                                    </div>

                                </>
                            )
                        })}
                    </div>
                )
            })}

        </div>
    )
}

export default AboutUsOurTime