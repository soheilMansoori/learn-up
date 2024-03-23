import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import BestTeachers from "./components/BestTeachers/BestTeachers";

export default function AboutUs() {
    return (
        <>
            <Navbar />
            <Breadcrumb title='درباره ما چه میگویند؟' pageName='درباره ما' />
            <BestTeachers />
            <Footer />
        </>
    )
}
