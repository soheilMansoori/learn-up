import CourseBox from '../../../../components/Courses/CourseBox/CourseBox'
import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import './LastCourses.css'


export default function LastCourses() {
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

                <div className="row">
                    {/* Cource Grid  */}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <CourseBox />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <CourseBox />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <CourseBox />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <CourseBox />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <CourseBox />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <CourseBox />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="text-center">
                            <a href="#" className="btn btn-theme btn-browse-btn">فهرست کامل آموزش ها</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
