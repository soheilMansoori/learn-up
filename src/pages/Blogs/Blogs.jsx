import Navbar from '../../components/Navbar/Navbar';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import BackToTop from '../../components/BackToTop/BackToTop';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Footer from '../../components/Footer/Footer';
import BlogBox from '../../components/‌Blogs/BlogBox/BlogBox';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

export default function Blogs() {
    const pageSize = 6;
    const { mainData: blogs, hasNextPage, fetchNextPage, isFetching } = useInfiniteScroll(['blogs-infinite'], ({ pageParam = 1 }) => fetch(`${process.env.REACT_APP_BASE_URL}/blogs?_page=${pageParam}&_per_page=${pageSize}&_embed=teacher`).then(res => res.json()));

    return (
        <>
            <Navbar />
            <Breadcrumb title='وبلاگ ها' pageName='وبلاگ ها' />
            <section className="pt-0">
                <div className="container">
                    <div className="row">
                        {blogs?.length ? (
                            blogs.map((blog, index) => (
                                <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
                                    <BlogBox {...blog} />
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
                                                    دریافت
                                                </>
                                            ) : 'وبلاگ دیگری وجود ندارد'}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section >
            <BackToTop />
            <NewsLetter />
            <Footer />
        </>
    )
}
