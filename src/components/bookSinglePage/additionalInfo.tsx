import {useParams} from "react-router-dom";
import {BooksData} from "../../mockData/BookData/booksData";

const AdditionalInfo = () =>{

    const {bookId} = useParams<{ bookId: any }>();

    const bookDetails = BooksData.find((item) => {
        return item.id == bookId;
    })



    return  (

        <>
            {bookDetails ? (
                <div className='w-full max-w-[559px] 3xl:max-w-[450px]'>
                    <h2 className='text-xl font_semibold text-black mb-[30px] mt-[100px]'>Լրացուցիչ
                        տեղեկություն</h2>
                    <div className='flex flex-col gap-[25px] '>
                        {bookDetails.attributes && bookDetails.attributes.map((item) => {
                            return (
                                <div
                                    className='flex items-center gap-[18px] justify-between border-dashed border-b-[1px] border-[#ccc]'>
                                    <p className='bg-white text-black text-base font_semibold relative top-[10px] pr-[15px]'>{item.key}</p>
                                    <span
                                        className='text-black text-base font-normal pl-[15px] relative top-[10px] bg-white'>{item.value}</span>
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

        </>

    )
}

export default AdditionalInfo