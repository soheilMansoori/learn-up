import Navbar from "../../components/Navbar/Navbar";
import TeacherOverview from "./components/TeacherOverview/TeacherOverview";
import BackToTop from "../../components/BackToTop/BackToTop";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";

import { useQuery } from 'react-query'
import { useParams, useNavigate } from 'react-router-dom'
import { Tabs, Tab } from 'react-bootstrap'
import TeacherCoursesTab from "./components/TeacherCoursesTab/TeacherCoursesTab";
import AboutTeacherTab from "./components/AboutTeacherTab/AboutTeacherTab";
import TeacherCommentsTab from "./components/TeacherCommentsTab/TeacherCommentsTab";

export default function TeacherDetails() {
    const params = useParams()
    const navigate = useNavigate()
    const { data } = useQuery(
        [`teacher-${params.id}`],
        () => fetch(`${process.env.REACT_APP_BASE_URL}/teachers/${params.id}?_embed=courses&_embed=comments`)
            .then(res => {
                const { status } = res
                if (status === 404) {
                    navigate('/404', { replace: true })
                } else {
                    return res.json()
                }
            }));
    console.log("data => ", data)
    return (
        <>
            <Navbar />
            <TeacherOverview {...data} />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="custom-tab customize-tab tabs_creative">
                                <Tabs defaultActiveKey="teacher-courses-tab" className="nav nav-tabs pb-2 b-0">

                                    <Tab eventKey="teacher-courses-tab" title="دوره ها" className="nav-item">
                                        <TeacherCoursesTab courses={data?.courses} />
                                    </Tab>

                                    <Tab eventKey="about-teacher-tab" title="درباره من" className="nav-item">
                                        <AboutTeacherTab teacherAchievements={data?.teacherAchievements} />
                                    </Tab>

                                    <Tab eventKey="teacher-comments-tab" title="دیدگاه ها" className="nav-item">
                                        <TeacherCommentsTab comments={data?.comments} />
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <BackToTop />
            <NewsLetter />
            <Footer />
        </>
    )
}
