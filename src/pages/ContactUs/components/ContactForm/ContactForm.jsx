import './ContactForm.css'

export default function ContactForm() {
    return (
        <div className="col-lg-8 col-md-7">
            <div className="prc_wrap">

                <div className="prc_wrap_header">
                    <h4 className="property_block_title">فرم ثبت نام</h4>
                </div>

                <div className="prc_wrap-body">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                                <label>نام کامل</label>
                                <input type="text" className="form-control simple" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                                <label>ایمیل</label>
                                <input type="email" className="form-control simple" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>عنوان</label>
                        <input type="text" className="form-control simple" />
                    </div>

                    <div className="form-group">
                        <label>پیام</label>
                        <textarea className="form-control simple"></textarea>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-theme" type="submit">ارسال درخواست</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
