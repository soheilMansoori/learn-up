import { Link } from "react-router-dom";

export default function LoginForm() {
    return (
        <div className="log_wraps">
            <Link to="/" className="log-logo_head">
                <img src="/images/logo/nav-logo.png" className="img-fluid" width="80" />
            </Link>
            <div className="log__heads">
                <h4 className="mt-0 logs_title">ورود به <span className="theme-cl">حساب کاربری</span></h4>
            </div>

            <div className="form-group">
                <label>ایمیل*</label>
                <input type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label>رمز عبور*</label>
                <input type="password" className="form-control" />
            </div>

            <div className="form-group">
                <a href="#" className="btn btn_apply w-100">ورود</a>
            </div>

            <div className="form-group text-center mb-0 mt-5">
                آیا هنوز ثبت نام نکرده اید؟ <a href="register.html" className="theme-cl">ثبت نام</a>
            </div>

        </div>
    )
}
