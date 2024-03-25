import './CourseIntroduction.css';

export default function CourseIntroduction() {
    return (
        <div className="ed_detail_head">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-5">
                        {/* video */}
                        <div className="property_video">
                            <div className="thumb">
                                <img className="pro_img img-fluid w100" src="assets/img/course-1.jpg" />
                                <div className="overlay_icon">
                                    <div className="bb-video-box">
                                        <div className="bb-video-box-inner">
                                            <div className="bb-video-box-innerup">
                                                <a href="#" className="theme-cl"><i className="fa fa-play" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* course title */}
                    <div className="col-lg-8 col-md-7">
                        <div className="ed_detail_wrap">
                            <ul className="cources_facts_list">
                                <li className="facts-1">وردپرس</li>
                                <li className="facts-5">طراحی سایت</li>
                            </ul>
                            <div className="ed_header_caption">
                                <h2 className="ed_title">دوره آموزش پلاگین نویسی وردپرس</h2>
                                <ul>
                                    <li><i className="fa fa-calendar" />10 - 20 هفته</li>
                                    <li><i className="fa fa-forward" />102 دوره</li>
                                    <li><i className="fa fa-user" />502 هنرجو</li>
                                </ul>
                            </div>
                            <div className="ed_header_short">
                                <p>افزونه یا پلاگین (Plugin) به معنای نرم افزاری می باشد که به برنامه اصلی امکانات جانبی و مکمل را اضافه می‌کند. در وردپرس افزونه‌ها، امکاناتی را به این نرم افزار تحت وب افزوده و باعث افزایش کارآیی آن می‌شوند. اما از آنجایی که گنجاندن امکانات بیشتر باعث سنگین‌تر شدن آن می‌شود.</p>
                            </div>
                            <div className="ed_rate_info">
                                <div className="star_info">
                                    <i className="fas fa-star filled"></i>
                                    <i className="fas fa-star filled"></i>
                                    <i className="fas fa-star filled"></i>
                                    <i className="fas fa-star filled"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="review_counter">
                                    <strong className="high">4.7</strong> 3572 امتیاز
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
