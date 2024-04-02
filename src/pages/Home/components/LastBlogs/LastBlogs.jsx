import BlogBox from '../../../../components/‌Blogs/BlogBox/BlogBox';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import Slider from 'react-slick';
import { useQuery } from 'react-query';
import './LastBlogs.css';

export default function LastBlogs() {
    const { data } = useQuery(['last-blogs'], () => fetch(`${process.env.REACT_APP_BASE_URL}/blogs?_limit=7&_embed=teacher`).then(res => res.json()));
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
                {data?.length > 4 ? (
                    <Slider {...settings} className="row gap-5">
                        {data?.map(blog => (
                            <div className="col-12" key={blog.id}>
                                <BlogBox {...blog} />
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className="row">
                        {data?.map(blog => (
                            <div className="col-12 col-md-6 col-lg-3" key={blog.id}>
                                <BlogBox {...blog} />
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    )
}
