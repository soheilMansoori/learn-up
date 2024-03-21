import './NewsLetter.css'

export default function NewsLetter() {
    return (
        <section className="newsletter theme-bg inverse-theme">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8 col-sm-12">
                        <div className="text-center">
                            <h2>به جامعه هزاران دانشجو بپیوندید!</h2>
                            <p>به جامعه میلیونی دانشجویان ما بپیوندید و به هزاران ساعت آموزش در حوزه‌های گوناگون دسترسی داشته باشید.</p>
                            <form className="sup-form">
                                <input type="email" className="form-control sigmup-me" placeholder="ایمیل" />
                                <button type="submit" className="btn btn-theme">
                                    عضویت
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
