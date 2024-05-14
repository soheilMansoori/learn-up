import { Tabs, Tab } from 'react-bootstrap'
import './BookTabs.css';
import CommentBox from '../../../../components/Comments/CommentBox/CommentBox';
import SendComment from '../../../../components/Comments/SendComment/SendComment';

export default function BookTabs() {
    return (
        <section className="bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-md-12 col-sm-12">
                        <div className="property_block_wrap_header">
                            <Tabs defaultActiveKey="descriptions-tab" className="nav nav-tabs customize-tab tabs_creative" id="myTab" role="tablist">
                                <Tab title="توضیحات" eventKey="descriptions-tab" className="nav-item">
                                    <div className='edu_wraper'>
                                        <p>
                                            برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                                        </p>
                                        <p>
                                            در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                        </p>
                                    </div>
                                </Tab>
                                <Tab title="مشخصات" eventKey="Specifications-tab" className="nav-item">
                                    <div className="table-responsive edu_wraper">
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
                                </Tab>
                                <Tab title="نظرات" eventKey="comments-tab" className="nav-item">
                                    <div className='edu_wraper'>
                                        <SendComment />
                                        <div className="alert alert-success my-5">
                                            هنوز نظری ثبت نشده است.
                                        </div>
                                        <div className='reviews-comments-wrap'>
                                            <CommentBox />
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
