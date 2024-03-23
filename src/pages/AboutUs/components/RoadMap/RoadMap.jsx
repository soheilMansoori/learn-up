import './RoadMap.css'

export default function RoadMap() {
    return (
        <section className='pt-0'>
            <div className="container">

                <div className="row align-items-center">

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="list_facts_wrap">
                            <div className="sec-heading mb-3 f-24">
                                <h2>مسیرهای <span className="theme-cl">یادگیری </span>و مجموعه های آموزشی</h2>
                            </div>
                            <div className="list_facts">
                                <div className="list_facts_icons p-3">
                                    <i className="fa fa-desktop" />
                                </div>
                                <div className="list_facts_caption">
                                    <h4>نظارت دقیق و ارزیابی عملکرد معلمان</h4>
                                    <p>هر کجای ایران یا دنیا که هستید، معلم های ما به صورت زنده به شما تدریس می کنند.</p>
                                </div>
                            </div>
                            <div className="list_facts">
                                <div className="list_facts_icons p-3">
                                    <i className="fa fa-heart" />
                                </div>
                                <div className="list_facts_caption">
                                    <h4>شفافیت قیمت و تضمین پایین‌ترین قیمت‌ها</h4>
                                    <p>در زمان ثبت درخواست امکان نحوه برگزاری کلاس بصورت حضوری یا آنلاین وجود دارد.</p>
                                </div>
                            </div>
                            <div className="list_facts">
                                <div className="list_facts_icons p-3">
                                    <i className="fa fa-database" />
                                </div>
                                <div className="list_facts_caption">
                                    <h4>امکان برگزاری کلاس بصورت حضوری یا آنلاین</h4>
                                    <p>از بین بیش از 2000 معلم فعال با استفاده از فیلتر‌ها بهترین استاد متناسب با شرایط خود را بیابید.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="list_facts_wrap_img">

                            <img src="./images/Home/RoadMap/RoadMap.png" className="img-fluid" alt="" />

                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
