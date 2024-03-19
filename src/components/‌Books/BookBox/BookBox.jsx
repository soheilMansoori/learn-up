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
                <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="" data-original-title="مشاهده">
                    <i className="fa fa-eye" />
                </a>
                <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="" data-original-title="افزودن به علاقه مندی">
                    <i className="fa fa-heart" />
                </a>
                <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="" data-original-title="افزودن به سبد">
                    <i className="fa fa-shopping-cart" />
                </a>
            </div>
        </div>
    )
}
