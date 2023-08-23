import {Link} from "react-router-dom";


const ReviewSubItem = ({item}:{item:any}) => {

    return (
         <>
             <div className='flex gap-[14px] mb-[35px]'>

                 <Link to={`/reviews/${item.id}/${item.id}`}>
                     <div>
                         <img src={item.avatar} alt=""/>
                     </div>
                 </Link>
                 <div>
                     <h4 className='text-base text-black font-bold mb-[10px]'>{item.name}</h4>
                     <p className='text-base font-normal  leading-[28px] text-black'>{item.comment}</p>
                 </div>

             </div>
         </>
    )
}

export default ReviewSubItem