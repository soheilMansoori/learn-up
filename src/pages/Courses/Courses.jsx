import { useState } from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import FilterMenu from './components/FilterMenu/FilterMenu';
import FilterButtons from './components/FilterButtons/FilterButtons';
import CourseBox from "../../components/Courses/CourseBox/CourseBox";
import BackToTop from "../../components/BackToTop/BackToTop";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";

export default function Courses() {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const closeFilterMenu = () => setIsShowMenu(false);
    const openFilterMenu = () => setIsShowMenu(true);
    const handleSearch = (searchValue) => {
        console.log('searchValue => ', searchValue);
    }

    return (
        <>
            <Navbar />
            <Breadcrumb title='دوره ها' pageName='دوره ها' />
            <section className="pt-0">
                <div className="container">
                    {/* filter menu */}
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <FilterMenu
                                isShowMenu={isShowMenu}
                                closeFilterMenu={closeFilterMenu}
                                handleSearch={handleSearch}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            {/* filter btn */}
                            <FilterButtons
                                btnTitle='دوره های آموزشی'
                                dropdownItems={[{ id: 1, name: "جدید" }, { id: 2, name: "ویژه" }, { id: 3, name: "پر مخاطب" }]}
                                openFilterMenu={openFilterMenu}
                            />
                            {/* books wrapper */}
                            <div className="row">

                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <CourseBox />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <CourseBox />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <CourseBox />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <CourseBox />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <CourseBox />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <CourseBox />
                                </div>

                            </div>

                            {/* load more btn */}
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                                            <button type="button" className="btn btn-loader"><i className="fa fa-refresh ml-3"></i>فهرست کامل</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BackToTop />
            <NewsLetter />
            <Footer />
        </>
    )
}
