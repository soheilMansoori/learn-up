import Navbar from "../../components/Navbar/Navbar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import BestTeachers from "./components/BestTeachers/BestTeachers";
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Footer from "../../components/Footer/Footer";
import StudentsComments from "./components/StudentsComments/StudentsComments";

export default function AboutUs() {
    return (
        <>
            <Navbar />
            <Breadcrumb title='درباره ما چه میگویند؟' pageName='درباره ما' />
            <BestTeachers />
            <StudentsComments />
            <NewsLetter />
            <Footer />
        </>
    )
}
