import {BooksData} from '../../mockData/BookData/booksData'

import FacebookIcon from '../../assets/icons/facebook-black.svg'
import TwitterIcon from '../../assets/icons/twwiter-black.svg'
import LinkedinIcon from '../../assets/icons/linkedin-black.svg'
import YoutubeIcon from '../../assets/icons/email-logo.svg'
import AuthorImg from '../../assets/images/authorImg.png'


import VerticalSlider from "./VerticalSlider";
import {useParams} from "react-router-dom";
import BookInfo from "./bookInfo";
import AdditionalInfo from "./additionalInfo";
import FindeSinglePage from "../../hooks/findeSinglePage";


const BookSlider = () => {

    // const bookDetails= FindeSinglePage({BooksData})


    const {bookId} = useParams<{ bookId: any }>();

    const bookDetails = BooksData.find((item) => {
        return item.id == bookId;
    })

    console.log(bookId)

    return (

        <>
            {bookDetails ? (
                <div className='flex gap-[40px] content'>

                    <div>
                        <VerticalSlider images={bookDetails.images}/>
                        <div className='flex gap-[15px] mt-[30px]'>
                            <p>Տարածել՝</p>
                            <div className='flex gap-[20px]'>
                                <img src={FacebookIcon} alt="facebook logo"/>
                                <img src={TwitterIcon} alt="twitter logo"/>
                                <img src={LinkedinIcon} alt="linkedin logo"/>
                                <img src={YoutubeIcon} alt="youtube logo"/>
                            </div>

                        </div>
                    </div>

                    <BookInfo bookId={bookId} bookDetails={bookDetails}/>
                    <AdditionalInfo  />









                </div>
            ) : (
                <div className='flex gap-[40px] content '>
                    404 not found
                </div>
            ) }


            {bookDetails ? (
                <div className='content flex justify-between'>


                    <div className='w-full max-w-[940px] mt-[100px]'>
                        <h2 className=' text-[28px] font_semibold mb-[60px]'>  Հեղինակ </h2>
                        <div className='pt-[40px] pl-[44px] bg-[#F1F6F9] pb-[100px] rounded-[20px]'>
                            <div className='flex gap-[30px] mb-[30px]'>
                                <div className='w-full max-w-[134px]'>
                                    <img src={AuthorImg} alt=""/>
                                </div>
                                <p className='text-[#F34802] text-xl font_semibold'>Էմանուել Մակրոն</p>
                            </div>
                            <p className='text-[16px] leading-8 font-normal w-full max-w-[820px]'>
                                Էմանուել Մակրոնը ծնվել է 1977 թվականի դեկտեմբերի 21–ին Ամյենում։ 2004-ին ավարտել է Կառավարման ազգային դպրոցն ու աշխատանքի անցել Ֆինանսների գլխավոր տեսչությունում, ինչից հետո դարձել է Rothschild & Co ֆինանսական կազմակերպության ներդրումային բանկիրը։ 2014 թվականին Ֆրանսուա Օլանդը Մակրոնին նշանակել է էկոնոմիկայի և արդյունաբերության նախարար։ 2016-ի օգոստոսին վերջինս հրաժարական է տվել, որպեսզի իր թեկնածությունն առաջադրի 2017 թվականի նախագահական ընտրություններում։
                            </p>
                        </div>
                    </div>

                    <div className='w-full max-w-[640px] mt-[100px]'>
                        <h2 className=' text-[28px] font_semibold mb-[60px]'>Գրքի թրեյլեր</h2>
                        <div >
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/SsCRcTvLIDw"
                                    title="YouTube video player" frameBorder="0"
                                    className='rounded-[20px]'
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>

                            </iframe>
                        </div>

                    </div>


                </div>
            ) : (
                <div className='flex gap-[40px] content '>
                    404 not found
                </div>
            ) }





        </>

    )




}
export default BookSlider