import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./BookBox.css";

export default function BookBox({ bookName, image, price, isVip, isNew, score, slug }) {
    // console.log(props)
    return (
        <div className="shop_grid">
            {isVip && (<div className="shop_status hot">ویژه</div>)}
            {isNew && (<div className="shop_status sell">جدید</div>)}
            <div className="shop_grid_thumb">
                <a href="#">
                    <img src={image} className="img-fluid" style={{ maxHeight: "350px" }} />
                </a>
            </div>
            <div className="shop_grid_caption">
                <h4 className="sg_rate_title">
                    <a href="#" style={{ lineHeight: 1.5 }}>{bookName}</a>
                </h4>
                <div className="shop_grid_rate">
                    {Array.from({ length: "5" }, (item, index) => index + 1).map(item => {
                        if (item <= score) {
                            return <i className="fas fa-star filled" />
                        }
                        return <i className="fas fa-star" />
                    })}
                </div>
                <span className="sg_rate theme-cl">{Number(price).toLocaleString()} تومان</span>
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
                    <Link to={`/book-details/${slug}`} className="btn btn-shop">
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
                    <Link to={`/book-details/${slug}`} className="btn btn-shop">
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
                    <Link to={`/book-details/${slug}`} className="btn btn-shop">
                        <i className="fa fa-shopping-cart" />
                    </Link>
                </OverlayTrigger>
            </div>
        </div >
    )
}
