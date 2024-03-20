import SectionTitle from '../SectionTitle/SectionTitle'
import StudentsCommentBox from './StudentsCommentBox/StudentsCommentBox'
import Slider from 'react-slick'
import './StudentsComments.css'

export default function StudentsComments() {
    const settings = {
        slidesToShow: 1,
        autoplaySpeed: 5000,
        infinity: false,
        autoplay: true,
        arrows: false,
        dots: false,
        // draggable: false,
        // vertical: true,
        // verticalSwiping: false,
    }

    return (
        <section className='StudentsCommentsBackGroundImage'>
            <div className="container">

                <SectionTitle
                    sectionName='کاربران چه میگویند ؟'
                    sectionTitle={
                        <>
                            نظرات دانشجویان
                            <span className="theme-cl"> موفق </span>
                            ما
                        </>
                    }
                />
                <div className='slider-container'>
                    <Slider {...settings}>
                        <StudentsCommentBox />
                        <StudentsCommentBox />
                        <StudentsCommentBox />
                        <StudentsCommentBox />
                        <StudentsCommentBox />
                    </Slider>

                </div>
            </div>
        </section >
    )
}
