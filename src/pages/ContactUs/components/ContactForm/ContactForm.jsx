import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css'

export default function ContactForm() {
    const [isSubmitting, setSubmitting] = useState(false);

    // form configs
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            title: "",
            message: "",
        },
    });

    // send form to server
    const sendFormToServer = ({ username, email, title, message }) => {
        setSubmitting(true);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        const today = new Date().toLocaleDateString('fa-IR', options);

        const contactForm = {
            username,
            email,
            title,
            message,
            data: today
        };
        fetch(`${process.env.REACT_APP_BASE_URL}/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactForm)
        })
            .then(res => res.json())
            .then(data => {
                setSubmitting(false);
                reset()
            }).catch(error => console.log('error => ', error.message))
    };

    return (
        <div className="col-lg-8 col-md-7">
            <div className="prc_wrap">
                <div className="prc_wrap_header">
                    <h4 className="property_block_title">فرم ثبت نام</h4>
                </div>
                <form onSubmit={handleSubmit(sendFormToServer)} className="prc_wrap-body">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                                <label>نام کامل</label>
                                <input
                                    type="text"
                                    className="form-control simple"
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
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                                <label>ایمیل</label>
                                <input
                                    type="email"
                                    className="form-control simple"
                                    name="email"
                                    {...register(
                                        "email",
                                        {
                                            required: { value: true, message: 'وارد کردن ایمیل الزامی میباشد' },
                                            pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "ایمیل وارد  شده معتبر نمیباشد" }
                                        }
                                    )}
                                />
                                <div className="text-danger my-2">
                                    {errors.email && errors.email.message}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>عنوان</label>
                        <input
                            type="text"
                            className="form-control simple"
                            name='title'
                            {...register(
                                "title",
                                {
                                    required: { value: true, message: 'وارد کردن عنوان الزامی میباشد' },
                                    min: { value: 5, message: "عنوان باید حداقل ۵ کلمه باشد" },
                                    max: { value: 30, message: "عنوان باید حداکثر ۳۰ کلمه باشد" },
                                }
                            )}
                        />
                        <div className="text-danger my-2">
                            {errors.title && errors.title.message}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>پیام</label>
                        <textarea
                            className="form-control simple"
                            name='message'
                            {...register(
                                "message",
                                {
                                    required: { value: true, message: 'وارد کردن متن پیام الزامی باشد' },
                                }
                            )}
                        />
                        <div className="text-danger my-2">
                            {errors.message && errors.message.message}
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-theme" disabled={isSubmitting}>{isSubmitting ? "در حال ارسال ..." : "ارسال درخواست"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
