import BannerHomePage from "../components/home/banner";
import BookGallery from "../components/home/bookGallery";
import Media from "../components/home/media";
import Observable from "../components/home/observable";
import Catalog from "../components/home/catalog";
import Bags from "../components/home/bags";
import MediaSharing from "../components/home/mediaSharing";
import Reviews from "../components/home/reviews";


const HomePage = () => {

    return (
        <>
            <BannerHomePage />
            <BookGallery />
            <Media />
            <Observable />
            <Catalog />
            <Bags />
            <MediaSharing/>
            <Reviews />
        </>
    )
}

export default HomePage;