import {useParams} from "react-router-dom";
import {AuthorsData} from "../../mockData/authorsData/authorsData";
import React from "react";
import AuthorBooks from "./authorBooks";

const AuthorInfo = () => {
    const {authorId} = useParams<{ authorId: any }>();

    const authorDetails = AuthorsData.find((item) => {
        return item.id == authorId;
    })


    return  (

        <div className='content '>
            {authorDetails ? (
                <div className='flex gap-[50px] bg-[#F1F6F9] py-[60px] pl-[60px] rounded-[20px]'>
                    <div className='bg-white rounded-[100%] w-full max-w-[250px] h-[250px]'>
                        <img src={authorDetails.images} alt={authorDetails.alt} className='w-full'/>
                    </div>
                    <div className='w-full max-w-[1245px]'>
                        <h1 className='text-[38px] font-bold mb-[20px] '>{authorDetails.lastName}{authorDetails.firsName}</h1>
                        <p className='text-base font-normal leading-[32px]'>{authorDetails.description}</p>
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

export default AuthorInfo