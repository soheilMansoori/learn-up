import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasketAction, updateBasketAction } from '../../../../redux/reducers/userBasketReducer';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BookOverview.css';

export default function BookOverview({ id, bookCode, bookName, category, description, image, isNew, isVip, price, score }) {
    const [bookCount, setBookCount] = useState(1);
    const userBasketStore = useSelector(store => store.userBasket);

    const dispatch = useDispatch();
    // Notifies
    const addToBasketSuccessNotify = () => toast.success('محصول به سبد خرید اضافه شد', {
        position: "bottom-right",
        rtl: true,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    // handleChange
    const handleChange = event => {
        const inputValue = event.target.value
        setBookCount(inputValue)
    };
    // add to favorite
    const addToFavorite = () => {
        console.log("book add to favorite", id);
    };
    // add to basket
    const addBookToBasket = () => {
        const checkIsInBasket = userBasketStore.products.some(product => product.productId === id)
        // check is in user basket
        if (checkIsInBasket) {
            const newUserBasket = userBasketStore.products.map(product => {
                if (product.productId === id) {
                    return { ...product, productCount: Number(product.productCount) + Number(bookCount) }
                };
                return product
            });
            dispatch(updateBasketAction(newUserBasket))
        } else {
            const productData = {
                productId: id,
                bookId: id,
                productImage: image,
                productPrice: price,
                productCount: bookCount,
                productOffer: 0,
            };
            dispatch(addToBasketAction(productData));
        }

        addToBasketSuccessNotify()
    };
    return (
        <>
            <section className="pr_detail">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="woocommerce single_product quick_view_wrap">
                                <div className="woo-single-images">
                                    <div className="feature-style-single">
                                        <img src={image} width="570" height="500" />
                                    </div>
                                </div>
                                <div className="summary entry-summary">
                                    <div className="woo_inner">
                                        {isNew && <div className="shop_status sell">جدید</div>}
                                        {isVip && <div className="shop_status hot">ویژه</div>}
                                        <h2 className="woo_product_title">
                                            <a>{bookName}</a>
                                        </h2>
                                        <ul className="woo_info">
                                            <li><strong>دسته بندی: </strong>{category}</li>
                                            <li><strong>کد: </strong>{bookCode}</li>
                                        </ul>
                                        <div className="woo_price_rate">
                                            <div className="woo_rating">
                                                {Array.from({ length: 5 }, (item, index) => index).map(item => <i className={`fas fa-star ${score > item && "filled"}`} key={item} />)}
                                            </div>
                                            <div className="woo_price_fix">
                                                <h3 className="mb-0 theme-cl">{Number(price)?.toLocaleString()} تومان</h3>
                                            </div>
                                        </div>
                                        <div className="woo_short_desc" style={{ textAlign: 'justify' }}>{description}</div>
                                        <div className="quantity-button-wrapper">
                                            <label>تعداد</label>
                                            <div className="quantity">
                                                <input value={bookCount} onChange={handleChange} type="number" className="form-control qty" min="1" max="10" inputMode='numeric' />
                                            </div>
                                        </div>
                                        <div className="row woo_buttons mr-1 ml-1">
                                            <button onClick={addBookToBasket} type="button" className="col-12 col-lg-5 btn btn-theme2">افزودن به سبد</button>
                                            <a onClick={addToFavorite} className="col-12 col-lg-6 btn woo_btn_light">
                                                افزودن به علاقه مندی ها <i className="fa fa-heart mr-2" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
}
