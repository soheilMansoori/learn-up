import LoginForm from './components/LoginForm/LoginForm'
import LoginSlider from './components/LoginSlider/LoginSlider'

export default function Login() {
    return (
        <section className="log-bg vh-md-100 d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11 col-md-11">

                        <div className="row no-gutters position-relative log_rads">
                            <div className="col-lg-6 col-md-5 bg-cover" style={{ background: "#1f2431 url(/images/Login/slider-background.png)no-repeat" }}>
                                <LoginSlider />
                            </div>

                            <div className="col-lg-6 col-md-7 position-static p-4">
                                <LoginForm />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
