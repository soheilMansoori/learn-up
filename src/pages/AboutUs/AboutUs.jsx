import Navbar from "../../components/Navbar/Navbar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import RoadMap from './components/RoadMap/RoadMap'
import BestTeachers from "./components/BestTeachers/BestTeachers";
import StudentsComments from "./components/StudentsComments/StudentsComments";
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Footer from "../../components/Footer/Footer";

export default function AboutUs() {
    return (
        <>
            <Navbar />
            <Breadcrumb title='درباره ما چه میگویند؟' pageName='درباره ما' />
            <RoadMap />
            <BestTeachers />
            <StudentsComments />
            <NewsLetter />
            <Footer />
        </>
    )
}
