import Navbar from '../../components/Navbar/Navbar'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import BackToTop from '../../components/BackToTop/BackToTop'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Footer from '../../components/Footer/Footer'
import { Tabs, Tab, Card, Accordion } from 'react-bootstrap'
import './Questions.css'

export default function Questions() {
    return (
        <>
            <Navbar />
            <Breadcrumb title='سوالات متداول' pageName='سوالات متداول' />
            <section className="pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="property_block_wrap_header">
                                <Tabs defaultActiveKey="general-tab" className="nav nav-tabs customize-tab tabs_creative" id="myTab" role="tablist">
                                    <Tab eventKey="general-tab" title="عمومی" className="nav-item">
                                        <Accordion defaultActiveKey="0">
                                            {/* card 1 */}
                                            <Card className="card">
                                                <Card.Header className="card-header">
                                                    <h2 className="mb-0">
                                                        <Accordion.Toggle eventKey='0' className="btn btn-link collapsed">
                                                            چگونه تم Learnup را نصب کنیم؟
                                                        </Accordion.Toggle>
                                                    </h2>
                                                </Card.Header>

                                                <Accordion.Collapse eventKey='0'>
                                                    <Card.Body className="card-body">
                                                        <p className="ac-para">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            {/* card 2 */}
                                            <Card className="card">
                                                <Card.Header className="card-header">
                                                    <h2 className="mb-0">
                                                        <Accordion.Toggle eventKey='1' className="btn btn-link collapsed">
                                                            الزامات اصلی برای یادگیری چیست؟
                                                        </Accordion.Toggle>
                                                    </h2>
                                                </Card.Header>

                                                <Accordion.Collapse eventKey='1'>
                                                    <Card.Body className="card-body">
                                                        <p className="ac-para">
                                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                                        </p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            {/* card 3 */}
                                            <Card className="card">
                                                <Card.Header className="card-header">
                                                    <h2 className="mb-0">
                                                        <Accordion.Toggle eventKey='2' className="btn btn-link collapsed">
                                                            چرا موضوع یادگیری را انتخاب کنید؟
                                                        </Accordion.Toggle>
                                                    </h2>
                                                </Card.Header>

                                                <Accordion.Collapse eventKey='2'>
                                                    <Card.Body className="card-body">
                                                        <p className="ac-para">
                                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                                        </p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>
                                    </Tab>

                                    <Tab eventKey="payment-tab" title="روش پرداخت" className="nav-item">
                                        <Accordion defaultActiveKey="0">
                                            {/* card 1 */}
                                            <Card className="card">
                                                <Card.Header className="card-header">
                                                    <h2 className="mb-0">
                                                        <Accordion.Toggle eventKey='0' className="btn btn-link collapsed">
                                                            آیا می توانم در آینده پیشنهادی دریافت کنم؟
                                                        </Accordion.Toggle>
                                                    </h2>
                                                </Card.Header>

                                                <Accordion.Collapse eventKey='0'>
                                                    <Card.Body className="card-body">
                                                        <p className="ac-para">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>

                                            {/* card 2 */}
                                            <Card className="card">
                                                <Card.Header className="card-header">
                                                    <h2 className="mb-0">
                                                        <Accordion.Toggle eventKey='1' className="btn btn-link collapsed">
                                                            آیا می توانم درخواست بازپرداخت کنم؟
                                                        </Accordion.Toggle>
                                                    </h2>
                                                </Card.Header>

                                                <Accordion.Collapse eventKey='1'>
                                                    <Card.Body className="card-body">
                                                        <p className="ac-para">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>

                                            {/* card 3 */}
                                            <Card className="card">
                                                <Card.Header className="card-header">
                                                    <h2 className="mb-0">
                                                        <Accordion.Toggle eventKey='2' className="btn btn-link collapsed">
                                                            بازپرداخت چقدر طول می کشد؟
                                                        </Accordion.Toggle>
                                                    </h2>
                                                </Card.Header>

                                                <Accordion.Collapse eventKey='2'>
                                                    <Card.Body className="card-body">
                                                        <p className="ac-para">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>
                                    </Tab>

                                    <Tab eventKey="upgrade-tab" title="به روزرسانی" className="nav-item">
                                        <Accordion defaultActiveKey="0">
                                            {/* Card 1 */}
                                            <Card className="card">
                                                <Card.Header className="card-header">
                                                    <h2 className="mb-0">
                                                        <Accordion.Toggle eventKey='0' className="btn btn-link collapsed">
                                                            چگونه تم Learnup را ارتقا دهیم؟
                                                        </Accordion.Toggle>
                                                    </h2>
                                                </Card.Header>

                                                <Accordion.Collapse eventKey='0'>
                                                    <Card.Body className="card-body">
                                                        <p className="ac-para">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>

                                            {/* Card 2 */}
                                            <Card className="card">
                                                <Card.Header className="card-header">
                                                    <h2 className="mb-0">
                                                        <Accordion.Toggle eventKey='1' className="btn btn-link collapsed">
                                                            Learnup برای نسخه وردپرس موجود است؟
                                                        </Accordion.Toggle>
                                                    </h2>
                                                </Card.Header>

                                                <Accordion.Collapse eventKey='1'>
                                                    <Card.Body className="card-body">
                                                        <p className="ac-para">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>

                                            {/* Card 3 */}
                                            <Card className="card">
                                                <Card.Header className="card-header">
                                                    <h2 className="mb-0">
                                                        <Accordion.Toggle eventKey='2' className="btn btn-link collapsed">
                                                            چرا باید Learnup را ارتقا دهیم؟
                                                        </Accordion.Toggle>
                                                    </h2>
                                                </Card.Header>

                                                <Accordion.Collapse eventKey='2'>
                                                    <Card.Body className="card-body">
                                                        <p className="ac-para">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>
                                    </Tab>

                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
            <BackToTop />
            <NewsLetter />
            <Footer />
        </>
    )
}
