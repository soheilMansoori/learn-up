import './CourseSessions.css';

export default function CourseSessions() {
    return (
        <div className="edu_wraper">
            <h4 className="edu_title">سرفصل های دوره</h4>
            <div className="accordion shadow circullum">
                {/* Part 1  */}
                <div className="card">
                    <div id="headingOne" className="card-header bg-white shadow-sm border-0">
                        <h6 className="mb-0 accordion_title"><a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className="d-block position-relative text-dark collapsible-link py-2 collapsed">دوره اول: مقدمه و معرفی مدرس</a></h6>
                    </div>
                    <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample" className="collapse">
                        <div className="card-body pl-3 pr-3">
                            <ul className="lectures_lists">
                                <li><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 1</div>معرفی دوره</li>
                                <li><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 2</div>ساخت منوها در بخش مدیریت</li>
                                <li><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 3</div>متاباکس و ذخیره اطلاعات برای پست ها</li>
                                <li className="unview"><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 4</div>استفاده از قالب استاندارد در پلاگین ها</li>
                                <li className="unview"><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 5</div>ذخیره و بازیابی تنظیمات در وردپرس</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Part 2  */}
                <div className="card">
                    <div id="headingTwo" className="card-header bg-white shadow-sm border-0">
                        <h6 className="mb-0 accordion_title"><a href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="d-block position-relative collapsed text-dark collapsible-link py-2">دوره دوم: پیاده سازی پلاگین آمار بازدید</a></h6>
                    </div>
                    <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample" className="collapse">
                        <div className="card-body pl-3 pr-3">
                            <ul className="lectures_lists">
                                <li><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 1</div>معرفی دوره</li>
                                <li><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 2</div>ساخت منوها در بخش مدیریت</li>
                                <li><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 3</div>متاباکس و ذخیره اطلاعات برای پست ها</li>
                                <li className="unview"><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 4</div>استفاده از قالب استاندارد در پلاگین ها</li>
                                <li className="unview"><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 5</div>ذخیره و بازیابی تنظیمات در وردپرس</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Part 3  */}
                <div className="card">
                    <div id="headingThree" className="card-header bg-white shadow-sm border-0">
                        <h6 className="mb-0 accordion_title"><a href="#" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="d-block position-relative text-dark collapsible-link py-2 collapsed">دوره سوم: پیاده سازی پلاگین رای دادن به مطالب</a></h6>
                    </div>
                    <div id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample" className="collapse">
                        <div className="card-body pl-3 pr-3">
                            <ul className="lectures_lists">
                                <li><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 1</div>معرفی دوره</li>
                                <li><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 2</div>ساخت منوها در بخش مدیریت</li>
                                <li><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 3</div>متاباکس و ذخیره اطلاعات برای پست ها</li>
                                <li className="unview"><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 4</div>استفاده از قالب استاندارد در پلاگین ها</li>
                                <li className="unview"><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 5</div>ذخیره و بازیابی تنظیمات در وردپرس</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Part 04  */}
                <div className="card">
                    <div id="headingFour" className="card-header bg-white shadow-sm border-0">
                        <h6 className="mb-0 accordion_title"><a href="#" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" className="d-block position-relative text-dark collapsible-link py-2 collapsed">دوره نهایی: پیاده سازی پلاگین فروشگاه اینترنتی با درگاه پرداخت</a></h6>
                    </div>
                    <div id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionExample" className="collapse">
                        <div className="card-body pl-3 pr-3">
                            <ul className="lectures_lists">
                                <li><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 1</div>معرفی دوره</li>
                                <li><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 2</div>ساخت منوها در بخش مدیریت</li>
                                <li><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 3</div>متاباکس و ذخیره اطلاعات برای پست ها</li>
                                <li className="unview"><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 4</div>استفاده از قالب استاندارد در پلاگین ها</li>
                                <li className="unview"><div className="lectures_lists_title"><i className="ti-control-play"></i>دوره: 5</div>ذخیره و بازیابی تنظیمات در وردپرس</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
