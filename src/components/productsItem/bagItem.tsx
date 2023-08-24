import bagImg from "../../assets/images/bag-img.png";
import {BagData} from "../../mockData/HomeData/bagdata";

const BagItem = ({item}:{item:any}) => {
    return (
        <>
                  <div className='flex w-full max-w-[540px] border border-solid border-[#C4D7E2] rounded-[20px] 2xl:max-w-[390px] '>
                      <div className='w-full max-w-[250px] bg-[#D9D9D9] px-[17px] pt-[20px] pb-[32px] rounded-l-[20px] 2xl:max-w-[170px] 2xl:pt-[30px]'>
                          <div className='w-full max-w-[215px] 2xl:max-w-[150px]'>
                              <img src={item.src} alt={item.alt} className='w'/>
                          </div>
                      </div>

                      <div className='px-[30px] py-[40px] 2xl:max-w-[220px] 2xl:py-[20px]'>
                          <h2 className='text-black text-[22px] leading-[3rem] font-bold leading-[36px]'>{item.title}</h2>
                          <p className='text-orange-600 text-[18px] font-bold mt-[15px] mb-[58px] 2xl:mb-[20px]'>{item.price}</p>
                          <button className='px-[80px] py-[10px] rounded-[10px] border border-solid border-[#000] 2xl:px-[60px] '>
                              Դիտել
                          </button>
                      </div>
                  </div>
        </>
    )
}
export default BagItem