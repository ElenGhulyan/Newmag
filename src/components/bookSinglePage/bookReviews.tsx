import ReviewsImg from '../../assets/images/reviewsImg.svg';
import { useParams } from 'react-router-dom';
import { BooksData } from '../../mockData/BookData/booksData';
import {useState} from "react";

const BookReviews = () => {
    const { bookId } = useParams<{ bookId: any }>();
    const bookDetails = BooksData.find((item) => item.id == bookId);

    const [firstName, setFirstName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [formErrors, setFormErrors] = useState<{ firstName: string; email: string; comment: string }>({
        firstName: '',
        email: '',
        comment: ''
    });

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let errors: { firstName: string; email: string; comment: string } = {
            firstName: '',
            email: '',
            comment: ''
        };

        if (firstName.trim() === '') {
            errors.firstName = 'Անունը պարտադիր է';
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            errors.email = 'Էլեկտրոնային հասցեն սխալ է';
        }

        if (comment.trim() === '') {
            errors.comment = 'Կարծիքը պարտադիր է';
        }

        if (Object.keys(errors).length === 0) {
            setFirstName('');
            setEmail('');
            setComment('');
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <div className='content'>
            {bookDetails ? (
                <div className='flex my-[100px] justify-between'>
                    <div className=' max-w-[940px] w-full '>
                        <h2 className='text-[28px] font_semibold text-black'>
                            Կարծիքներ{' '}
                            <sub className='text-sm font-normal text-[#4C4C4C]'>
                                {bookDetails.reviews ? '(' + bookDetails.reviews.length +' Կարծիք) ' : 0}
                            </sub>
                        </h2>
                        <div className='mt-[60px] bg-[#F1F6F9] pt-[40px] pl-[36px] pb-[48px] rounded-[20px]'>
                            {bookDetails.reviews &&
                                bookDetails.reviews.map((review) => (
                                    <div className='flex gap-[14px] mb-[35px]' key={review.name}>
                                        <div className='w-full max-w-[70px]'>
                                            <img src={review.avatar} className='w-full' alt='' />
                                        </div>
                                        <div>
                                            <h4 className='text-base font-bold mr-[10px] mb-[10px]'>
                                                {review.name} <span className='font-normal text-sm text-[#4C4C4C] '>1 օր առաջ</span>
                                            </h4>
                                            <p className='text-[16px] leading-[28px] font-normal'>{review.comment}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className='w-full max-w-[640px] '>
                        <h2 className='mb-[60px] text-[28px] font_semibold text-black'>Թողնել կարծիք </h2>
                        <div className='px-[80px] py-[80px] bg-[#F1F6F9] rounded-[20px]'>

                            <form className='grid gap-[30px]' onSubmit={handleFormSubmit}>
                                <input
                                    placeholder="Անուն, Ազգանուն *"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className='py-[16px] pl-[22px] bg-white w-full max-w-[480px]'
                                />
                                {formErrors.firstName && <p className='text-red-500'>{formErrors.firstName}</p>}

                                <input
                                    placeholder="Էլեկտրոնային հասցե *
"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='py-[16px] pl-[22px] bg-white w-full max-w-[480px]'
                                />
                                {formErrors.email && <p className='text-red-500'>{formErrors.email}</p>}

                                <textarea
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    className='py-[16px] pl-[22px] w-full max-w-[480px] h-[205px] bg-white'
                                    placeholder='Կարծիք *'
                                />
                                {formErrors.comment && <p className='text-red-500'>{formErrors.comment}</p>}


                                <div className="flex items-center mb-4">
                                    <input id="default-checkbox" type="checkbox" value=""
                                           className="w-5 h-5  " />
                                        <label htmlFor="default-checkbox"
                                               className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Կարդացեք և համաձայնվեք օգտագործման պայմանների հետ</label>
                                </div>

                                <button
                                    type="submit"
                                    className='text-white text-base font-medium w-full max-w-[258px] py-[16px] px-[86px] bg-[#F34802] rounded-[10px]'
                                >
                                    Ուղղարկել
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

            ) : (
                <div className='flex gap-[40px] content '>
                    404 not found
                </div>
            )}
        </div>
    );
};

export default BookReviews;