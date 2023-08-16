import {BooksData} from '../../mockData/BookData/booksData'
import {useParams} from "react-router-dom";
import ObservableItem from "../productsItem/observableItem";


const SeeAlso = () =>{

    const {bookId} = useParams<{ bookId: any }>();
    const bookDetails = BooksData.find((item) => {
        return item.id == bookId;
    })
    const relatedBooks =BooksData.filter((item) => {
        return bookDetails?.category == item.category
    }).slice(0, 6);

    return (
        <div className='content'>
            <div   className='flex gap-[60px] pb-[100px] mt-[60px]'>
                {    relatedBooks.map((item)=>{
                    return(
                        <ObservableItem item={item} />
                    )
                })}
            </div>

        </div>
    )
}

export default SeeAlso