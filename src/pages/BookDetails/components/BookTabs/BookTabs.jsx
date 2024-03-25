import './BookTabs.css';

export default function BookTabs() {
    return (
        <section className="bg-light">
            <div className="container">

                <div className="row">

                    <div className="col-lg-10 col-md-12 col-sm-12">

                        <div className="property_block_wrap_header">
                            <ul className="nav nav-tabs customize-tab tabs_creative" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="general-tab" data-toggle="tab" href="#general" role="tab" aria-controls="general" aria-selected="true" aria-expanded="true">توضیحات</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" id="payment-tab" data-toggle="tab" href="#payment" role="tab" aria-controls="payment" aria-selected="false" aria-expanded="false">مشخصات</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" id="upgrade-tab" data-toggle="tab" href="#upgrade" role="tab" aria-controls="upgrade" aria-selected="false" aria-expanded="false">نظرات</a>
                                </li>

                            </ul>
                        </div>

                        <div className="tab-content tabs_content_creative" id="myTabContent">
                            <div className="tab-pane fade active show" id="general" role="tabpanel" aria-labelledby="general-tab" aria-expanded="true">
                                <p>برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                                <p></p>در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.<p></p>
                            </div>
                            <div className="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab" aria-expanded="false">
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th scope="row">نوع درسنامه</th>
                                                <td>درسنامه کامل</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">وزن</th>
                                                <td>125کیلوگرم</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">نوع سوالات</th>
                                                <td>تستی</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">نوع پاسخنامه</th>
                                                <td>پاسخنامه تشریحی دارد</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="upgrade" role="tabpanel" aria-labelledby="upgrade-tab" aria-expanded="false">
                                <div className="alert alert-success" role="alert">
                                    هنوز نظری ثبت نشده است.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
