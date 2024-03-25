import BackToTop from "../../components/BackToTop/BackToTop";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import BookOverview from "./components/BookOverview/BookOverview";
import BookTabs from "./components/BookTabs/BookTabs";
import SimilarBooks from "./components/SimilarBooks/SimilarBooks";

export default function BookDetails() {
    return (
        <>
            <Navbar />
            <BookOverview />
            <BookTabs />
            <SimilarBooks />
            <BackToTop />
            <NewsLetter />
            <Footer />
        </>
    )
}
