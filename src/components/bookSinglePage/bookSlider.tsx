import {BooksData} from '../../mockData/BookData/booksData'
import LineImg from '../../assets/images/line.svg'

import FacebookIcon from '../../assets/icons/facebook-black.svg'
import TwitterIcon from '../../assets/icons/twwiter-black.svg'
import LinkedinIcon from '../../assets/icons/linkedin-black.svg'
import YoutubeIcon from '../../assets/icons/email-logo.svg'


import VerticalSlider from "./VerticalSlider";
import {useParams} from "react-router-dom";


const BookSlider = () => {


    const {bookId} = useParams<{ bookId: any }>();

   return (

       <>
           {
               BooksData.filter((singleBook) => {
                       return (
                           <>
                               {
                                   bookId === singleBook.id &&
                                   <div className='flex gap-[40px] content '>

                                       <div>
                                           <VerticalSlider/>
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

                                       <div>
                                           <div>
                                               <h1 className='font-extrabold text-2xl text-[#000] mb-[15px]'>Հեղափոխություն </h1>
                                               <p className='text-sm font-normal text-[#4C4C4C] mb-[40px]'>Էմանուել Մակրոն </p>
                                           </div>
                                           <div>
                                               <div className='border-r-[1px] w-full max-w-[512px] pr-[40px]'>
                                                   <h2 className='font_semibold text-xl text-[#000] mb-[22px]'>Նկարագրություն</h2>
                                                   <p className='text-black leading-[30px] text-[16px] font-normal'>
                                                       «Հեղափոխություն» գիրքը հրատարակվել է 2016 թվականի նոյեմբերի 24-ին։ Նույն
                                                       թվականին
                                                       Ֆրանսիայում դարձել է բեսթսելլեր՝ վաճառվելով ավելի քան երկու հարյուր հազար
                                                       օրինակ։ Գիրքը
                                                       թարգմանվել է եվրոպական գրեթե բոլոր լեզուներով։
                                                       <br/> Ֆրանսիայի պատմության ամենաերիտասարդ նախագահ Էմանուել Մակրոնը
                                                       «Հեղափոխություն» գրքում
                                                       պատմում է իր կյանքի պատմությունը և այն մասին, թե ինչն է իրեն ոգևորում։ Նա
                                                       ներկայացնում է
                                                       փոփոխվող նոր աշխարհում Ֆրանսիայի ապագայի վերաբերյալ․․․
                                                   </p>
                                               </div>


                                               <div className='flex gap-[40px] rounded-[10px] mt-[40px]'>
                                                   <p className='text-3xl text-[#F34802] font-bold '>4800 ֏</p>
                                                   <button
                                                       className='py-[13px] px-[30px] bg-[#F34802] text-base font-medium text-[#fff] flex gap-[10px] rounded-[10px]'>
                                                       <svg xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                           <path
                                                               d="M10.125 21.75C9.82663 21.75 9.54048 21.6315 9.3295 21.4205C9.11853 21.2095 9 20.9234 9 20.625C9 20.3266 9.11853 20.0405 9.3295 19.8295C9.54048 19.6185 9.82663 19.5 10.125 19.5C10.4234 19.5 10.7095 19.6185 10.9205 19.8295C11.1315 20.0405 11.25 20.3266 11.25 20.625C11.25 20.9234 11.1315 21.2095 10.9205 21.4205C10.7095 21.6315 10.4234 21.75 10.125 21.75ZM17.625 21.75C17.3266 21.75 17.0405 21.6315 16.8295 21.4205C16.6185 21.2095 16.5 20.9234 16.5 20.625C16.5 20.3266 16.6185 20.0405 16.8295 19.8295C17.0405 19.6185 17.3266 19.5 17.625 19.5C17.9234 19.5 18.2095 19.6185 18.4205 19.8295C18.6315 20.0405 18.75 20.3266 18.75 20.625C18.75 20.9234 18.6315 21.2095 18.4205 21.4205C18.2095 21.6315 17.9234 21.75 17.625 21.75ZM2.25 3C2.05109 3 1.86032 2.92098 1.71967 2.78033C1.57902 2.63968 1.5 2.44891 1.5 2.25C1.5 2.05109 1.57902 1.86032 1.71967 1.71967C1.86032 1.57902 2.05109 1.5 2.25 1.5H6C6.17332 1.5001 6.34125 1.56023 6.47525 1.67017C6.60924 1.7801 6.70103 1.93304 6.735 2.103L7.515 6H21.75C21.8619 5.99997 21.9724 6.02496 22.0733 6.07316C22.1743 6.12136 22.2632 6.19153 22.3335 6.27854C22.4038 6.36556 22.4538 6.4672 22.4798 6.57603C22.5057 6.68486 22.507 6.79811 22.4835 6.9075L20.2335 17.4075C20.1975 17.5753 20.105 17.7256 19.9715 17.8334C19.838 17.9413 19.6716 18.0001 19.5 18H9C8.82668 17.9999 8.65875 17.9398 8.52475 17.8298C8.39076 17.7199 8.29897 17.567 8.265 17.397L5.385 3H2.25ZM9.615 16.5H18.894L20.823 7.5H7.815L9.615 16.5Z"
                                                               fill="white" stroke="white" stroke-width="0.4"/>
                                                       </svg>
                                                       Ավելացնել զամբյուղ
                                                   </button>
                                               </div>


                                           </div>

                                       </div>

                                       <div>
                                           <h2 className='text-xl font_semibold text-black mb-[30px] mt-[100px]'>Լրացուցիչ
                                               տեղեկություն</h2>
                                           <div className='flex flex-col gap-[25px] '>
                                               {BooksData && BooksData.map((item) => {
                                                   return (

                                                       <div>
                                                           {
                                                               item.attributes && item.attributes.map((item) => {
                                                                   return (
                                                                       <div
                                                                           className='flex items-center gap-[18px] justify-between mb-[25px]'>
                                                                           <p className='text-black text-base font_semibold'>{item.key}</p>
                                                                           <div>
                                                                               <img src={LineImg} alt=""/>
                                                                           </div>
                                                                           <span
                                                                               className='text-black text-base font-normal'>{item.value}</span>
                                                                       </div>

                                                                   )
                                                               })
                                                           }

                                                       </div>

                                                   )
                                               })}

                                           </div>


                                       </div>


                                   </div>

                               }
                           </>
                       )

                   }
               )
           }
       </>

   )


}
export default BookSlider