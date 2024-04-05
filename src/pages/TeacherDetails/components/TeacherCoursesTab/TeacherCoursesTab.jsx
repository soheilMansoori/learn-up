import CourseBox from '../../../../components/Courses/CourseBox/CourseBox';
import './TeacherCoursesTab.css';

export default function TeacherCoursesTab({ courses = [] }) {
    return (
        <>
            {courses.length ? (
                <div className="row mt-3">
                    {courses.map(course => (
                        <div className="col-12 col-md-6 col-lg-4" key={course.id}>
                            <CourseBox {...course} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="alert alert-success mt-3">
                    هنوز دوره ایی منتشر نکرده است
                </div>
            )}
        </>
    );
}
