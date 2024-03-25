import './BookOverview.css';

export default function BookOverview() {
    return (
        <section className="pr_detail">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="woocommerce single_product quick_view_wrap">
                            <div className="woo-single-images">
                                <div className="feature-style-single">
                                    <img src="/images/books/book-1.jpg" alt="product-book-06" width="570" />
                                </div>
                            </div>
                            <div className="summary entry-summary">
                                <div className="woo_inner">
                                    <div className="shop_status sell">جدید</div>
                                    <h2 className="woo_product_title">
                                        <a href="#">کتاب تست شیمی دوازدهم جامع خیلی سبز</a>
                                    </h2>
                                    <ul className="woo_info">
                                        <li><strong>دسته بندی: </strong>متوسطه دوم</li>
                                        <li><strong>کد: </strong>#CDP0147</li>
                                    </ul>
                                    <div className="woo_price_rate">
                                        <div className="woo_rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="woo_price_fix">
                                            <h3 className="mb-0 theme-cl">149000 تومان</h3>
                                        </div>
                                    </div>
                                    <div className="woo_short_desc">
                                        <p>برای بسیاری از معلمان دانشجو، چشم انداز مواجهه با اولین تجربه کلاسی خود بسیار زیاد است. این کتاب دیدگاهی واقع گرایانه از آنچه در کلاس با آن ها روبرو خواهد شد ارائه می دهد، اما همچنین مهارت هایی را که برای تبدیل شدن به معلمان حرفه ای و متفکر به آن ها نیاز دارند، ارائه می دهد.</p>
                                    </div>
                                    <div className="quantity-button-wrapper">
                                        <label>تعداد</label>
                                        <div className="quantity">
                                            <input type="number" className="form-control qty" min="1" value="1" title="Qty" placeholder="" inputmode="numeric" />
                                        </div>
                                    </div>
                                    <div className="woo_buttons">
                                        <button type="submit" className="btn btn-theme2">افزودن به سبد</button>
                                        <a href="#" className="btn woo_btn_light" data-toggle="tooltip" data-placement="top" title="" data-original-title="افزودن به علاقه مندی"><i className="fa fa-heart"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
