import './CourseFeatures.css';

export default function CourseFeatures() {
    return (
        <div className="edu_wraper">
            <h4 className="edu_title">ویژگی های دوره</h4>
            <ul className="edu_list right">
                <li><i className="fa fa-user"></i>شرکت کنندگان:<strong>1740 نفر</strong></li>
                <li><i className="fa fa-files"></i>تعداد دوره:<strong>10</strong></li>
                <li><i className="fa fa-game"></i>جلسات:<strong>4</strong></li>
                <li><i className="fa fa-time"></i>مدت دوره:<strong>60 ساعت</strong></li>
                <li><i className="fa fa-tag"></i>سطح دوره:<strong>مقدماتی</strong></li>
                <li><i className="fa fa-flag"></i>زبان:<strong>فارسی</strong></li>
                <li><i className="fa fa-shine"></i>نوع دوره:<strong>رایگان</strong></li>
            </ul>
        </div>
    );
}
