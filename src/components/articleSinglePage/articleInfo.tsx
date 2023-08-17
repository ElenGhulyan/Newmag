
import {ArticlesData} from "../../mockData/articlesData/articlesData";
import ArticleIte from "../productsItem/articles/articleItem";
import React from "react";
import {useParams} from "react-router-dom";

import parse from 'html-react-parser';

import FacebookIcon from "../../assets/icons/facebook-black.svg";
import TwitterIcon from "../../assets/icons/twwiter-black.svg";
import LinkedinIcon from "../../assets/icons/linkedin-black.svg";
import EmailIcon from "../../assets/icons/email-logo.svg";

const ArticleInfo = () => {

    const {articleId} = useParams<{ articleId: any }>();
    const articleData = ArticlesData.find((item:any) => {
        return item.id == articleId;
    })

    return(
        <div className='px-[338px]'>
            {articleData && (
                <div className=' gap-[100px] py-[60px] '>
                    <h1 className='text-3xl leading-[44px] text-black font_semibold'>{articleData.title}</h1>
                    <p className='text-base font-normal text-[#4C4C4C] pt-[10px]'>{articleData.data}</p>
                    <div className=' w-full bg-[#D8DFE9] max-w-[1000px] h-[500px] my-[40px]'>
                        <img src={articleData.img} alt={articleData.alt} className='w-full h-full'/>
                    </div>

                    <div className='flex bg-[#F1F6F9] px-[40px] py-[40px] mb-[40px] gap-[40px] rounded-[20px]'>

                        <div className='border-r-2 border-[#D9D9D9] w-full max-w-[272px] pr-[43px] px-[40px] py-[40px]'>
                            <p className='text-base font-normal text-black '>Տարածել այս հոդվածը՝</p>
                            <div className='flex gap-[20px]'>
                                <img src={FacebookIcon} alt=""/>
                                <img src={TwitterIcon} alt=""/>
                                <img src={LinkedinIcon} alt=""/>
                                <img src={EmailIcon} alt=""/>
                            </div>
                        </div >

                        <p className='w-full max-w-[654px]'>{articleData.shortDesc}</p>
                    </div>

                    {articleData.description && parse(articleData.description)}

                    <div >
                        <h2 className='text-3xl font_semibold leading-[44px] text-black'>Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է:</h2>

                        <div className='w-full grid grid-cols-3 gap-[30px] mt-[65px]'>
                            {ArticlesData.map((item)=>{
                                return (
                                    <ArticleIte item={item} />

                                )
                            }).splice(0,3)}
                        </div>
                    </div>
                    <div >
                        {articleData.description2 && parse(articleData.description2)}
                    </div>


                </div>
            ) }

        </div>
    )
}

export default ArticleInfo