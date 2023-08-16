import {useParams} from "react-router-dom";
import {AuthorsData} from "../../mockData/authorsData/authorsData";
import React from "react";

const AuthorBooks = ({id}:{id:any}) => {

    const authorDetails = AuthorsData.find((item) => {
        return item.id == id;
    })


    return  (

        <div className='content '>
            {authorDetails ? (
                <div className='mb-[100px] mt-[100px]'>
                   <h2 className='text-3xl font-normal mb-[60px]'>Հեղինակի գրքեր</h2>
                    <div className='flex gap-[40px] flex-wrap'>
                        {authorDetails.authorBook && authorDetails.authorBook.map((item)=>{
                            return (
                                <div className=''>
                                    <div className='w-full max-w-[230px] mb-[20px]'>
                                        <img src={item.img} alt={item.alt}/>
                                    </div>
                                    <h3 className='text-lg font-bold'>{item.title}</h3>
                                    <p className='text-base font-normal text-[#4C4C4C] my-[10px]'>{item.translator}</p>
                                    <span className='text-[#F34802] text-lg font-bold'>{item.price}</span>

                                    <div className='mt-[23px] w-full max-w-[230px] py-[10px] text-center border border-black rounded-[10px]'>
                                        <button className='text-base font-medium text-black'>Գնել</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>





                </div>




            ) : (
                <div className='flex gap-[40px] content '>
                    404 not found
                </div>
            ) }

        </div>

    )
}

export default AuthorBooks