
import CatalogsItem from "../productsItem/catalogsItem";
import {CatalogData} from "../../mockData/HomeData/catalogData";
import SectionTitle from "../SectioTitle";


const Catalog = () => {
    return (
        <>
            <section >
                <div className='content '>
                    <div className='pt-[100px]'>
                        <SectionTitle title='Բոլոր ապրանքները' url='docs' heading={'Մատենաշարեր'} />
                    </div>
                    <div className='flex flex-wrap  gap-[60px] pb-[100px] mt-[60px]  2xl:justify-center 2xl:gap-[30px]'>
                        {
                            CatalogData.map((item) => {
                                return  <CatalogsItem  item={item} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Catalog;