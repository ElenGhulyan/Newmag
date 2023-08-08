import mediaImages from '../../assets/images/media-images.png';
import {HomeMediaData} from "../../mockData/HomeData/homeMediaData";
import MediaItem from "../productsItem/mediaItem";
import SectionTitle from "../SectioTitle";
import {CatalogData} from "../../mockData/HomeData/catalogData";
import CatalogsItem from "../productsItem/catalogsItem";

const Media = () => {
    return (
        <>
            <section className='content '>
                <div className='mt-[100px]'>
                    <SectionTitle title='Բոլոր հոդվածները' url='docs' heading={'Հոդվածներ'} />
                </div>
                <div className='flex gap-[41px] justify-between mt-[60px]'>
                    {
                        HomeMediaData.map((item) => {
                            return  <MediaItem   item={item} />
                        })
                    }

                </div>
            </section>
        </>
    )
}
export default Media