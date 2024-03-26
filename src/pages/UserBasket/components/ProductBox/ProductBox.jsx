import './ProductBox.css';

export default function ProductBox() {
    return (
        <>
            <td>
                <div className="tb_course_thumb">
                    <img src="/images/books/book-1.jpg" className="img-fluid" />
                </div>
            </td>
            <th>
                <div style={{ whiteSpace: "nowrap", verticalAlign: "baseline"}}>
                کتاب تست شیمی دوازدهم
                <span className="tb_date">18دی 1399</span>
            </div>
        </th >
            <td>
                <span className="wish_price theme-cl">149000ت</span>
            </td>
            <td>
                <input type="number" className="form-control qty" step="1" value="1" title="Qty" size="4" inputmode="numeric" />
            </td>
            <td>
                <a href="#" className="btn btn-remove">حذف</a>
            </td>
        </>
    );
}
