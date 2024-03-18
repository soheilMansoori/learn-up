import './CourseBox.css'
export default function CourseBox() {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="education_block_grid style_2">

                <div className="education_block_thumb n-shadow">
                    <a href="#">
                        <img src="./images/courses/course-1.jpg" className="img-fluid" />
                    </a>
                </div>

                <div className="education_block_body">
                    <h4 className="bl-title">
                        <a href="course-detail.html">آموزش ساخت فروشگاه دیجی استایل با لاراول</a>
                    </h4>
                </div>

                <div className="cources_facts">
                    <ul className="cources_facts_list">
                        <li className="facts-1">متخصص</li>
                        <li className="facts-2">حرفه ای</li>
                        <li className="facts-5">طراحی وب</li>
                    </ul>
                </div>

                <div className="cources_info">
                    <div className="cources_info_first">
                        <ul>
                            <li><strong>1,84684 بازدید</strong></li>
                            <li className="theme-cl">214 ساعت</li>
                        </ul>
                    </div>
                    <div className="cources_info_last">
                        <h3>785 تومان</h3>
                    </div>
                </div>

                <div className="education_block_footer">
                    <div className="education_block_author">
                        <div className="path-img">
                            <a href="#">
                                <img src="./images/teachers/teacher-1.jpg" className="img-fluid" alt="" />
                            </a>
                        </div>
                        <h5><a href="#">مهرداد عظیمی</a></h5>
                    </div>
                    <span className="education_block_time"><i className="fa fa-calendar ml-1"></i>1 ساعت پیش</span>
                </div>

            </div>
        </div>

    )
}
