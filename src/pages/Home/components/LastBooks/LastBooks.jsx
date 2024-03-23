import BookBox from '../../../../components/‌Books/BookBox/BookBox'
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn'
import Slider from "react-slick";

import './LastBooks.css'

export default function LastBooks() {
    const settings = {
        slidesToShow: 4,
        infinity: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <section>
            <div className="container">

                <SectionTitle
                    sectionName='آخرین کتاب ها'
                    sectionTitle={
                        <>
                            آخرین کتاب های
                            <span className="theme-cl"> موجود </span>
                            شده
                        </>
                    }
                />
                <div className='slider-container'>
                    <Slider {...settings} className="row gap-5">
                        <div className='col-12'>
                            <BookBox />
                        </div>
                        <div className='col-12'>
                            <BookBox />
                        </div>
                        <div className='col-12'>
                            <BookBox />
                        </div>
                        <div className='col-12'>
                            <BookBox />
                        </div>
                        <div className='col-12'>
                            <BookBox />
                        </div>
                        <div className='col-12'>
                            <BookBox />
                        </div>
                    </Slider>
                </div>

                <ShowMoreBtn title='فهرست کامل کتاب ها' link='/' />
            </div>
        </section>
    )
}

