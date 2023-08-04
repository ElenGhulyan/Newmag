import mediaImages from '../../assets/images/media-images.png';

const Media = () => {
    return (
        <>
            <div className='content '>
                <div className='flex justify-between mt-[100px]'>
                    <h2 className='text-black text-3xl not-italic font-semibold'>Հոդվածներ </h2>
                    <p className='text-orange-600 text-lg not-italic font-medium leading-6'><a href="" className='flex gap-[10px] items-center'>Բոլոր հոդվածները
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.00008 8.00002C1.00008 8.13263 1.05276 8.25981 1.14653 8.35357C1.2403 8.44734 1.36747 8.50002 1.50008 8.50002H13.2931L10.1461 11.646C10.0522 11.7399 9.99945 11.8672 9.99945 12C9.99945 12.1328 10.0522 12.2601 10.1461 12.354C10.24 12.4479 10.3673 12.5007 10.5001 12.5007C10.6329 12.5007 10.7602 12.4479 10.8541 12.354L14.8541 8.35402C14.9006 8.30758 14.9376 8.2524 14.9628 8.19165C14.988 8.13091 15.001 8.06579 15.001 8.00002C15.001 7.93425 14.988 7.86913 14.9628 7.80839C14.9376 7.74764 14.9006 7.69247 14.8541 7.64602L10.8541 3.64602C10.8076 3.59953 10.7524 3.56266 10.6917 3.5375C10.6309 3.51234 10.5658 3.49939 10.5001 3.49939C10.3673 3.49939 10.24 3.55213 10.1461 3.64602C10.0522 3.73991 9.99945 3.86725 9.99945 4.00002C9.99945 4.1328 10.0522 4.26013 10.1461 4.35402L13.2931 7.50002L1.50008 7.50002C1.36747 7.50002 1.2403 7.5527 1.14653 7.64647C1.05276 7.74024 1.00008 7.86741 1.00008 8.00002Z" fill="#F34802" stroke="#F34802" stroke-width="0.5"/>
                        </svg>
                    </a></p>
                </div>

                <div className='flex gap-[41px] justify-between mt-[60px]'>
                    <div className='p-[10px] bg-[#F1F6F9] rounded-[20px]'>
                        <div>
                            <img src={mediaImages} alt="media images"/>
                        </div>
                        <p className='w-full max-w-[262px] m-auto mt-[20px] text-black text-base not-italic font-medium leading-7'>Newmag-ը հայ ընթերցողին է ներկայացնում Անջալի Մահտոյի «Մաշկի խնամքի կանոնագիրքը» (լուսանկարներ. տեսանյութ)</p>
                    </div>
                    <div className='p-[10px] bg-[#F1F6F9] rounded-[20px]'>
                        <div>
                            <img src={mediaImages} alt="media images"/>
                        </div>
                        <p className='w-full max-w-[262px] m-auto mt-[20px] text-black text-base not-italic font-medium leading-7'>Newmag-ը հայ ընթերցողին է ներկայացնում Անջալի Մահտոյի «Մաշկի խնամքի կանոնագիրքը» (լուսանկարներ. տեսանյութ)</p>
                    </div>
                    <div className='p-[10px] bg-[#F1F6F9] rounded-[20px]'>
                        <div>
                            <img src={mediaImages} alt="media images"/>
                        </div>
                        <p className='w-full max-w-[262px] m-auto mt-[20px] text-black text-base not-italic font-medium leading-7'>Newmag-ը հայ ընթերցողին է ներկայացնում Անջալի Մահտոյի «Մաշկի խնամքի կանոնագիրքը» (լուսանկարներ. տեսանյութ)</p>
                    </div>
                    <div className='p-[10px] bg-[#F1F6F9] rounded-[20px]'>
                        <div>
                            <img src={mediaImages} alt="media images"/>
                        </div>
                        <p className='w-full max-w-[262px] m-auto mt-[20px] text-black text-base not-italic font-medium leading-7'>Newmag-ը հայ ընթերցողին է ներկայացնում Անջալի Մահտոյի «Մաշկի խնամքի կանոնագիրքը» (լուսանկարներ. տեսանյութ)</p>
                    </div>
                    <div className='p-[10px] bg-[#F1F6F9] rounded-[20px]'>
                        <div>
                            <img src={mediaImages} alt="media images"/>
                        </div>
                        <p className='w-full max-w-[262px] m-auto mt-[20px] text-black text-base not-italic font-medium leading-7'>Newmag-ը հայ ընթերցողին է ներկայացնում Անջալի Մահտոյի «Մաշկի խնամքի կանոնագիրքը» (լուսանկարներ. տեսանյութ)</p>
                    </div>

                </div>


            </div>
        </>
    )
}
export default Media