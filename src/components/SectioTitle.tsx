import LoadMore from "./loadMore";

export default function SectionTitle({heading,title,url}:{heading:string,title:string,url:string}){

    return(
        <div className='flex justify-between sm:flex-col-reverse '>
            <h2 className=' text-3xl not-italic font_semibold md:text-[22px] sm:text-[24px] sm:mt-[60px] sm:pl-[15px]'>{heading} </h2>
        <LoadMore url={url} title={title} />
        </div>
    )

}