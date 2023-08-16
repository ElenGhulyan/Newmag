import {Link} from "react-router-dom";
import BookSectionImg from "../../assets/images/book-section-img.png";

const AuthorItem = ({item}:{item:any}) => {

    return (

            <div className='py-[20px] pl-[20px] w-full max-w-[533px] bg-[#F1F6F9] rounded-[20px]'>
                <Link to={`/authors/${item.id}`}  >

                    <div className='flex gap-[40px] items-center'>
                        <div className='w-full max-w-[200px] rounded-[100%]  bg-[#fff]'>
                            <img  src={item.images}  alt="" className='w-full h-full'/>
                        </div>
                        <div className='grid gap-[2px]'>
                            <h2 className='text-[38px] font_semibold text-black'>{item.firsName}</h2>
                            <p className='text-[38px] font-extrabold text-black '>{item.lastName}</p>
                        </div>

                    </div>

                </Link>
            </div>


    )
}

export default AuthorItem