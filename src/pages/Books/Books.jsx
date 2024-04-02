import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import BackToTop from '../../components/BackToTop/BackToTop';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Footer from '../../components/Footer/Footer';
import BookBox from '../../components/‌Books/BookBox/BookBox';
import FilterMenu from './components/FilterMenu/FilterMenu';
import FilterButtons from './components/Filter‌Btns/FilterButtons';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

export default function Books() {
    const pageSize = 8
    const { mainData: books = [], hasNextPage, fetchNextPage, isFetching, allItemsLength } = useInfiniteScroll(['books-infinite'], ({ pageParam = 1 }) => fetch(`${process.env.REACT_APP_BASE_URL}/books?_page=${pageParam}&_per_page=${pageSize}`).then(res => res.json()));
    const [isShowMenu, setIsShowMenu] = useState(false);
    const closeFilterMenu = () => setIsShowMenu(false);
    const openFilterMenu = () => setIsShowMenu(true);
    const handleSearch = (searchValue) => {
        console.log('searchValue => ', searchValue);
    }

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
                                allItemsLength={allItemsLength}
                                btnTitle='کتاب آموزشی'
                                dropdownItems={[{ id: 1, name: "جدید" }, { id: 2, name: "ویژه" }, { id: 3, name: "پر مخاطب" }]}
                                openFilterMenu={openFilterMenu}
                            />
                            {/* books wrapper */}
                            <div className="row">
                                {books.length ? (
                                    books.map((book) => (
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={book.id}>
                                            <BookBox {...book} />
                                        </div>
                                    ))
                                ) : null}
                            </div>

                            {/* load more btn */}
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                                            {isFetching ? (
                                                <>
                                                    <button type="button" className="btn btn-loader" disabled={true}>
                                                        <i className="fa fa-refresh ml-3" />
                                                        در حال دریافت
                                                    </button>
                                                </>
                                            ) : (
                                                <button type="button" className="btn btn-loader" onClick={fetchNextPage} disabled={!hasNextPage}>
                                                    {hasNextPage ? (
                                                        <>
                                                            <i className="fa fa-refresh ml-3" />
                                                            کتاب های بیشتر
                                                        </>
                                                    ) : 'کتاب دیگری وجود ندارد'}
                                                </button>
                                            )}
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
