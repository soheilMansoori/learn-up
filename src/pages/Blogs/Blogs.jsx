import Navbar from '../../components/Navbar/Navbar'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import BackToTop from '../../components/BackToTop/BackToTop'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Footer from '../../components/Footer/Footer'
import BlogBox from '../../components/‌Blogs/BlogBox/BlogBox'

export default function Blogs() {
    return (
        <>
            <Navbar />
            <Breadcrumb title='وبلاگ ها' pageName='وبلاگ ها' />
            <section className="pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <BlogBox />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <BlogBox />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <BlogBox />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <BlogBox />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <BlogBox />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <BlogBox />
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                                    <button type="button" className="btn btn-loader">
                                        <i className="fa fa-refresh ml-3" />
                                        فهرست کامل
                                    </button>
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
