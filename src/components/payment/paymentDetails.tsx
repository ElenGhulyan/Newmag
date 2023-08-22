import React from 'react';
import { useCheckoutContext } from '../validation/CheckoutContext';
import errorMessages from '../../lang/am/messages.json';

const PaymentDetails: React.FC = () => {
    const { data, setData, invalidData,  setInvalidData} = useCheckoutContext();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        let errMsg = '';

        switch (name) {
            case "name": {
                if(value.length == 0) {
                    errMsg = errorMessages[name]["required"];
                }else if(value.length < 4) {
                    errMsg = errorMessages[name]["minLength"];
                } else if(value.length > 10) {
                    errMsg = errorMessages[name]["maxLength"];
                }
                break;
            }
            case "surname": {
                break;
            }
        }

        setInvalidData((prevData) => ({ ...prevData, [name]: errMsg }));
        setData((prevData) => ({ ...prevData, [name]: value }));
    };



    return (
        <>
            <div className='w-full max-w-[1116px] filter-box bg-white mt-[60px] mb-[100px] rounded-b-[20px]'>
                <h2 className='text-xl text-white py-[20px] pl-[60px] bg-[#F34802] rounded-t-[20px]'>Վճարման տվյալները</h2>
                <div className='py-[60px] px-[60px]'>
                    <div className='grid grid-cols-2 gap-[40px] mt-[60px] mb-[20px]'>

                        <div>
                            <input
                                className={invalidData.name != '' ? 'is-invalid py-[17px] pl-[20px] w-full max-w-[478px] border border-[#D8DFE9] rounded-[10px] placeholder:text-base placeholder:text-[#4C4C4C] placeholder:leading-[26px]' : 'py-[17px] pl-[20px] w-full max-w-[478px] border border-[#D8DFE9] rounded-[10px] placeholder:text-base placeholder:text-[#4C4C4C] placeholder:leading-[26px]'}
                                type='text'
                                name='name'
                                value={data.name}
                                onChange={handleInputChange}
                                placeholder='Անուն *'
                            />
                            <p>{invalidData.name}</p>
                        </div>


                        <div>
                            <input
                                className= { invalidData.surname != '' ? 'is-invalid py-[17px] pl-[20px] w-full max-w-[478px]  border border-[#D8DFE9] rounded-[10px] placeholder:text-base placeholder:text-[#4C4C4C] placeholder:leading-[26px]' : 'py-[17px] pl-[20px] w-full max-w-[478px] border border-[#D8DFE9] rounded-[10px] placeholder:text-base placeholder:text-[#4C4C4C] placeholder:leading-[26px]'}
                                type='text'
                                name='surname'
                                value={data.surname}
                                onChange={handleInputChange}
                                placeholder='Ազգանուն *' />
                            <p>{invalidData.surname}</p>
                            {/*{invalidData.surname && <p className="error-message">{invalidData.surname}</p>}*/}
                        </div>



                    </div>
                    <input
                        className=' py-[17px] pl-[20px] w-full max-w-[996px] border border-[#D8DFE9] rounded-[10px] placeholder:text-base placeholder:text-[#4C4C4C] placeholder:leading-[26px]'
                        type="text" placeholder='Ընկերության անվանումը (ըստ ընտրության)'/>
                    <div className="my-[20px] py-[17px] px-[20px] w-full max-w-[996px] border border-[#D8DFE9] rounded-[10px] placeholder:text-base placeholder:text-[#4C4C4C] placeholder:leading-[26px]">
                        <select className='w-full'>
                            <option>Material Tailwind HTML</option>
                            <option>Material Tailwind React</option>
                            <option>Material Tailwind Vue</option>
                            <option>Material Tailwind Angular</option>
                            <option>Material Tailwind Svelte</option>
                        </select>
                    </div>

                    <div className='grid grid-cols-3 gap-[40px] mb-[20px]'>
                        <input type="text" placeholder='Քաղաք/Վարչական շրջան *'
                               name='city'
                               value={data.city}
                               onChange={handleInputChange}
                               className={ invalidData.city != '' ? ' is-invalid py-[17px] pl-[20px] bg-white placeholder:text-[#4C4C4C] placeholder:leading-[26px] w-full max-w-[305px]  border border-[#D8DFE9] rounded-[10px]' :'py-[17px] pl-[20px] bg-white placeholder:text-[#4C4C4C] placeholder:leading-[26px] w-full max-w-[305px]  border border-[#D8DFE9] rounded-[10px]' }/>
                        <input type="text" placeholder='Տան համար և փողոց *'
                               name='street'
                               value={data.street}
                               onChange={handleInputChange}
                               className={ invalidData.street != '' ? ' is-invalid py-[17px] pl-[20px] bg-white placeholder:text-[#4C4C4C] placeholder:leading-[26px] w-full max-w-[305px]  border border-[#D8DFE9] rounded-[10px]' : 'py-[17px] pl-[20px] bg-white placeholder:text-[#4C4C4C] placeholder:leading-[26px] w-full max-w-[305px]  border border-[#D8DFE9] rounded-[10px]' }/>

                        <input type="text" placeholder='Բնակարան, կացարան և ալն․․․'
                               className='py-[17px] pl-[20px] bg-white placeholder:text-[#4C4C4C] placeholder:leading-[26px] w-full max-w-[305px]  border border-[#D8DFE9] rounded-[10px]'/>

                        <input type="text" placeholder='Փոստային կոդ *'
                               name='postalCode'
                               value={data.postalCode}
                               onChange={handleInputChange}
                               className={ invalidData.street != '' ? ' is-invalid py-[17px] pl-[20px] bg-white placeholder:text-[#4C4C4C] placeholder:leading-[26px] w-full max-w-[305px]  border border-[#D8DFE9] rounded-[10px]' : 'py-[17px] pl-[20px] bg-white placeholder:text-[#4C4C4C] placeholder:leading-[26px] w-full max-w-[305px]  border border-[#D8DFE9] rounded-[10px]' }/>
                        <input type="text"
                               placeholder='Հեռախոս *'
                               name='tell'
                               value={data.tell}
                               onChange={handleInputChange}
                               className={ invalidData.street != '' ? ' is-invalid py-[17px] pl-[20px] bg-white placeholder:text-[#4C4C4C] placeholder:leading-[26px] w-full max-w-[305px]  border border-[#D8DFE9] rounded-[10px]' : 'py-[17px] pl-[20px] bg-white placeholder:text-[#4C4C4C] placeholder:leading-[26px] w-full max-w-[305px]  border border-[#D8DFE9] rounded-[10px]'}/>
                        <input type="text"
                               placeholder='Էլեկտրենային հասցե *'
                               name='email'
                               value={data.email}
                               onChange={handleInputChange}
                               className={ invalidData.street != '' ? ' is-invalid py-[17px] pl-[20px] bg-white placeholder:text-[#4C4C4C] placeholder:leading-[26px] w-full max-w-[305px]  border border-[#D8DFE9] rounded-[10px]' : 'py-[17px] pl-[20px] bg-white placeholder:text-[#4C4C4C] placeholder:leading-[26px] w-full max-w-[305px]  border border-[#D8DFE9] rounded-[10px]' }/>

                    </div>

                    <div>
                        <textarea className=' w-full max-w-[996px] py-[17px] px-[20px] h-[205px] bg-white placeholder:text-[#4C4C4C] placeholder:leading-[26px]  border border-[#D8DFE9] rounded-[10px]' placeholder='Ձեր պատվերի մասին նշումներ, օրինակ, հատուկ նշումներ առաքման համար *'></textarea>

                    </div>

                    <div>
                        <p className='my-[20px] text-sm leading-[22px] font-normal '>Ձեր անձնական տվյալները կօգտագորշվեն ձեր պատվերը մշակոլու համար և այլ նպատակներով, որոնք նկարագրված են մեր
                            <a href="" className='text-[#F34802]'>Գիրք պատվիրելու պայմանները</a>-ում։</p>

                        <div className="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox"  className="w-5 h-5 accent-[#F34802]" value=""/>
                            <label htmlFor="default-checkbox"  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" >Կարդացեք
                                և համաձայնվեք օգտագործման պայմանների հետ</label></div>
                    </div>

                </div>


            </div>
        </>
    );
};

export default PaymentDetails;
