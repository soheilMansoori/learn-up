import './SideMenu.css'

export default function SideMenu() {
    return (
        <div className="col-lg-4 col-md-5">

            <div className="prc_wrap">

                <div className="prc_wrap_header">
                    <h4 className="property_block_title">راه های ارتباطی</h4>
                </div>

                <div className="prc_wrap-body">
                    <div className="contact-info">

                        <p>برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>

                        <div className="cn-info-detail">
                            <div className="cn-info-icon">
                                <i className="fa fa-home"></i>
                            </div>
                            <div className="cn-info-content">
                                <h4 className="cn-info-title">آدرس ما</h4>
                                ایران، تهران <br />خیابان سعادت آباد،<br /> خیابان کاج شمال غربی
                                </div>
                            </div>

                            <div className="cn-info-detail">
                                <div className="cn-info-icon">
                                    <i className="fa fa-envelope" />
                                </div>
                                <div className="cn-info-content">
                                    <h4 className="cn-info-title">پست الکترونیکی</h4>
                                    support@example.com<br />example@gmail.com
                                </div>
                            </div>

                            <div className="cn-info-detail">
                                <div className="cn-info-icon">
                                    <i className="fa fa-mobile"></i>
                                </div>
                                <div className="cn-info-content">
                                    <h4 className="cn-info-title">شماره تماس</h4>
                                    02188888888<br />09360000000
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            )
}
