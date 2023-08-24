import BookItem from "../productsItem/bookItem";
import {BooksData} from '../../mockData/BookData/booksData'
import Pagination from "../pagination";
import {useEffect, useState} from "react";
import ShopingCart from "../payment/shopingCart";


interface Book {
    id: number;
    title: string;
}
const Books = () => {

    const [items, SetItems] = useState<Book[]>(BooksData);

    return (
        <div className='content'>
            <div className='flex gap-[10px] items-center mb-[47px]'>
                <p className='text-[#4C4C4C] text-lg font-normal'>Գլխավոր</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                    <path d="M4.63091 1.93148C4.46687 2.09557 4.37472 2.31809 4.37472 2.55011C4.37472 2.78212 4.46687 3.00464 4.63091 3.16873L8.96216 7.49998L4.63091 11.8312C4.47152 11.9963 4.38332 12.2173 4.38532 12.4467C4.38731 12.6761 4.47933 12.8956 4.64156 13.0578C4.8038 13.2201 5.02326 13.3121 5.25268 13.3141C5.4821 13.3161 5.70313 13.2279 5.86816 13.0685L10.818 8.11861C10.9821 7.95452 11.0742 7.732 11.0742 7.49998C11.0742 7.26796 10.9821 7.04544 10.818 6.88136L5.86816 1.93148C5.70407 1.76744 5.48155 1.67529 5.24953 1.67529C5.01751 1.67529 4.79499 1.76744 4.63091 1.93148Z" fill="#4C4C4C" stroke="#4C4C4C" stroke-width="0.2"/>
                </svg>
                <span className='font_semibold text-lg text-[#F34802]'>Գրքեր </span>
            </div>

            <div className='flex justify-between'>
                <h1 className='text-3xl font_semibold '>Գրքեր</h1>
                <div className='flex gap-[30px] '>
                    <select className='py-[15px] px-[30px] border border-[#D8DFE9] rounded-[10px]'>
                        <option value="">Ժանր</option>
                        <option value="">Ժանր</option>
                        <option value="">Ժանր</option>
                    </select>

                    <select className='py-[15px] px-[30px] border border-[#D8DFE9] rounded-[10px]'>
                        <option value="">Հեղինակ</option>
                        <option value="">Հեղինակ</option>
                        <option value="">Հեղինակ</option>
                    </select>
                </div>
            </div>


            <div className='w-full grid grid-cols-6 gap-[30px] mt-[65px] 3xl:grid-cols-5 2xl:grid-cols-4 xl:gap-[15px] lg:grid-cols-3 md:grid-cols-2'>
                {
                    items.map((item) => {
                        return (
                            <BookItem item={item} />
                        )
                    })
                }

            </div>

            <Pagination data={BooksData} setActiveItems={(items:any)=>{
                SetItems(items)}} />



        </div>
    )
}

export default Books