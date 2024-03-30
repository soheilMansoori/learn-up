import { Link } from 'react-router-dom'
import './CourseBox.css'
export default function CourseBox({ courseName, image, price, slug, teacher: { username: teacherName, profileImage: teacherProfile, slug: teacherSlug } = {}, viewCount, watchTime, lastUpdateTime, tags }) {
    return (
        <div className="education_block_grid style_2">
            <div className="education_block_thumb n-shadow">
                <Link to={`/course-details/${slug}`}>
                    <img src={image} className="img-fluid w-100 max-h-200" />
                </Link>
            </div>
            <div className="education_block_body">
                <h4 className="bl-title">
                    <Link to={`/course-details/${slug}`}>{courseName}</Link>
                </h4>
            </div>
            <div className="cources_facts">
                <ul className="cources_facts_list">
                    {tags?.length ? tags.map((tag, index) => <li className={tag.class} key={index}>{tag.name}</li>) : null}
                </ul>
            </div>
            <div className="cources_info">
                <div className="cources_info_first">
                    <ul>
                        <li><strong>{Number(viewCount).toLocaleString()} بازدید</strong></li>
                        <li className="theme-cl">{watchTime} ساعت</li>
                    </ul>
                </div>
                <div className="cources_info_last">
                    <h3>{price == "free" ? "رایگان" : Number(price).toLocaleString() + " تومان"} </h3>
                </div>
            </div>
            <div className="education_block_footer">
                <div className="education_block_author">
                    <div className="path-img">
                        <Link to={`/teacher-details/${teacherSlug}`}>
                            <img src={teacherProfile} className="img-fluid w-100" />
                        </Link>
                    </div>
                    <h5><Link to={`/teacher-details/${teacherSlug}`}>{teacherName}</Link></h5>
                </div>
                <span className="education_block_time">
                    <i className="fa fa-calendar ml-2" />
                    {lastUpdateTime}
                </span>
            </div>
        </div>
    )
}
