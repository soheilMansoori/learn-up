import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logInUserAction } from '../../../../redux/Reducers/userReducer';

export default function LoginForm() {
    const dispatch = useDispatch()
    const [serverErrorMessage, setServerErrorMessage] = useState("");
    const [isSubmitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    // form configs
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
    });

    // send form to server
    const sendFormToServer = ({ username, password }) => {
        setSubmitting(true);
        fetch(`${process.env.REACT_APP_BASE_URL}/users?username=${username}&password=${password}`)
            .then(res => res.json())
            .then((data) => {
                if (data.length) {
                    setSubmitting(false);
                    dispatch(logInUserAction(data[0])); // dispatch store
                    navigate('/'); // redirect user to Home page
                } else {
                    setServerErrorMessage("کاربری با این مشخصات یافت نشد");
                    setSubmitting(false);
                }
            }).catch(error => console.log('error => ', error.message))
    }
    return (
        <div className="log_wraps">
            <Link to="/" className="log-logo_head">
                <img src="/images/logo/nav-logo.png" className="img-fluid" width="80" />
            </Link>
            <form onSubmit={handleSubmit(sendFormToServer)}>
                <div className="log__heads">
                    <h4 className="mt-0 logs_title">ورود به <span className="theme-cl">حساب کاربری</span></h4>
                </div>
                {/* server error message */}
                {serverErrorMessage && (
                    <div className="fw-bold text-center text-danger">{serverErrorMessage}</div>
                )}
                <div className="form-group">
                    <label>نام کاربری*</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        {...register(
                            "username",
                            {
                                required: { value: true, message: 'وارد کردن نام کاربری الزامی میباشد' },
                                minLength: { value: 5, message: 'نام کاربری شما حداکثر باید ۵ کلمه باشد' },
                                maxLength: { value: 12, message: 'نام کاربری شما باید حداقل ۱۲ کلمه باشد' }
                            }
                        )}
                    />
                    <div className="text-danger my-2">
                        {errors.username && errors.username.message}
                    </div>
                </div>

                <div className="form-group">
                    <label>رمز عبور*</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        {...register(
                            "password",
                            {
                                required: { value: true, message: 'وارد کردن رمز عبور الزامی میباشد' },
                                minLength: { value: 5, message: 'رمز عبور شما حداکثر باید ۵ کلمه باشد' },
                                maxLength: { value: 12, message: 'رمز عبور شما باید حداقل ۱۲ کلمه باشد' }
                            }
                        )}
                    />
                    <div className="text-danger my-2">
                        {errors.password && errors.password.message}
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn_apply w-100" disabled={isSubmitting}>{isSubmitting ? "در حال ارسال ..." : "ورود"}</button>
                </div>
            </form>
            <div className="form-group text-center mb-0 mt-5">
                آیا هنوز ثبت نام نکرده اید؟ <Link to="/register" className="theme-cl">ثبت نام</Link>
            </div>
        </div>
    )
}
