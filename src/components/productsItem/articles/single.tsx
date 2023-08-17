import {useParams} from "react-router-dom";
import {TranslatorsData} from "../../../mockData/translatorData/translatorsData";
import React, {useState} from "react";
import {ArticlesData} from "../../../mockData/articlesData/articlesData";
import ArticleInfo from "../../articleSinglePage/articleInfo";
import ArticleIte from "./articleItem";


const ArticleSinglePage = () => {






    return  (

        <div className='content '>
            <ArticleInfo />

            <div className='w-full grid grid-cols-5 gap-[30px] mt-[65px] mb-[100px]'>
                {ArticlesData.map((item)=>{
                    return (
                        <ArticleIte item={item} />

                    )
                }).splice(0,5)}
            </div>



        </div>

    )

}

export default ArticleSinglePage