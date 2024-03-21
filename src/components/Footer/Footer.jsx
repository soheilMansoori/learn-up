import './Footer.css'

export default function Footer() {
    return (
        <footer className="dark-footer skin-dark-footer">
            <div>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-3">
                            <div className="footer-widget">
                                <img src="/images/Footer/footer-logo.png" className="img-footer" />
                                <div className="footer-add">
                                    <p>تهران، خیابان سعادت آباد، خیابان کاج</p>
                                    <p>02188888888</p>
                                    <p>info@learnup.com</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3">
                            <div className="footer-widget">
                                <h4 className="widget-title">لینک مفید</h4>
                                <ul className="footer-menu">
                                    <li><a href="#">درباره ما</a></li>
                                    <li><a href="#">سوالات متداول</a></li>
                                    <li><a href="#">تسویه حساب</a></li>
                                    <li><a href="#">تماس با ما</a></li>
                                    <li><a href="#">وبلاگ</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3">
                            <div className="footer-widget">
                                <h4 className="widget-title">دسته بندی</h4>
                                <ul className="footer-menu">
                                    <li><a href="#">طراحی وب</a></li>
                                    <li><a href="#">شبکه و امنیت</a></li>
                                    <li><a href="#">برنامه نویسی وب</a></li>
                                    <li><a href="#">پایگاه داده</a></li>
                                    <li><a href="#">برنامه نویسی موبایل</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3">
                            <div className="footer-widget">
                                <h4 className="widget-title">راهنما و پشتیبانی</h4>
                                <ul className="footer-menu">
                                    <li><a href="#">اسناد</a></li>
                                    <li><a href="#">چت آنلاین</a></li>
                                    <li><a href="#">ارسال ایمیل</a></li>
                                    <li><a href="#">قوانین و شرایط</a></li>
                                    <li><a href="#">سوالات متداول</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-12">
                            <div className='row'>
                                <div>
                                    <img src="/images/Footer/symbols/enamad_logo.png" />
                                </div>
                                <div>
                                    <img src="/images/Footer/symbols/samandehi_logo.png" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row justify-content-between  align-items-center">

                        <div className="col-lg-6 col-md-6">
                            <p className="mb-0 flex align-items-center ">
                                توسعه داده شده با عشق توسط سهیل منصوری جهت رزومه
                                <i className='fa fa-heart mr-2 text-danger'></i>
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-6 text-left">
                            <ul className="footer-bottom-social">
                                <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}
