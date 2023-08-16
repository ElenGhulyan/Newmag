import {useParams} from "react-router-dom";
import React from "react";
import {TranslatorsData} from "../../mockData/translatorData/translatorsData";

const TransletorSingel = () => {
    const {translatorId} = useParams<{ translatorId: any }>();
    const transletorData = TranslatorsData.find((item:any) => {
        return item.id == translatorId;
    })

    return  (

        <div className='content '>
            {transletorData ? (
                <div className='flex gap-[100px] py-[60px] '>
                    <div className=' w-full bg-[#D8DFE9] max-w-[333px] h-[540px]'>
                        <img src={transletorData.images} alt={transletorData.alt} className='w-full'/>
                    </div>
                    <div className='w-full max-w-[1245px]'>
                        <h1 className='text-[38px] font-bold mb-[30px] '>{transletorData.name}</h1>
                        <p className='text-base font-normal leading-[32px]'>{transletorData.description}</p>
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

export default TransletorSingel