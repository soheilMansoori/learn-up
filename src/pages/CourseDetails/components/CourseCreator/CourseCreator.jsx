import './CourseCreator.css';

export default function CourseCreator() {
    return (
        <div className="single_instructor">
            <div className="single_instructor_thumb">
                <a href="#">
                    <img src="/images/teachers/teacher-1.jpg" className="img-fluid" />
                </a>
            </div>
            <div className="single_instructor_caption">
                <h4><a href="#">مهندس رضایی</a></h4>
                <ul className="instructor_info">
                    <li><i className="fa fa-video-camera" />72 ویدئو</li>
                    <li><i className="fa fa-forward" />102 دوره</li>
                    <li><i className="fa fa-user" />آپدیت بهمن ماه</li>
                </ul>
                <p>اول داستان، طراح گرافیک بودم و ۲ سالی به عنوان طراح مشغول بودم، بعد به برنامه‌نویسی علاقمند شدم و الان بیشتر از ۱۰ ساله که عاشق کدزنی و چالش‌های پروژه‌های مختلفم.</p>
                <ul className="social_info">
                    <li><a href="#"><i className="fa-brands fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin" /></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                </ul>
            </div>
        </div>
    );
}
