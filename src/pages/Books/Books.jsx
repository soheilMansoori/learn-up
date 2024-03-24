import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import BackToTop from '../../components/BackToTop/BackToTop';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Footer from '../../components/Footer/Footer';
import BookBox from '../../components/‌Books/BookBox/BookBox';
import FilterMenu from './components/FilterMenu/FilterMenu';
import FilterButtons from './components/Filter‌Btns/FilterButtons';

export default function Books() {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const closeFilterMenu = () => setIsShowMenu(false);
    const openFilterMenu = () => setIsShowMenu(true);
    const handleSearch = (searchValue) => {
        console.log('searchValue => ', searchValue);
    }
    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);

    // // Get all search params
    // const params = {};
    // for (let [key, value] of searchParams.entries()) {
    //     params[key] = value;
    // }
    // console.log(params);

    return (
        <>
            <Navbar />
            <Breadcrumb title='کتاب ها' pageName='کتاب ها' />
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
                                btnTitle='کتاب آموزشی'
                                dropdownItems={[{ id: 1, name: "جدید" }, { id: 2, name: "ویژه" }, { id: 3, name: "پر مخاطب" }]}
                                openFilterMenu={openFilterMenu}
                            />
                            {/* books wrapper */}
                            <div className="row">

                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <BookBox />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <BookBox />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <BookBox />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <BookBox />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <BookBox />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <BookBox />
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
