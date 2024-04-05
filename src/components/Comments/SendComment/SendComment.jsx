import './SendComment.css'

export default function SendComment() {
    return (
        <div className="comment-box submit-form mb-2">
            <h3 className="reply-title">ثبت دیدگاه</h3>
            <div className="comment-form">
                <form action="#">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="نام کامل" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="ایمیل" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <textarea name="comment" className="form-control" cols="30" rows="6" placeholder="نظر خود را بنویسید..."></textarea>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <a href="#" className="btn search-btn">ثبت</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
