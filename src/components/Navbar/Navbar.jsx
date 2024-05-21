import { useEffect, useState } from 'react';
import { Link, useNavigate, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

export default function Navbar() {
    const location = useLocation()
    const user = useSelector(store => store.user); // get user state
    const navigate = useNavigate()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [isFixNavbar, setIsFixNavbar] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);

    // fix responsive  
    useEffect(() => {
        const resizeHandler = () => setWindowWidth(window.innerWidth)
        const scrollHandler = () => {
            let scroll = window.scrollY;
            if (scroll >= 50) {
                setIsFixNavbar(true);
            } else {
                setIsFixNavbar(false);
            }
        }
        // event listener handlers
        window.addEventListener('resize', resizeHandler);
        window.addEventListener('scroll', scrollHandler);
        return () => { // save  performance
            window.removeEventListener('resize', resizeHandler);
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    // search handler
    const searchHandler = (event) => {
        event.preventDefault();
        if (searchValue) {
            navigate('/')
        }
    }
    return (
        <>
            <div className={`header header-light  ${isFixNavbar && "header-fixed head-shadow"}`}>
                <div className="container-fluid">
                    <nav className={`navigation  ${windowWidth > 1400 ? "navigation-landscape" : "navigation-portrait"}`}>
                        {/* logo and menu icon */}
                        <div className="nav-header">
                            <Link to='/' className="nav-brand">
                                <img src="/images/logo/nav-logo.png" className="logo" />
                            </Link>
                            {/* menu icon */}
                            <div className="nav-toggle" onClick={() => setIsShowMenu(true)} />
                        </div>
                        <div className={`nav-menus-wrapper ${isShowMenu && "nav-menus-wrapper-open"}`} style={{ transitionProperty: "right" }}>
                            {/* close menu */}
                            <span onClick={() => setIsShowMenu(false)} className="nav-menus-wrapper-close-button">✕</span>
                            {/* menu */}
                            <ul className="nav-menu">

                                <li className={`${location.pathname == '/' && "active"}`}>
                                    <Link to='/' href="#">خانه</Link>
                                </li>

                                <li className={`${location.pathname == '/books' && "active"}`}>
                                    <Link to="/books">کتاب ها</Link>
                                </li>

                                <li className={`${location.pathname == '/courses' && "active"}`}>
                                    <Link to="/courses">دوره ها</Link>
                                </li>


                                <li className={`${location.pathname == '/blogs' && "active"}`}>
                                    <Link to="/blogs"> وبلاگ ها</Link>
                                </li>

                                <li className={`${location.pathname == '/contact-us' && "active"}`}>
                                    <Link to="/contact-us">تماس با ما</Link>
                                </li>

                                <li className={`${location.pathname == '/about-us' && "active"}`}>
                                    <Link to="/about-us">درباره ما</Link>
                                </li>

                                <li className={`${location.pathname == '/privacy' && "active"}`}>
                                    <Link to="/privacy">قوانین ومقررات</Link>
                                </li>

                                <li className={`${location.pathname == '/questions' && "active"}`}>
                                    <Link to="/questions">سوالات متداول</Link>
                                </li>

                                <li>
                                    <a href="#">لیست مدرس ها</a>
                                </li>
                                {user.isLogin && (
                                    <li onMouseEnter={() => setIsOpenSubmenu(true)}>
                                        <a href="#">
                                            پنل کاربری
                                            <span className="submenu-indicator" />
                                            <span className="submenu-indicator" onClick={() => setIsOpenSubmenu(prevState => !prevState)}>
                                                <span className="submenu-indicator-chevron" />
                                            </span>
                                        </a>
                                        <ul onMouseLeave={() => setIsOpenSubmenu(false)} className={`nav-dropdown nav-submenu ${isOpenSubmenu && "d-block"}`}>
                                            <li>
                                                <a href="#">داشبورد</a>
                                            </li>
                                            <li>
                                                <a href="#">حساب کاربری من</a>
                                            </li>
                                            <li>
                                                <a href="#">دوره های من</a>
                                            </li>
                                            <li>
                                                <a href="#">سفارشات من</a>
                                            </li>
                                            <li>
                                                <a href="#">دوره های موردعلاقه</a>
                                            </li>
                                            <li>
                                                <a href="#">امتیازات من</a>
                                            </li>
                                            <li>
                                                <a href="#">تنظیمات</a>
                                            </li>
                                        </ul>
                                    </li>
                                )}
                            </ul>
                            {/* search input and login btn */}
                            <ul className="nav-menu nav-menu-social align-to-left">
                                <li className="login_click search">
                                    <form className="form-inline addons" onSubmit={searchHandler}>
                                        <input
                                            value={searchValue}
                                            onChange={(event) => setSearchValue(event.target.value)}
                                            maxLength="30"
                                            className="form-control"
                                            type="search"
                                            placeholder="جستجو کنید ..."
                                        />
                                        <button className="btn my-2 my-sm-0" type="submit">
                                            <i className="fa fa-search" />
                                        </button>
                                    </form>
                                </li>
                                <li className="login_click bg-red">
                                    {user.isLogin ? (
                                        <a>{user.userName}</a>
                                    ) : (
                                        <Link to="/login">ثبت نام |‌ ورود</Link>
                                    )}
                                </li>
                            </ul>
                        </div>
                        {/* gray color when open menu */}
                        {isShowMenu && (
                            <div onClick={() => setIsShowMenu(false)} className="nav-overlay-panel d-block gray-shadow-color" />
                        )}
                    </nav>
                </div >
            </div >
        </>
    );
}
