import Slider from 'react-slick'
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import BookBox from '../../../../components/‌Books/BookBox/BookBox';
import './SimilarBooks.css';

export default function SimilarBooks({ similarBooks = [] }) {
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
                    {similarBooks.map(book => (
                        <div className="col" key={book.id}>
                            <BookBox {...book} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
