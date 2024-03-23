import BestTeachersBox from '../../../../components/Teachers/BestTeachersBox/BestTeachersBox';
import Slider from 'react-slick';
import './BestTeachers.css';

export default function BestTeachers() {
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

    }
    return (
        <section className="bg-light">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="sec-heading center">
                            <p>استاتید برتر</p>
                            <h2>دوره های <span className="theme-cl">ویژه</span> با مدرسان</h2>
                        </div>
                    </div>
                </div>

                <Slider {...settings}>
                    <BestTeachersBox />
                    <BestTeachersBox />
                    <BestTeachersBox />
                    <BestTeachersBox />
                    <BestTeachersBox />
                </Slider>

            </div>
        </section>
    )
}
