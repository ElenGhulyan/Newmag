import {Link, useParams} from "react-router-dom";


const ArticleIte = ({item}:{item:any}) => {


    return (
        <>
            <div className='px-[10px] py-[10px] border  rounded-[10px] bg-[#F1F6F9] '>
                <div className='w-full max-w-[282px]  m-auto'>
                    <Link to={`/articles/${item.id}`}  >
                        <img  src={item.img}  alt={item.alt} className='w-full h-[232px] object-cover '/>
                    </Link>
                </div>
                <div className='mt-[20px]'>
                    <h2 className='text-base leading-[30px] font-medium text-black '>{item.title} </h2>
                    <p className='text-sm  leading-[30px] font-medium text-[#4C4C4C] mt-[10px]'>{item.data}</p>
                </div>

            </div>


        </>
    )
}

export default ArticleIte