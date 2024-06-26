import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logInUserAction } from '../../../../redux/reducers/userReducer';

export default function RegisterForm() {
    const dispatch = useDispatch()
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
            phone: "",
        },
    });

    // send form to server
    const sendFormToServer = ({ username, password, phone }) => {
        setSubmitting(true);
        const newUser = { // create new user object
            username,
            password,
            phone,
            role: "USER",
            token: crypto.randomUUID()
        }
        // send new user to server
        fetch(`${process.env.REACT_APP_BASE_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then(res => res.json())
            .then((data) => {
                setSubmitting(false); // 
                dispatch(logInUserAction(data)); // dispatch store
                navigate('/') // // redirect user to Home page
            }).catch(error => console.log('error => ', error.message))
    }
    return (
        <div className="log_wraps">
            <Link to="/" className="log-logo_head">
                <img src="/images/logo/nav-logo.png" className="img-fluid" width="80" />
            </Link>
            <form onSubmit={handleSubmit(sendFormToServer)}>
                <div className="log__heads">
                    <h4 className="mt-0 logs_title">ساخت <span className="theme-cl">حساب کاربری</span></h4>
                </div>
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
                    <label>شماره تماس*</label>
                    <input
                        type="text"
                        className="form-control"
                        name="phone"
                        {...register(
                            "phone",
                            {
                                required: { value: true, message: 'وارد کردن شماره تماس الزامی میباشد' },
                                pattern: { value: /^09(1[0-9]|9[0-2]|2[0-2]|0[1-5]|41|3[0,3,5-9])\d{7}$/, message: 'شماره تماس نامعتبر است' },
                            }
                        )}
                    />
                    <div className="text-danger my-2">
                        {errors.phone && errors.phone.message}
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn_apply w-100" disabled={isSubmitting}>{isSubmitting ? "در حال ارسال ..." : "ثبت نام"}</button>
                </div>
            </form>
            <div className="form-group text-center mb-0 mt-5">
                قبلا ثبت نام کرده اید؟ <Link to="/login" className="theme-cl">ورود</Link>
            </div>

        </div>
    )
}
