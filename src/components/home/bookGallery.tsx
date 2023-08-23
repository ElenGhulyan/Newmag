import BookGalleryImg from '../../assets/images/book_gallery-img.png';
const BookGallery = () => {
    return (
        <>

            <section className='py-[100px] bg-[#F1F6F9] mt-[100px]'>
                <div className='flex content gap-[41px]  3xl:flex-wrap 3xl:gap-[20px] 3xl:justify-center'>
                    <div className='bg-[#E2916F] rounded-[20px] w-full max-w-[303px] h-[481px] 3xl:max-w-[270px] '>
                        <div className='w-full max-w-[172px] mx-auto mt-[40px] mb-[30px] '>
                            <img src={BookGalleryImg} className='w-full' alt="book images"/>
                        </div>
                        <p className='w-full max-w-[263px] m-auto text-center text-white text-base not-italic font-medium leading-7 3xl:text-[15px] 3xl:max-w-[250px]'>Բաքվի ջարդերի ու հայատյացության մասին՝ առաջին դեմքից և մի
                            ընտանիքի օրինակով</p>
                    </div>
                    <div className='bg-[#D5BDB4] rounded-[20px] w-full max-w-[303px] h-[481px] 3xl:max-w-[270px] '>
                        <div className='w-full max-w-[172px] mx-auto mt-[40px] mb-[30px]'>
                            <img src={BookGalleryImg} className='w-full' alt="book images"/>
                        </div>
                        <p className='w-full max-w-[263px] m-auto text-center text-white text-base not-italic font-medium leading-7 3xl:text-[15px] 3xl:max-w-[250px]'>Բաքվի ջարդերի ու հայատյացության մասին՝ առաջին դեմքից և մի
                            ընտանիքի օրինակով</p>
                    </div>
                    <div className='bg-[#485A88] rounded-[20px] w-full max-w-[303px] h-[481px] 3xl:max-w-[270px] '>
                        <div className='w-full max-w-[172px] mx-auto mt-[40px] mb-[30px]'>
                            <img src={BookGalleryImg} className='w-full' alt="book images"/>
                        </div>
                        <p className='w-full max-w-[263px] m-auto text-center text-white text-base not-italic font-medium leading-7 3xl:text-[15px] 3xl:max-w-[250px]'>Բաքվի ջարդերի ու հայատյացության մասին՝ առաջին դեմքից և մի
                            ընտանիքի օրինակով</p>
                    </div>
                    <div className='bg-[#E0C982] rounded-[20px] w-full max-w-[303px] h-[481px] 3xl:max-w-[270px] '>
                        <div className='w-full max-w-[172px] mx-auto mt-[40px] mb-[30px]'>
                            <img src={BookGalleryImg} className='w-full' alt="book images"/>
                        </div>
                        <p className='w-full max-w-[263px] m-auto text-center text-white text-base not-italic font-medium leading-7 3xl:text-[15px] 3xl:max-w-[250px]'>Բաքվի ջարդերի ու հայատյացության մասին՝ առաջին դեմքից և մի
                            ընտանիքի օրինակով</p>
                    </div>
                    <div className='bg-[#D7BE9A] rounded-[20px] w-full max-w-[303px] h-[481px] 3xl:max-w-[270px] '>
                        <div className='w-full max-w-[172px] mx-auto mt-[40px] mb-[30px]'>
                            <img src={BookGalleryImg} className='w-full' alt="book images"/>
                        </div>
                        <p className='w-full max-w-[263px] m-auto text-center text-white text-base not-italic font-medium leading-7 3xl:text-[15px] 3xl:max-w-[250px]'>Բաքվի ջարդերի ու հայատյացության մասին՝ առաջին դեմքից և մի
                            ընտանիքի օրինակով</p>
                    </div>


                </div>
            </section>

        </>
    )
}
export default BookGallery