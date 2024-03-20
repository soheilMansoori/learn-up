import BlogBox from '../../../../components/‌Blogs/BlogBox/BlogBox'
import SectionTitle from '../SectionTitle/SectionTitle'
import Slider from 'react-slick'
import './LastBlogs.css'

export default function LastBlogs() {
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
        <section className="min-sec">
            <div className="container">

                <SectionTitle
                    sectionName='آخرین مقاله ها'
                    sectionTitle={
                        <>
                            آخرین مقاله های
                            <span className="theme-cl"> منتشر </span>
                            شده
                        </>
                    }
                />


                <Slider {...settings} className="row gap-5">
                    {/* Single Article  */}
                    <div className="col-12">
                        <BlogBox />
                    </div>
                    <div className="col-12">
                        <BlogBox />
                    </div>
                    <div className="col-12">
                        <BlogBox />
                    </div>
                    <div className="col-12">
                        <BlogBox />
                    </div>
                </Slider>
            </div>
        </section>
    )
}
