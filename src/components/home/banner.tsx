import BannerImg from "../../assets/images/banner-img.png";

const BannerHomePage = () =>{
    return(
        <>
           <div className='content flex '>

               <div className='bg-purple-400   rounded-tl-[30px] rounded-bl-[30px] w-full max-w-[560px] h-[819px] 3xl:h-[760px]'>
                   <div className='w-full max-w-[364px] m-auto pt-[60px] 3xl:w-[350px] '>
                       <img src={BannerImg} className='w-full h-[546px] 3xl:h-[490px]' alt="header logo"/>
                   </div>
                   <p className='mt-[60px] mx-auto w-full max-w-[442px] text-white text-center text-xl not-italic font-medium leading-7 3xl:text-[18px]'>Արժեք ստեղծող և ճաշակ ձևավորող մարդկանց ոչ ձանձրալի մտքերն՝
                       առաջին դեմքով</p>
               </div>

               <div className='bg-[#3B5CB2] w-full max-w-[560px] h-[819px] 3xl:h-[760px]'>
                   <div className='w-full max-w-[364px] m-auto pt-[60px] 3xl:w-[350px]'>
                       <img src={BannerImg} className='w-full h-[546px] 3xl:h-[490px]' alt="header logo"/>
                   </div>
                   <p className='mt-[60px] w-full max-w-[442px] mx-auto text-white text-center text-xl not-italic font-medium leading-7 3xl:text-[18px]'>Վեպ՝ թուլությունների, ներանձնային խնդիրների, կամքի ուժի և հոգեկան ամրության մասին</p>
               </div>
               <div className='bg-[#E9C969] rounded-tr-[30px] rounded-br-[30px] w-full max-w-[560px] h-[819px] 3xl:h-[760px]'>
                   <div className='w-full max-w-[364px] m-auto pt-[60px] 3xl:w-[350px]'>
                       <img src={BannerImg} className='w-full h-[546px] 3xl:h-[490px]' alt="header logo"/>
                   </div>
                   <p className='mt-[60px] w-full max-w-[442px] mx-auto text-white text-center text-xl not-italic font-medium leading-7 3xl:text-[18px]'>История, которая стала базой
                       сегодняшнего успеха IT-сектора
                       в Армении</p>
               </div>
           </div>
        </>
    )
}
export default BannerHomePage