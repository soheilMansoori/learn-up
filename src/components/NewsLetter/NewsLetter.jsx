import { useState } from 'react'
import swal from 'sweetalert'
import './NewsLetter.css'

export default function NewsLetter() {
    const [inputValue, setInputValue] = useState("")

    // sweet alert success modal 
    const emailNotValidErrorMessage = () => swal({
        title: "ایمیل شما معتبر نمی باشد",
        icon: "error",
        buttons: "OK",
        closeOnClickOutside: false,
    });
    // sweet alert warning modal
    const emailWarningMessage = () => swal({
        title: "مشکلی رخ داده است",
        icon: "warning",
        buttons: "OK",
        closeOnClickOutside: false,
    });
    // sweet alert error modal 
    const successSendEmailMessage = () => swal({
        title: "ایمیل شما با موفقعیت ارسال شد",
        icon: "success",
        buttons: "OK",
        closeOnClickOutside: false,
    });

    const handelSubmit = (event) => {
        event.preventDefault()
        if (inputValue) {
            const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
            if (emailRegex.test(inputValue)) {
                sendFormToServer(inputValue) // send form to server
            } else {
                emailNotValidErrorMessage() // show error modal
            }
        }
    }

    function sendFormToServer(inputValue) {
        fetch(`${process.env.REACT_APP_BASE_URL}/newsLetterEmails`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: inputValue })
        }).then(res => {
            if (res.ok) {
                successSendEmailMessage() // show success modal 
                setInputValue("") // clear email input
            } else {
                emailWarningMessage()
            }
        }).catch(error => console.log(error.message));
    }


    return (
        <section className="newsletter theme-bg inverse-theme">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8 col-sm-12">
                        <div className="text-center">
                            <h2>به جامعه هزاران دانشجو بپیوندید!</h2>
                            <p>به جامعه میلیونی دانشجویان ما بپیوندید و به هزاران ساعت آموزش در حوزه‌های گوناگون دسترسی داشته باشید.</p>
                            <form className="sup-form" onSubmit={handelSubmit}>
                                <input
                                    type="text"
                                    className="form-control sigmup-me"
                                    placeholder="ایمیل"
                                    value={inputValue}
                                    onChange={event => setInputValue(event.target.value)}
                                />
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
