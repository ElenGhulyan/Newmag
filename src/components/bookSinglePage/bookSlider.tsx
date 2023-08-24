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

    return (

        <>
            {bookDetails ? (
                <div className='flex gap-[40px] content 3xl:gap-[20px]'>

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







        </>

    )




}
export default BookSlider