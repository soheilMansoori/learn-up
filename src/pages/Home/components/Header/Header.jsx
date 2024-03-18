import { Link } from 'react-router-dom'
import Typewriter from "typewriter-effect";
import './Header.css'

export default function Header() {
    return (
        <div className="image-cover hero_banner shadow bg-light">
            <div className="container">
                {/* Type  */}
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="banner-search-2 transparent">
                            <h1 className="big-header-capt cl_2 mb-3 f_2">
                                <Typewriter
                                    onInit={typeWriter => {
                                        typeWriter
                                            .typeString("بزرگترین شبکه تدریس خصوصی در ایران !!!")
                                            .start()
                                            .pauseFor(2000)
                                            .deleteAll()
                                    }}
                                    options={{
                                        loop: true,
                                    }} />
                            </h1>
                            <p>بهترین پلتفرم یادگیری و دوره های آموزشی که با مناسب ترین قیمت توسط مدرسین مجرب آموزش داده می شود تا به شما در کسب مهارت های جدید کمک کند.</p>
                            <div className="mt-4">
                                <Link to="/" className="btn btn-modern dark carousel">
                                    ثبت نام کنید!
                                    <span>
                                        <i className="fa fa-arrow-left" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="flixio">
                            <img className="img-fluid" src="./images/Home/Header/Header.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
