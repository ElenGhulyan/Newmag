import AuthorImg from "../../assets/images/authorImg.png";
import {useParams} from "react-router-dom";
import {BooksData} from "../../mockData/BookData/booksData";

const BookAuthorInfo = () => {
    const {bookId} = useParams<{ bookId: any }>();

    const bookDetails = BooksData.find((item) => {
        return item.id == bookId;
    })
    return(
        <>
            {bookDetails ? (
                <div className='content flex justify-between 3xl:justify-between 3xl:gap-[40px]'>


                    <div className='w-full max-w-[940px] mt-[100px] 3xl:max-w-[670px]'>
                        <h2 className=' text-[28px] font_semibold mb-[60px]'>  Հեղինակ </h2>
                        <div className='pt-[40px] pl-[44px] bg-[#F1F6F9] pb-[100px] rounded-[20px] 3xl:pr-[20px] 3xl:pl-[20px] 3xl:pb-[40px] '>
                            <div className='flex gap-[30px] mb-[30px] items-center'>
                                <div className='w-full max-w-[134px] bg-white rounded-[100%]'>
                                    <img src={ typeof bookDetails.author == "object"
                                        ? bookDetails.author.img
                                        : "ggg"} alt=""/>
                                </div>
                                <p className='text-[#F34802] text-xl font_semibold'>{ typeof bookDetails.author == "object" && "name" in bookDetails.author
                                    ? bookDetails.author.name
                                    : "ggg"}</p>
                            </div>
                            <p className='text-[16px] leading-8 font-normal w-full max-w-[820px]'>{ typeof bookDetails.author == "object"
                                ? bookDetails.author.description
                                : "ggg"}</p>
                        </div>
                    </div>

                    <div className='w-full max-w-[640px] mt-[100px] h-[481px] 3xl:max-w-[640px]'>
                        <h2 className=' text-[28px] font_semibold mb-[60px]'>Գրքի թրեյլեր</h2>
                        <div >
                            <iframe  src={typeof bookDetails.author == "object"
                                    ? bookDetails.author.video
                                    : 'video .....'}
                                    title="YouTube video player" frameBorder="0"
                                    className='rounded-[20px] w-[640px] h-[481px]'
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
export default BookAuthorInfo