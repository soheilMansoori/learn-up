import './CommentBox.css';

export default function CommentBox() {
    return (
        <div className="all-comments">
            <h3 className="comments-title">5 دیدگاه</h3>
            <div className="comment-list">
                <ul>
                    <li className="article_comments_wrap">
                        <article>
                            <div className="article_comments_thumb">
                                <img src="assets/img/user-1.jpg" />
                            </div>
                            <div className="comment-details">
                                <div className="comment-meta">
                                    <div className="comment-left-meta">
                                        <h4 className="author-name">مسعود راد <span className="selected"><i className="fas fa-bookmark"></i></span></h4>
                                        <div className="comment-date">19شهریور 1399</div>
                                    </div>
                                    <div className="comment-reply">
                                        <a href="#" className="reply"><span className="icona"><i className="ti-back-right"></i></span> پاسخ</a>
                                    </div>
                                </div>
                                <div className="comment-text">
                                    <p>در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                                </div>
                            </div>
                        </article>
                        <ul className="children">
                            <li className="article_comments_wrap">
                                <article>
                                    <div className="article_comments_thumb">
                                        <img src="assets/img/user-2.jpg" />
                                    </div>
                                    <div className="comment-details">
                                        <div className="comment-meta">
                                            <div className="comment-left-meta">
                                                <h4 className="author-name">بنفشه عظیمی</h4>
                                                <div className="comment-date">20آذر 1399</div>
                                            </div>
                                            <div className="comment-reply">
                                                <a href="#" className="reply"><span className="icons"><i className="ti-back-right"></i></span> پاسخ</a>
                                            </div>
                                        </div>
                                        <div className="comment-text">
                                            <p>با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                                        </div>
                                    </div>
                                </article>
                                <ul className="children">
                                    <li className="article_comments_wrap">
                                        <article>
                                            <div className="article_comments_thumb">
                                                <img src="assets/img/user-4.jpg" />
                                            </div>
                                            <div className="comment-details">
                                                <div className="comment-meta">
                                                    <div className="comment-left-meta">
                                                        <h4 className="author-name">نیلوفر احمدی</h4>
                                                        <div className="comment-date">20دی 1399</div>
                                                    </div>
                                                    <div className="comment-reply">
                                                        <a href="#" className="reply"><span className="icons"><i className="ti-back-right"></i></span> پاسخ</a>
                                                    </div>
                                                </div>
                                                <div className="comment-text">
                                                    <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                                </div>
                                            </div>
                                        </article>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="article_comments_wrap">
                        <article>
                            <div className="article_comments_thumb">
                                <img src="#" />
                            </div>
                            <div className="comment-details">
                                <div className="comment-meta">
                                    <div className="comment-left-meta">
                                        <h4 className="author-name">احسان محمدی</h4>
                                        <div className="comment-date">24اسفند 1399</div>
                                    </div>
                                    <div className="comment-reply">
                                        <a href="#" className="reply"><span className="icons"><i className="ti-back-right"></i></span> پاسخ</a>
                                    </div>
                                </div>
                                <div className="comment-text">
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                                </div>
                            </div>
                        </article>
                    </li>
                </ul>
            </div>
        </div>
    )
}
