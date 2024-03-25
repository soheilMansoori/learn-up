import Navbar from '../../components/Navbar/Navbar';
import BackToTop from '../../components/BackToTop/BackToTop';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Footer from '../../components/Footer/Footer';
import SendComment from '../../components/Comments/SendComment/SendComment';
import CommentBox from '../../components/Comments/CommentBox/CommentBox';
import CourseIntroduction from './components/CourseIntroduction/CourseIntroduction';
import CourseOverview from './components/CourseOverview/CourseOverview';
import CourseCreator from './components/CourseCreator/CourseCreator';
import CourseSessions from './components/CourseSessions/CourseSessions';
import CourseFeatures from './components/CourseFeatures/CourseFeatures';
import CoursePrice from './components/CoursePrice/CoursePrice';

export default function CourseDetails() {
    return (
        <>
            <Navbar />
            <CourseIntroduction />
            <section className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 order-1 order-lg-0">
                            {/* course overview  */}
                            <CourseOverview />
                            {/* course sessions */}
                            <CourseSessions />
                            {/* course creator */}
                            <CourseCreator />
                            <div className="edu_wraper">
                                <SendComment />
                                <CommentBox />
                            </div>
                        </div>
                        {/* Sidebar  */}
                        <div className="col-lg-4 order-0 order-lg-1">
                            {/* course price */}
                            <CoursePrice />
                            {/* course features */}
                            <CourseFeatures />
                        </div>
                    </div>
                </div>
            </section>
            <BackToTop />
            <NewsLetter />
            <Footer />
        </>
    )
}
