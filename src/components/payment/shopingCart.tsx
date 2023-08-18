import { useEffect, useState } from "react";
import PlusIcon from '../../assets/images/svg/plus.svg'
import MinusIcon from '../../assets/images/svg/min-icon.svg'
import CloseIcon from '../../assets/images/svg/closeIcon.svg'

interface ShoppingCartProps {
    cartItems: {
        id: number,
        title: string,
        image: string,
        price: number,
        count: number,
        author: Author,
    }[];
}

interface Author {
    name: string;
}

const ShopingCart: React.FC<ShoppingCartProps> = ({ cartItems }) => {
    const [cartItemsState, setCartItemsState] = useState<any>(
        JSON.parse(localStorage.getItem("cart") || "[]")
    );

    // const clearCart = () => {
    //     localStorage.removeItem("cart");
    //     setCartItemsState([]);
    // };

    const clearCartItem = (itemId: number) => {
        const updatedCartItems = cartItemsState.filter((item: any) => item.id !== itemId);
        updateCartItems(updatedCartItems);
    };
    const updateCartItems = (updatedCartItems: any) => {
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        setCartItemsState(updatedCartItems);
    };



    const incrementPluseCount = (itemId: number) => {
        const updatedCartItems = cartItemsState.map((item: any) => {
            if (item.id === itemId) {
                const updatedCount = item.count + 1;
                const updatedPrice = item.price * updatedCount;
                return { ...item, count: updatedCount, price: updatedPrice };
            }
            return item;
        });
        updateCartItems(updatedCartItems);
    };

    const incrementMinCount = (itemId: number) => {
        const updatedCartItems = cartItemsState.map((item: any) => {
            if (item.id === itemId) {
                if (item.count > 1) {
                    const updatedCount = item.count - 1;
                    const updatedPrice = item.price / updatedCount;
                    return { ...item, count: updatedCount, price: updatedPrice };
                }
            }
            return item;
        });
        updateCartItems(updatedCartItems);
    };


    return (
        <div className='w-full max-w-[1116px]'>
            {cartItemsState.map((item: any) => (


                <div key={item.id} className='rounded-[20px] mb-[15px]  cart-item bg-white flex items-center justify-between py-[30px] px-[30px]'>
                <div className='w-full max-w-[61px] h-[100px]'>
                            <img src={item.image} alt={item.alt} className='w-full'/>
                        </div>

                        <div className='text-center'>
                            <h3 className='text-xl text-black font-bold mb-[10px]'>{item.title}</h3>
                            {item.author && <p className='text-base font-normal text-[#4C4C4C]' >{item.author.name}</p>}
                        </div>
                    <div>
                        <div className='flex gap-[34px] items-center'>
                            <div className=''>
                                <img src={MinusIcon} alt="minus icon"
                                     onClick={() => incrementMinCount(item.id)}
                                />
                            </div>
                            <p className='text-[#4C4C4C] text-xl font_semibold'> {item.count} </p>
                            <div>
                                <img
                                    src={PlusIcon}
                                    onClick={() => incrementPluseCount(item.id)}
                                    alt="plus icon"
                                />
                            </div>
                        </div>
                        <span className='mt-[13px] text-[#4C4C4C] text-xs font-normal text-center'>Հասանելի է 25 հատ</span>
                    </div>

                    <div>
                        <h2 className='text-xl font-normal text-black leading-[30px]'> {item.price}</h2>
                    </div>

                    <div onClick={() => clearCartItem(item.id)}>
                        <img src={CloseIcon} alt="close icon"/>
                    </div>

                    {/*{item.title} {item.price} {item.count}*/}

                </div>

            ))}

            <div className='flex justify-end gap-[40px] mt-[40px]'>
                <input type="number" placeholder='Կոդը' className='placeholder:text-base placeholder:font-normal placeholder:text-[#4C4C4C]  w-full max-w-[105px] rounded-[10px] border border-[#D8DFE9] py-[12px] pl-[20px]'/>
                <button className='py-[14px] px-[37px] text-base text-center text-[#F34802]font-medium border border-[#F34802] rounded-[10px]'>Կիրառել արժեկտրոնը</button>
            </div>

            {/*<button className='bg-gray-400 text-white w-full max-w-[200px] rounded-[20px] mb-[20px] py-[5px]' onClick={clearCart}>Clear Cart</button>*/}
        </div>
    );
};
export default ShopingCart