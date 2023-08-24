import BannerImg from "../../assets/images/banner-img.png";

const BannerHomePage = () =>{
    return(
        <>
           <div className='content flex lg:flex-wrap lg:gap-[20px] lg:justify-center'>

               <div className='bg-purple-400 pb-[60px]  rounded-tl-[30px] rounded-bl-[30px] w-full max-w-[560px] lg:max-w-[345px] lg:pb-[40px] md:max-w-[165px] md:rounded-[10px] md:pb-[20px]'>
                   <div className='w-full max-w-[364px] m-auto mt-[60px]  h-[546px] 3xl:w-[310px]  3xl:h-[460px] 2xl:h-[400px] 2xl:max-w-[270px]
                    lg:max-w-[245px] lg:h-[360px] lg:mt-[40px] md:max-w-[144px] md:h-[205px] md:mt-[10px] '>
                       <img src={BannerImg} className='w-full h-full' alt="header logo"/>
                   </div>
                   <p className='mt-[60px] mx-auto w-full max-w-[442px] text-white text-center text-xl not-italic font-medium leading-7
                   3xl:text-[18px] 2xl:mt-[30px] lg:text-base lg:max-w-[315px] md:max-w-[135px] md:text-xs md:mt-[15px]'>Արժեք ստեղծող և ճաշակ ձևավորող մարդկանց ոչ ձանձրալի մտքերն՝
                       առաջին դեմքով</p>
               </div>

               <div className='bg-[#3B5CB2] pb-[60px] w-full max-w-[560px] lg:max-w-[345px] lg:pb-[40px] md:max-w-[165px] md:rounded-[10px] md:pb-[20px]'>
                   <div className='w-full max-w-[364px] m-auto mt-[60px]  h-[546px] 3xl:w-[310px]  3xl:h-[460px] 2xl:h-[400px] 2xl:max-w-[270px]
                   lg:max-w-[245px] lg:h-[360px]  lg:mt-[40px] md:max-w-[144px] md:h-[205px] md:mt-[10px] '>
                       <img src={BannerImg} className='w-full h-full' alt="header logo"/>
                   </div>
                   <p className='mt-[60px] w-full max-w-[442px] mx-auto text-white text-center text-xl not-italic font-medium leading-7
                   3xl:text-[18px] 2xl:mt-[30px] lg:text-base lg:max-w-[315px] md:max-w-[135px] md:text-xs md:mt-[15px]'>
                       Վեպ՝ թուլությունների, ներանձնային խնդիրների, կամքի ուժի և հոգեկան ամրության մասին</p>
               </div>
               <div className='bg-[#E9C969] pb-[60px] rounded-tr-[30px] rounded-br-[30px] w-full max-w-[560px] lg:max-w-[345px] lg:pb-[40px] md:max-w-[165px] md:rounded-[10px] md:pb-[20px] '>
                   <div className='w-full max-w-[364px] m-auto h-[546px] mt-[60px] 3xl:w-[310px] 3xl:h-[460px] 2xl:h-[400px]  2xl:max-w-[270px]
                   lg:max-w-[245px] lg:h-[360px]  lg:mt-[40px] md:max-w-[144px] md:h-[205px] md:mt-[10px] '>
                       <img src={BannerImg} className='w-full h-full  ' alt="header logo"/>
                   </div>
                   <p className='mt-[60px] w-full max-w-[442px] mx-auto text-white text-center text-xl not-italic font-medium leading-7
                    3xl:text-[18px] 2xl:mt-[30px] lg:text-base lg:max-w-[315px] md:max-w-[135px] md:text-xs md:mt-[15px]'>История, которая стала базой
                       сегодняшнего успеха IT-сектора
                       в Армении</p>
               </div>
           </div>
        </>
    )
}
export default BannerHomePage