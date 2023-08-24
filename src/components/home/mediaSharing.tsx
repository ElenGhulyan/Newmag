import MediaSharingItem from "../productsItem/mediaSharingItem";
import SectionTitle from "../SectioTitle";

const MediaSharing = () => {
    return (
        <section className='bg-[#010101] my-[70px]'>
            <div className='content unset-width '>
                <div className='text-[#fff]  '>
                    <SectionTitle title='Բոլոր հոդվածները' url='media' heading={'Մեդիալուսաբանում'} />
                </div>
                <div className='flex gap-[30px] flex-wrap 2xl:justify-center  mt-[60px]'>
                    <MediaSharingItem />
                </div>
            </div>

        </section>
    )
}
export default MediaSharing