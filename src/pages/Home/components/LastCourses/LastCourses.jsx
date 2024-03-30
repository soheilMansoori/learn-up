import CourseBox from '../../../../components/Courses/CourseBox/CourseBox'
import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import { useQuery } from 'react-query'
import './LastCourses.css'
import { Link } from 'react-router-dom'


export default function LastCourses() {
    const { data } = useQuery(["last-courses"], () => fetch(`${process.env.REACT_APP_BASE_URL}/courses?_embed=teacher&_limit=6`).then(res => res.json()))
    return (
        <section>
            <div className="container">
                <SectionTitle
                    sectionName='آخرین دوره ها'
                    sectionTitle={
                        <>
                            آخرین دوره های
                            <span className="theme-cl"> منتشر </span>
                            شده
                        </>
                    }
                />

                {/* Courses Grid  */}
                <div className="row">
                    {data?.length ? data.map(course => (
                        <div key={course.id} className="col-lg-4 col-md-6 col-sm-12">
                            <CourseBox {...course} />
                        </div>
                    )) : null}
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="text-center">
                            <Link to="/courses" className="btn btn-theme btn-browse-btn">فهرست کامل دوره ها</Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
