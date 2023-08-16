import AuthorInfo from "../components/authorSinglePage/authorInfo";
import {useParams} from "react-router-dom";
import AuthorBooks from "../components/authorSinglePage/authorBooks";

const AuthorSinglePage = () => {
    const { authorId } = useParams<{ authorId: string }>();
    return (
        <>

            <AuthorInfo />
            <AuthorBooks id={ authorId} />

        </>
    )
}

export default AuthorSinglePage