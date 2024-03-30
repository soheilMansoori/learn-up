import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import StudentsCommentBox from './StudentsCommentBox/StudentsCommentBox'
import Slider from 'react-slick'
import { useQuery } from 'react-query'
import './StudentsComments.css'

export default function StudentsComments() {
    const { data } = useQuery(['best-comments'], () => fetch(`${process.env.REACT_APP_BASE_URL}/bestComments?_embed=user&_limit=6`).then(res => res.json()))
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
                    {data?.length ? (
                        <>
                            {data?.length > 1 ? (
                                <Slider {...settings}>
                                    {data.map(comment => (
                                        <StudentsCommentBox key={comment.id} {...comment} />
                                    ))}
                                </Slider>
                            ) : (
                                <StudentsCommentBox {...data} />
                            )}
                        </>
                    ) : null}
                </div>
            </div>
        </section >
    )
}
