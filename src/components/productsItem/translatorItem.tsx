import {Link} from "react-router-dom";
import BookSectionImg from "../../assets/images/book-section-img.png";

const TranslatorItem = ({item}:{item:any}) => {

    return (

        <div className=' '>
            <Link to={`/translators/${item.id}`}  >

                <div className=' '>
                    <div className='w-full max-w-[230px] rounded-[10px]  bg-[#D8DFE9]'>
                        <img  src={item.images}  alt="" className='w-full h-full'/>
                    </div>
                    <p className='text-lg font-extrabold text-black'>{item.name}</p>
                </div>

            </Link>
        </div>


    )
}

export default TranslatorItem