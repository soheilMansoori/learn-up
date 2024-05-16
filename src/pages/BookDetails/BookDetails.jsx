import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import BackToTop from "../../components/BackToTop/BackToTop";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import BookOverview from "./components/BookOverview/BookOverview";
import BookTabs from "./components/BookTabs/BookTabs";
import SimilarBooks from "./components/SimilarBooks/SimilarBooks";

export default function BookDetails() {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data } = useQuery([`book-details-${id}`], () => fetch(`${process.env.REACT_APP_BASE_URL}/books/${id}`).then(res => {
        if (res.status === 404) {
            navigate("/404")
        }
        return res.json()
    }));
    const { data: similarBooks } = useQuery([`similar-books-for-book-${id}`], () => fetch(`${process.env.REACT_APP_BASE_URL}/books?id_ne=${id}`).then(res => res.json()));
    const { data: comments } = useQuery([`book-comments-${id}`], () => fetch(`${process.env.REACT_APP_BASE_URL}/comments?bookId=${id}&_embed=user`).then(res => res.json()));
    return (
        <>
            <Navbar />
            <BookOverview {...data} />
            <BookTabs {...data} comments={comments} />
            <SimilarBooks similarBooks={similarBooks} />
            <BackToTop />
            <NewsLetter />
            <Footer />
        </>
    )
}
