import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './SendComment.css'

export default function SendComment({ sendFormToServer }) {
    const user = useSelector(store => store.user);
    const { reset, register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { message: "" } });

    return (
        <div className="comment-box submit-form mb-2">
            <h3 className="reply-title">ثبت دیدگاه</h3>
            {!user.isLogin && <p className='text-danger my-3'>برای ثبت دیدگاه ابتدا وارد حساب کاربری خود شوید</p>}
            <div className="comment-form">
                <form onSubmit={handleSubmit((inputValues) => sendFormToServer(inputValues, reset))}>
                    <div className="row">
                        <div className="form-group col-12">
                            <textarea
                                name="message"
                                {...register(
                                    "message",
                                    {
                                        required: { value: true, message: 'وارد کردن نظر خود الزامی میباشد' },
                                    }
                                )}
                                className="form-control"
                                cols="30"
                                rows="6"
                                placeholder="نظر خود را بنویسید ..."
                            />
                            <div className="text-danger my-2">
                                {errors.message && errors.message.message}
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                {user.isLogin ? (
                                    <button type='submit' className="btn search-btn">ثبت</button>
                                ) : (
                                    <Link to='/login' type='button' className="btn search-btn">ثبت نام</Link>
                                )}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
