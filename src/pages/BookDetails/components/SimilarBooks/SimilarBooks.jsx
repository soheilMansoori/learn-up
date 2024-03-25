import Slider from 'react-slick'
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import BookBox from '../../../../components/‌Books/BookBox/BookBox';
import './SimilarBooks.css';

export default function SimilarBooks() {
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
                <SectionTitle sectionName='کتاب های مرتبط'
                    sectionTitle={
                        <>
                            کتاب های
                            <span className="theme-cl"> مرتبط </span>
                            موجود
                        </>
                    }
                />
                <Slider {...settings} className='row gap-5'>
                    <div className="col">
                        <BookBox />
                    </div>
                    <div className="col">
                        <BookBox />
                    </div>
                    <div className="col">
                        <BookBox />
                    </div>
                    <div className="col">
                        <BookBox />
                    </div>
                    <div className="col">
                        <BookBox />
                    </div>
                    <div className="col">
                        <BookBox />
                    </div>
                    <div className="col">
                        <BookBox />
                    </div>
                    <div className="col">
                        <BookBox />
                    </div>
                </Slider>
            </div>
        </section>
    );
}
