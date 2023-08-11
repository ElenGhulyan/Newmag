import LoadMore from "./loadMore";

export default function SectionTitle({heading,title,url}:{heading:string,title:string,url:string}){

    return(
        <div className='flex justify-between '>
            <h2 className=' text-3xl not-italic font_semibold'>{heading} </h2>
        <LoadMore url={url} title={title} />
        </div>
    )

}