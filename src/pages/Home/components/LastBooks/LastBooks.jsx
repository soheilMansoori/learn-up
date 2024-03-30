import BookBox from '../../../../components/‌Books/BookBox/BookBox';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn'
import Slider from "react-slick";
import { useQuery } from 'react-query';

import './LastBooks.css'

export default function LastBooks() {
    const { data } = useQuery(["last-books"], () => fetch(`${process.env.REACT_APP_BASE_URL}/books?_limit=8`).then(res => res.json()))
    console.log('data => ', data);
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
                    {data?.length ? (
                        <>
                            {data?.length > 4 ? (
                                <Slider {...settings} className="row gap-5">
                                    {data.map(book => (
                                        <div className='col-12' key={book.id}>
                                            <BookBox {...book} />
                                        </div>
                                    ))}
                                </Slider>
                            ) : (
                                <div className='row'>
                                    {data.map(book => (
                                        <div className='col-12 col-md-6 col-lg-3' key={book.id}>
                                            <BookBox {...book} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    ) : null}
                </div>

                <ShowMoreBtn title='فهرست کامل کتاب ها' link='/books' />
            </div>
        </section>
    )
}

