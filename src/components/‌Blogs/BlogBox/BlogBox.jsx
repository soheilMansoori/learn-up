import { Link } from 'react-router-dom';
import './BlogBox.css'

export default function BlogBox({ title, slug, image, teacher: { username: teacherName, profileImage: teacherProfile, slug: teacherSlug } = {} }) {
    return (
        <div className="articles_grid_style" dir='rtl'>
            <div className="articles_grid_thumb">
                <Link to={`/blog-details/${slug}`}>
                    <img src={image} className="img-fluid" />
                </Link>
            </div>

            <div className="articles_grid_caption">
                <Link to={`/blog-details/${slug}`}>
                    <h4>{title}</h4>
                </Link>
                <div className="articles_grid_author">
                    <Link to={`/teacher-details/${teacherSlug}`} className="articles_grid_author_img">
                        <img src={teacherProfile} className="img-fluid" />
                    </Link>
                    <Link to={`/teacher-details/${teacherSlug}`}>
                        <h4>{teacherName}</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}
