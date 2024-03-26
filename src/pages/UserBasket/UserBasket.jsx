import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BackToTop from '../../components/BackToTop/BackToTop'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { Table } from 'react-bootstrap'
import ProductBox from './components/ProductBox/ProductBox'
import UserFacture from '../../components/UserFacture/UserFacture'
import UserBasketEmpty from './components/UserBasketEmpty/UserBasketEmpty'

export default function UserBasket() {
    return (
        <>
            <Navbar />
            <Breadcrumb title='سبد خرید' pageName='سبد خرید' />
            <UserBasketEmpty />
            <section className="pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 order-1 order-lg-0">
                            <div className="table-responsive">
                                <Table responsive="lg" className="table add_to_cart">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">عنوان</th>
                                            <th scope="col">قیمت</th>
                                            <th scope="col">تعداد</th>
                                            <th scope="col">حذف کالا</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <ProductBox />
                                        </tr>
                                        <tr>
                                            <ProductBox />
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            {/* Coupon Apply */}
                            <div className="checkout_coupon checkout">
                                <div className="checkout_coupon_flex">
                                    <form className="form-inline">
                                        <input className="form-control" type="search" placeholder="کد تخفیف" />
                                        <button type="button" className="btn btn-theme2 mr-2">اعمال تخفیف</button>
                                    </form>
                                </div>
                                <div className="ckt_last">
                                    <form className="form-inline">
                                        <button type="button" className="btn empty_btn">خالی کردن سبد</button>
                                        <button type="button" className="btn btn-theme2 disabled mr-2">به روزرسانی سبد</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mt-lg-5 mb-5 mt-0 order-0 order-lg-1">
                            {/* Total Cart */}
                            <UserFacture />
                        </div>
                    </div>
                </div>
            </section>
            <BackToTop />
            <NewsLetter />
            <Footer />
        </>
    )
}
