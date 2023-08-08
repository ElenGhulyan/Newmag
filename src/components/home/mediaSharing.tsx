import MediaSharingItem from "../productsItem/mediaSharingItem";
import SectionTitle from "../SectioTitle";

const MediaSharing = () => {
    return (
        <section className='bg-[#010101] py-[70px]'>
            <div className='content '>
                <div className='text-[#fff]  '>
                    <SectionTitle title='Բոլոր հոդվածները' url='media' heading={'Մեդիալուսաբանում'} />
                </div>
                <div className='flex gap-[30px]  mt-[60px]'>
                    <MediaSharingItem />
                </div>
            </div>

        </section>
    )
}
export default MediaSharing