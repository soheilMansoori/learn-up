import './UserFacture.css';

export default function UserFacture() {
    return (
        <div className="cart_totals checkout">
            <h4>صورت حساب</h4>
            <div className="cart-wrap">
                <ul className="cart_list">
                    <li>قیمت<strong>14000 تومان</strong></li>
                    <li>تخفیف<strong>10000 تومان</strong></li>
                    <li>ارسال<strong>12000 تومان</strong></li>
                    <li>مالیات<strong>9%</strong></li>
                </ul>
                <div className="flex_cart">
                    <div className="flex_cart_1">
                        جمع کل
                    </div>
                    <div className="flex_cart_2">
                        170000 تومان
                    </div>
                </div>
                <button type="button" className="btn checkout_btn">پرداخت</button>
            </div>
        </div>
    );
}
