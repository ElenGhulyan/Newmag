import TransletorSingel from "../components/translators/single";
import AuthorBooks from "../components/authorSinglePage/authorBooks";
import {useParams} from "react-router-dom";


const TranslatorSinglePage = () => {
    const {translatorId} = useParams<{ translatorId: any }>();

    return (
        <>
           <TransletorSingel/>
            <AuthorBooks id ={translatorId} />

        </>
    )
}

export default TranslatorSinglePage;