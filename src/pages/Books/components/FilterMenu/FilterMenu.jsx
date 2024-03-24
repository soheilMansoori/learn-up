import { useState } from 'react'
import './FilterMenu.css'
export default function FilterMenu({ isShowMenu, closeFilterMenu, handleSearch }) {
    const [searchInputValue, setSearchInputValue] = useState("");
    const searchFormSubmit = (event) => {
        event.preventDefault()
        if (searchInputValue) {
            handleSearch(searchInputValue)
        }
    }
    return (
        <>
            <div className="filter-sidebar z-20000" style={isShowMenu ? { width: "280px" } : { width: "0px" }}>
                <div className="filt-head">
                    <h4 className="filt-first">جستجوی پیشرفته</h4>
                    <a href="#" onClick={closeFilterMenu} className="closebtn">بستن <i className="fa fa-close"></i></a>
                </div>
                <div className="show-hide-sidebar">

                    <div className="sidebar-widgets">

                        <form onSubmit={searchFormSubmit} className="form-inline addons mb-3">
                            <button className="btn my-2 my-sm-0" type="submit">
                                <input value={searchInputValue} onChange={(event) => setSearchInputValue(event.target.value)} className="form-control" type="search" placeholder="جستجو کتاب" />
                                <i className="fa fa-search" />
                            </button>
                        </form>

                        <h4 className="side_title">دسته بندی کتاب</h4>
                        <ul className="no-ul-list mb-3">
                            <li>
                                <input id="a-4" className="checkbox-custom" name="a-4" type="checkbox" />
                                <label htmlFor="a-4" className="checkbox-custom-label">برنامه نویسی (3)</label>
                            </li>
                            <li>
                                <input id="a-5" className="checkbox-custom" name="a-5" type="checkbox" />
                                <label htmlFor="a-5" className="checkbox-custom-label">طراحی سایت (2)</label>
                            </li>
                            <li>
                                <input id="a-6" className="checkbox-custom" name="a-6" type="checkbox" />
                                <label htmlFor="a-6" className="checkbox-custom-label">عمومی (2)</label>
                            </li>
                            <li>
                                <input id="a-7" className="checkbox-custom" name="a-7" type="checkbox" />
                                <label htmlFor="a-7" className="checkbox-custom-label">فناوری اطلاعات (2)</label>
                            </li>
                            <li>
                                <input id="a-8" className="checkbox-custom" name="a-8" type="checkbox" />
                                <label htmlFor="a-8" className="checkbox-custom-label">گرافیک (2)</label>
                            </li>
                            <li>
                                <input id="a-9" className="checkbox-custom" name="a-9" type="checkbox" />
                                <label htmlFor="a-9" className="checkbox-custom-label">شبکه و امنیت (2)</label>
                            </li>
                        </ul>

                        <h4 className="side_title">مدرسین</h4>
                        <ul className="no-ul-list mb-3">
                            <li>
                                <input id="a-1" className="checkbox-custom" name="a-1" type="checkbox" />
                                <label htmlFor="a-1" className="checkbox-custom-label">حسام موسوی (4)</label>
                            </li>
                            <li>
                                <input id="a-2" className="checkbox-custom" name="a-2" type="checkbox" />
                                <label htmlFor="a-2" className="checkbox-custom-label">مهرداد عظیمی (11)</label>
                            </li>
                            <li>
                                <input id="a-6" className="checkbox-custom" name="a-6" type="checkbox" />
                                <label htmlFor="a-6" className="checkbox-custom-label">الهام کریمی (4)</label>
                            </li>
                            <li>
                                <input id="a-7" className="checkbox-custom" name="a-7" type="checkbox" />
                                <label htmlFor="a-7" className="checkbox-custom-label">مسعود راد (7)</label>
                            </li>
                            <li>
                                <input id="a-8" className="checkbox-custom" name="a-8" type="checkbox" />
                                <label htmlFor="a-8" className="checkbox-custom-label">مهدی کشاورز</label>
                            </li>
                            <li>
                                <input id="a-9" className="checkbox-custom" name="a-9" type="checkbox" />
                                <label htmlFor="a-9" className="checkbox-custom-label">شادی عبدی</label>
                            </li>
                        </ul>

                        <h4 className="side_title">نوع کتاب</h4>
                        <ul className="no-ul-list mb-3">
                            <li>
                                <input id="a-10" className="checkbox-custom" name="a-10" type="checkbox" />
                                <label htmlFor="a-10" className="checkbox-custom-label">همه (75)</label>
                            </li>
                            <li>
                                <input id="a-11" className="checkbox-custom" name="a-11" type="checkbox" />
                                <label htmlFor="a-11" className="checkbox-custom-label">رایگان (15)</label>
                            </li>
                            <li>
                                <input id="a-12" className="checkbox-custom" name="a-12" type="checkbox" />
                                <label htmlFor="a-12" className="checkbox-custom-label">نقدی (60)</label>
                            </li>
                        </ul>
                        <button className="btn btn-theme full-width mb-2">فیلتر کن</button>
                    </div>
                </div>
            </div>
            {/* gray color to close menu */}
            {isShowMenu && (
                <div onClick={closeFilterMenu} className="nav-overlay-panel d-block gray-shadow-color" />
            )}
        </>
    )
}
