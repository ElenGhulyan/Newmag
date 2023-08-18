import '../main.css';

import HeaderLogo from '../../../assets/images/header-logo.svg';
import {useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {

    const [open, setOpen] = useState(false)

    const [show, setShow] = useState(false)

    const [cartOpen, setCartOpen ] = useState(false)

    return (
        <>
            <header className="bg-white w-full my-[21px] mb-[100px] relative">
                <div className="content  flex justify-between items-center ">
                    <div className="logo-header">
                        <Link to='/'><img src={HeaderLogo} alt="header logo"/></Link>
                    </div>
                    <nav   className={`header-menu ${show && 'menu-show'}`}>
                        <ul className="flex gap-x-10">
                            <li className='menu-about-us flex gap-[5px] items-center relative'>
                                <Link to='/about_us'>Մեր մասին</Link>
                                {/*<a href="src/components/main/header/header.tsx">Մեր մասին</a>*/}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M5.27399 8.27465C5.18714 8.36113 5.11823 8.46387 5.07122 8.57697C5.0242 8.69008 5 8.81134 5 8.93379C5 9.05625 5.0242 9.17751 5.07122 9.29061C5.11823 9.40372 5.18714 9.50646 5.27399 9.59294L11.4739 15.7822C11.5429 15.8512 11.6249 15.906 11.7152 15.9434C11.8054 15.9808 11.9022 16 11.9999 16C12.0976 16 12.1944 15.9808 12.2846 15.9434C12.3749 15.906 12.4569 15.8512 12.5259 15.7822L18.7258 9.59294C19.0914 9.22799 19.0914 8.6396 18.7258 8.27465C18.3602 7.9097 17.7708 7.9097 17.4053 8.27465L11.9962 13.667L6.58709 8.2672C6.22897 7.9097 5.6321 7.9097 5.27399 8.27465Z"
                                        fill="black"/>
                                </svg>
                                <ul className='about-us-drop-down hidden'>
                                    <li>
                                        <a href="">Ընկերության մասին</a>
                                    </li>
                                    <li>
                                        <a href="">Անձնակազմ</a>
                                    </li>
                                    <li>
                                        <a href="">Ծառայություններ</a>
                                    </li>
                                    <li>
                                        <a href="">Կապ</a>
                                    </li>
                                </ul>
                            </li>
                            <li><Link to='/books' >Գրքեր</Link></li>
                            <li><Link to='/authors' >Հեղինակներ</Link></li>
                            <li><Link to='/translators'>Թարգմանիչներ</Link></li>
                            <li><Link to='/articles'>Հոդվածներ</Link></li>
                            <li><Link to='/reviews'>Կարծիքներ</Link></li>
                            <li><Link to='/media'>Մեդիա</Link></li>
                        </ul>
                    </nav>
                    <div className=" header-icons flex gap-[30px] items-center	">

                        <div className='burger-icon hidden'
                        onClick={()=>{
                        setShow(!show)
                        }
                        }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect x="2" y="4" width="21" height="2" rx="1" fill="black"/>
                                <rect x="9" y="11" width="14" height="2" rx="1" fill="black"/>
                                <rect x="2" y="18" width="21" height="2" rx="1" fill="black"/>
                            </svg>
                        </div>


                        <select className="border-0 text-black text-lg font-medium" name="" id="">
                            <option value="En">En</option>
                            <option value="Am">Am</option>
                        </select>




                        <div className={`basket-icon ${cartOpen && 'activeBtn'}`}
                        onClick={() => setCartOpen(cartOpen => !cartOpen)}>

                            <Link to='/shopingCart'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M10.125 22.5C9.82663 22.5 9.54048 22.3771 9.3295 22.1583C9.11853 21.9395 9 21.6428 9 21.3333C9 21.0239 9.11853 20.7272 9.3295 20.5084C9.54048 20.2896 9.82663 20.1667 10.125 20.1667C10.4234 20.1667 10.7095 20.2896 10.9205 20.5084C11.1315 20.7272 11.25 21.0239 11.25 21.3333C11.25 21.6428 11.1315 21.9395 10.9205 22.1583C10.7095 22.3771 10.4234 22.5 10.125 22.5ZM17.625 22.5C17.3266 22.5 17.0405 22.3771 16.8295 22.1583C16.6185 21.9395 16.5 21.6428 16.5 21.3333C16.5 21.0239 16.6185 20.7272 16.8295 20.5084C17.0405 20.2896 17.3266 20.1667 17.625 20.1667C17.9234 20.1667 18.2095 20.2896 18.4205 20.5084C18.6315 20.7272 18.75 21.0239 18.75 21.3333C18.75 21.6428 18.6315 21.9395 18.4205 22.1583C18.2095 22.3771 17.9234 22.5 17.625 22.5ZM2.25 3.05556C2.05109 3.05556 1.86032 2.97361 1.71967 2.82775C1.57902 2.68189 1.5 2.48406 1.5 2.27778C1.5 2.0715 1.57902 1.87367 1.71967 1.72781C1.86032 1.58194 2.05109 1.5 2.25 1.5H6C6.17332 1.50011 6.34125 1.56247 6.47525 1.67647C6.60924 1.79047 6.70103 1.94908 6.735 2.12533L7.515 6.16667H21.75C21.8619 6.16663 21.9724 6.19256 22.0733 6.24254C22.1743 6.29252 22.2632 6.36529 22.3335 6.45553C22.4038 6.54576 22.4538 6.65117 22.4798 6.76403C22.5057 6.87689 22.507 6.99434 22.4835 7.10778L20.2335 17.9967C20.1975 18.1706 20.105 18.3266 19.9715 18.4384C19.838 18.5502 19.6716 18.6112 19.5 18.6111H9C8.82668 18.611 8.65875 18.5486 8.52475 18.4346C8.39076 18.3206 8.29897 18.162 8.265 17.9858L5.385 3.05556H2.25ZM9.615 17.0556H18.894L20.823 7.72222H7.815L9.615 17.0556Z"
                                        fill="black" stroke="black" stroke-width="0.4"/>
                                </svg>
                            </Link>


                            {cartOpen && (
                                <div className=''>

                                </div>
                            ) }


                        </div>





                        <div className="search-icon" onClick={() => {
                            setOpen(true)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M21.6714 20.0942L17.8949 16.3287C19.1134 14.7764 19.7745 12.8595 19.7721 10.886C19.7721 9.12854 19.2509 7.41052 18.2745 5.94922C17.2981 4.48792 15.9103 3.34897 14.2866 2.67641C12.6629 2.00385 10.8762 1.82788 9.15245 2.17075C7.42873 2.51362 5.84539 3.35993 4.60266 4.60266C3.35993 5.84539 2.51362 7.42873 2.17075 9.15245C1.82788 10.8762 2.00385 12.6629 2.67641 14.2866C3.34897 15.9103 4.48792 17.2981 5.94922 18.2745C7.41052 19.2509 9.12854 19.7721 10.886 19.7721C12.8595 19.7745 14.7764 19.1134 16.3287 17.8949L20.0942 21.6714C20.1974 21.7755 20.3203 21.8582 20.4556 21.9146C20.591 21.971 20.7362 22 20.8828 22C21.0294 22 21.1746 21.971 21.31 21.9146C21.4453 21.8582 21.5682 21.7755 21.6714 21.6714C21.7755 21.5682 21.8582 21.4453 21.9146 21.31C21.971 21.1746 22 21.0294 22 20.8828C22 20.7362 21.971 20.591 21.9146 20.4556C21.8582 20.3203 21.7755 20.1974 21.6714 20.0942ZM4.22151 10.886C4.22151 9.56791 4.61238 8.2794 5.34468 7.18342C6.07699 6.08745 7.11785 5.23324 8.33563 4.72882C9.55341 4.22439 10.8934 4.09241 12.1862 4.34957C13.479 4.60672 14.6665 5.24145 15.5986 6.1735C16.5306 7.10555 17.1653 8.29306 17.4225 9.58585C17.6796 10.8786 17.5477 12.2186 17.0432 13.4364C16.5388 14.6542 15.6846 15.6951 14.5886 16.4274C13.4927 17.1597 12.2041 17.5505 10.886 17.5505C9.11849 17.5505 7.42334 16.8484 6.1735 15.5986C4.92366 14.3487 4.22151 12.6536 4.22151 10.886Z"
                                    fill="black"/>
                            </svg>
                        </div>
                        {open && (
                            <>
                                <div className='modal' onClick={() => {
                                    setOpen(false)
                                }}></div>

                                <div className='overflow-bg'>

                                    <form>
                                        <div className="flex">


                                            <div className="relative w-full flex justify-center">
                                                <input type="search" id="search-dropdown"
                                                       className='w-full max-w-[955px] h-[120px] rounded-l-[20px] pl-[60px]'
                                                       placeholder="Search Mockups, Logos, Design Templates..."
                                                       required />
                                                    <button type="submit"
                                                            className='p-[35px] bg-[#000] rounded-r-[20px]'
                                                            >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                                            <path d="M43.7513 43.7501L34.4055 34.3876M39.5846 21.8751C39.5846 26.5716 37.7189 31.0758 34.398 34.3968C31.077 37.7177 26.5728 39.5834 21.8763 39.5834C17.1798 39.5834 12.6756 37.7177 9.35462 34.3968C6.03366 31.0758 4.16797 26.5716 4.16797 21.8751C4.16797 17.1785 6.03366 12.6744 9.35462 9.3534C12.6756 6.03244 17.1798 4.16675 21.8763 4.16675C26.5728 4.16675 31.077 6.03244 34.398 9.3534C37.7189 12.6744 39.5846 17.1785 39.5846 21.8751V21.8751Z" stroke="white" stroke-width="3" stroke-linecap="round"/>
                                                        </svg>
                                                    </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </>

                        )}


                    </div>
                </div>

            </header>


        </>
    )
}


export default Header