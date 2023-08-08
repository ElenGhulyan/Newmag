import FooterLogo from '../../../assets/images/logo-footer.png';
import ArcaLogo from '../../../assets/images/arca-logo.png';
import MasterLogo from '../../../assets/images/master-logo.svg';
import VisaLogo from '../../../assets/images/visa-logo.svg';
import TelcellLogo from '../../../assets/images/telcell-logo.svg';
import IdramLogo from '../../../assets/images/idram-logo.svg';

import FacebookIcon from '../../../assets/icons/facebook.svg'
import TwitterIcon from '../../../assets/icons/twwiter.svg'
import InstagramIcon from '../../../assets/icons/instagram.svg'
import LinkedinIcon from '../../../assets/icons/linkdin.svg'
import YoutubeIcon from '../../../assets/icons/youtube.svg'

const Footer = () =>{
    return(
        <footer className='bg-[#010101] pt-[100px] '>
            <div className='content'>
                <div className='w-full max-w-[168px] mb-[60px]'>
                    <img src={FooterLogo} className='w-fill' alt="footer logo"/>
                </div>

                <div className='flex justify-between'>

                    <div>
                        <h3 className='text-white text-xl font-semibold  text-line'>Բաժիններ</h3>
                        <div className='flex footer-menu justify-between  '>
                            <ul>
                                <li><a href="" > Մեր մասին</a></li>
                                <li><a href=""> Գրքեր</a></li>
                                <li><a href=""> Հեղինակներ</a></li>
                                <li><a href=""> Թարգմանիչներ</a></li>
                            </ul>
                            <ul>
                                <li><a href=""> Հոդվածներ</a></li>
                                <li><a href=""> Կարծիքներ</a></li>
                                <li><a href=""> Մեդիա</a></li>
                            </ul>

                        </div>
                    </div>
                    <div className='flex items-end '>
                        <svg width="1" height="123" viewBox="0 0 1 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.554932" width="1" height="122" rx="0.5" fill="white" fill-opacity="0.4"/>
                        </svg>

                    </div>
                    <div className=''>
                        <h3 className='text-white text-xl font-semibold text-line'>Պատվիրել</h3>
                        <p><a href="" className='text-white text-base font-medium inline-block pb-[15px] ' >Գիրք պատվիրելու պայմանները</a></p>
                        <p><a href="" className='text-white text-base font-medium inline-block mb-[32px]' >Գովազդ և Ծառայություններ</a></p>

                        <div className='flex gap-[15px] items-center '>
                            <a href=""> <img src={ArcaLogo} alt="arca logo"/></a>
                            <a href=""> <img src={MasterLogo} alt="master logo"/></a>
                            <a href=""> <img src={VisaLogo} alt="visa logo"/></a>
                            <a href=""> <img src={TelcellLogo} alt="telcell logo"/></a>
                            <a href=""> <img src={IdramLogo} alt="idram logo"/></a>

                        </div>


                    </div>
                    <div className='flex items-end'>
                        <svg width="1" height="123" viewBox="0 0 1 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.554932" width="1" height="122" rx="0.5" fill="white" fill-opacity="0.4"/>
                        </svg>

                    </div>
                    <div>
                        <h3 className='text-white text-xl font-semibold  text-line' >Կապ մեզ հետ</h3>
                        <a href="" className='text-white text-base font-medium ' >Արշակունյաց 4, Երևան 0023, ՀՀ </a>
                        <div className='flex gap-[20px] mt-[20px] items-center'>
                            <a href=""> <img src={FacebookIcon} alt="arca logo"/></a>
                            <a href=""> <img src={TwitterIcon} alt="master logo"/></a>
                            <a href=""> <img src={InstagramIcon} alt="visa logo"/></a>
                            <a href=""> <img src={LinkedinIcon} alt="telcell logo"/></a>
                            <a href=""> <img src={YoutubeIcon} alt="idram logo"/></a>
                        </div>

                        <form className='mt-[40px]'>
                            <label htmlFor="search"
                                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">

                                <input type="search" id="search"
                                       className="block w-full min-w-[381px] pl-[20px] py-[14px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Բաժանորդագրվել" required />
                                    <button type="submit"
                                            className=" bg-[#F34802] text-white absolute right-[3px] bottom-[4px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-[30px] py-[11px] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ուղարկել
                                    </button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>

            <div className='content  '>
                <div className='flex justify-between pt-[100px] pb-[20px]'>
                    <p className='text-sm text-white font-normal'>Newmag©   2011-2022:</p>
                    <p className='text-sm text-white font-normal'>Կայքը` Future Systems․</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer