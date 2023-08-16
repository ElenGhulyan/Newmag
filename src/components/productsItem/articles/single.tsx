import {useParams} from "react-router-dom";
import {TranslatorsData} from "../../../mockData/translatorData/translatorsData";
import React from "react";
import {ArticlesData} from "../../../mockData/articlesData/articlesData";

const ArticleSinglePage = () => {

    const {articleId} = useParams<{ articleId: any }>();
    const articleData = ArticlesData.find((item:any) => {
        return item.id == articleId;
    })



    return  (

        <div className='content '>
            {articleData ? (
                <div className='flex gap-[100px] py-[60px] '>
                    <div className=' w-full bg-[#D8DFE9] max-w-[333px] h-[540px]'>
                        <img src={articleData.img} alt={articleData.alt} className='w-full'/>
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

export default ArticleSinglePage