import Arca from '../../assets/images/svg/arca.svg'
import Idram from '../../assets/images/svg/idram.svg'
import Telcell from '../../assets/images/svg/telcell.svg'
import FcfPay from '../../assets/images/svg/fcfPay.svg'

const PaymentSystem = () => {

    return (
        <>

            <div className=' filter-box bg-white w-full max-w-[464px] h-[786px]'>
                <h3 className='text-xl font_semibold text-white py-[20px] px-[20px] bg-[#F34802] rounded-t-[20px]'>Այլ ծառայություններ</h3>

                <div>
                    <h4 className='px-[20px]  mt-[36px] mb-[20px] text-lg font_semibold text-black '>Փաթեթավորում</h4>

                    <div className='px-[20px] flex gap-[20px]'>
                        <div className='flex gap-[10px]'>
                            <input type="checkbox" id='noNecessary'/>
                            <label htmlFor="noNecessary" className='text-base font-normal leading-[24px]'>Հարկավոր չէ</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input type="checkbox" id='standard'/>
                            <label htmlFor="standard" className='text-base font-normal leading-[24px]'>Հարկավոր չէ</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input type="checkbox" id='premium'/>
                            <label htmlFor="premium" className='text-base font-normal leading-[24px]'>Պրեմիում</label>
                        </div>

                    </div>

                    <div className='mt-[53px] mb-[40px]'>
                        <h3 className='text-xl font_semibold text-white py-[20px] px-[20px] bg-[#F34802]'>Ձեր պատվերը</h3>
                        <div className='px-[20px] '>
                            <h4 className='mt-[40px] text-lg font_semibold text-black '>Վճարման եղանակ</h4>
                            <div className='flex gap-[16px] mt-[30px]'>
                                <div className='flex gap-[10px]'>
                                    <input type="checkbox" id='noNecessary'/>
                                    <label htmlFor="noNecessary">
                                        <img src={Arca} alt="Arca"/>
                                    </label>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <input type="checkbox" id='standard'/>
                                    <label htmlFor="standard">
                                        <img src={Idram} alt="iDram"/>
                                    </label>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <input type="checkbox" id='premium'/>
                                    <label htmlFor="premium">
                                        <img src={Telcell} alt="telcel"/>
                                    </label>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <input type="checkbox" id='premium'/>
                                    <label htmlFor="premium">
                                        <img src={FcfPay} alt="FcF Pay "/>
                                    </label>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className='grid gap-[20px] px-[20px] pt-[40px] border-t border-[#D8DFE9]' >
                        <div className='flex justify-between'>
                            <p className='text-lg font-normal'>Ընդամենը՝</p>
                            <p className='text-lg font-bold'>4800 ֏</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-lg font-normal'>Պրեմիում Փաթեթավորում՝</p>
                            <p className='text-lg font-bold'>1000 ֏</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-lg font-normal'>Առաքում՝</p>
                            <p className='text-lg font-bold'>Անվճար</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-lg font-normal'>Վճարման ենթակա՝՝</p>
                            <p className='text-lg font-bold'>14400֏</p>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default PaymentSystem