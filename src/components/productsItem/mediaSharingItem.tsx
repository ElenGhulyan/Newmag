import {MediaSharingData} from "../../mockData/HomeData/mediaSharingData";

const MediaSharingItem = () => {
    return (
        <>
            {
                MediaSharingData.map((item) =>{
                    return (
                       <div className='border border-solid border-[#FFFFFF66] px-[30px] py-[40px] rounded-[20px] w-full max-w-[311px] 3xl:max-w-[250px] 3xl:px-[20px] 3xl:py-[30px]'>
                          <div className='flex gap-[10px] pb-[15px] items-center'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                  <path d="M9.8459 12.3734L9.5059 12.0436L9.16591 12.3734L4.50009 16.8982V4.06774C4.50009 3.98368 4.57565 3.88937 4.69923 3.88937H14.3126C14.4377 3.88937 14.5117 3.98234 14.5117 4.06774V16.8982L9.8459 12.3734Z" stroke="white" stroke-width="0.976744"/>
                              </svg>
                              <p className='text-[#fff] text-[16px] font-bold leading-7'>Shamshyan</p>
                          </div>
                           <h3 className='text-[#fff] text-lg font-bold 3xl:text-base'>
                               Տեսահոլովակի պրեմիերա․ Սյուզաննա Մելքոնյան - «Մեռնել սիրելով». exclusivelife.am   
                           </h3>
                           <div className='flex gap-[10px] justify-end mt-[20px] items-center'>
                               <a href="" className='text-[#fff] text-[16px] leading-6 font-medium'>
                                   Կարդալ ավելին
                               </a>
                               <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M1.637 8.22684C1.637 8.35984 1.68984 8.4874 1.78389 8.58145C1.87793 8.67549 2.00549 8.72833 2.13849 8.72833H13.9667L10.8103 11.8837C10.7161 11.9779 10.6632 12.1056 10.6632 12.2388C10.6632 12.372 10.7161 12.4997 10.8103 12.5938C10.9045 12.688 11.0322 12.7409 11.1654 12.7409C11.2985 12.7409 11.4262 12.688 11.5204 12.5938L15.5324 8.58189C15.5791 8.53531 15.6161 8.47997 15.6414 8.41904C15.6667 8.35812 15.6797 8.2928 15.6797 8.22684C15.6797 8.16087 15.6667 8.09556 15.6414 8.03463C15.6161 7.9737 15.5791 7.91836 15.5324 7.87178L11.5204 3.85984C11.4738 3.81321 11.4184 3.77622 11.3575 3.75099C11.2966 3.72576 11.2313 3.71277 11.1654 3.71277C11.0322 3.71277 10.9045 3.76567 10.8103 3.85984C10.7161 3.954 10.6632 4.08172 10.6632 4.21489C10.6632 4.34807 10.7161 4.47578 10.8103 4.56995L13.9667 7.72534L2.13849 7.72534C2.00549 7.72534 1.87793 7.77818 1.78389 7.87223C1.68984 7.96628 1.637 8.09383 1.637 8.22684Z" fill="white" stroke="white" stroke-width="0.488372"/>
                               </svg>
                           </div>


                       </div>
                    )
                })
            }
        </>
    )
}

export default MediaSharingItem
