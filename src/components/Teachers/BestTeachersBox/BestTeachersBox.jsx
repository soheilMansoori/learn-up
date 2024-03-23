import './BestTeachersBox.css'

export default function BestTeachersBox() {
    return (
        <div className="singles_items">
            <div className="instructor_wrap">
                <div className="instructor_thumb">
                    <a href="#">
                        <img src="/images/teachers/teacher-1.jpg" className="img-fluid" />
                    </a>
                </div>
                <div className="instructor_caption">
                    <h4><a href="#">علی صالحی</a></h4>
                    <span>مدیر فروش</span>
                    <ul>
                        <li><a href="#" className="cl-fb"><i className="fa-brands fa-facebook" /></a></li>
                        <li><a href="#" className="cl-twitter"><i className="fa-brands fa-twitter" /></a></li>
                        <li><a href="#" className="cl-linked"><i className="fa-brands fa-linkedin" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
