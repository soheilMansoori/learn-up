import Navbar from '../../components/Navbar/Navbar';
import BackToTop from '../../components/BackToTop/BackToTop';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './NotFound.css'

export default function NotFound() {
    return (
        <>
            <Navbar />
            <section className="error-wrap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="text-center">
                                <img src="/images/NotFound/404.png" className="img-fluid" />
                                <p>شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                                <Link to="/" className="btn btn-theme">بازگشت به خانه</Link>
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
