import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./BookBox.css";

export default function BookBox() {
    return (
        <div className="shop_grid">
            {/* <div className="shop_status hot">ویژه</div> */}
            {/* <div className="shop_status sell">جدید</div> */}

            <div className="shop_grid_thumb">
                <a href="#">
                    <img src="./images/books/book-1.jpg" className="img-fluid" />
                </a>
            </div>
            <div className="shop_grid_caption">
                <h4 className="sg_rate_title"><a href="#">کتاب نردبام زبان جامع</a></h4>
                <div className="shop_grid_rate">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                </div>
                <span className="sg_rate theme-cl">179000 تومان</span>
            </div>
            <div className="shop_grid_action">
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip>
                            مشاهده
                        </Tooltip>
                    }
                >
                    <Link to="/" className="btn btn-shop">
                        <i className="fa fa-eye" />
                    </Link>
                </OverlayTrigger>

                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip>
                            افزودن به علاقه مندی
                        </Tooltip>
                    }
                >
                    <Link to="/" className="btn btn-shop">
                        <i className="fa fa-heart" />
                    </Link>
                </OverlayTrigger>

                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip>
                            افزودن به سبد
                        </Tooltip>
                    }
                >
                    <Link to="/" className="btn btn-shop">
                        <i className="fa fa-shopping-cart" />
                    </Link>
                </OverlayTrigger>
            </div>
        </div >
    )
}
