import './CoursePrice.css';

export default function CoursePrice() {
    return (
        <div className="ed_view_box style_2">
            <div className="ed_author">
                <div className="ed_author_thumb">
                    <img className="img-fluid" src="/images/teachers/teacher-1.jpg" />
                </div>
                <div className="ed_author_box">
                    <h4>مهندس رضایی</h4>
                    <span>طراح سایت و اپلیکیشن</span>
                </div>
            </div>
            <div className="ed_view_price pr-4">
                <span>قیمت آموزش</span>
                <h2 className="theme-cl">149 تومان</h2>
            </div>
            <div className="ed_view_features pr-4">
                <span>ویدئوهای نمونه</span>
                <ul>
                    <li><i className="ti-angle-left"></i>افزونه نویسی وردپرس بخش مقدمه</li>
                    <li><i className="ti-angle-left"></i>افزونه نویسی وردپرس بخش دهم</li>
                    <li><i className="ti-angle-left"></i>افزونه نویسی وردپرس بخش سی</li>
                    <li><i className="ti-angle-left"></i>پیاده سازی افزونه وردپرس</li>
                    <li><i className="ti-angle-left"></i>افزونه نویسی وردپرس بخش نهایی</li>
                </ul>
            </div>
            <div className="ed_view_link">
                <a href="#" className="btn btn-theme enroll-btn">دریافت<i className="ti-angle-left"></i></a>
            </div>
        </div>
    );
}
