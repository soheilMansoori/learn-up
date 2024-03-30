import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import Slider from 'react-slick';
import { useQuery } from 'react-query';
import "./PartnerBrands.css";

export default function PartnerBrands() {
  const { data } = useQuery(['partners'], () => fetch(`${process.env.REACT_APP_BASE_URL}/partners?_limit=4`).then(res => res.json()));
  const settings = {
    slidesToShow: 5,
    autoplaySpeed: 5000,
    autoplay: true,
    infinity: false,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        }
      }
    ]
  }


  return (
    <section>
      <div className="container">
        <SectionTitle
          sectionName="آموزشگاه های معتبر"
          sectionTitle={
            <>
              نمایندگان
              <span className="theme-cl"> مورد اعتماد </span>
              ما
            </>
          }
        />
        {data?.length ? (
          <>
            {data.length >= 5 ? (
              <Slider {...settings}>
                {data.map((brand) => (
                  <div key={brand.id} className="single_brands">
                    <img src={brand.image} />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="row">
                {data.map(brand => (
                  <div className="col-12 col-md-6 col-lg-3 single_brands mb-3 mb-lg-0" key={brand.id}>
                    <img src={brand.image} />
                  </div>
                ))}
              </div>
            )}
          </>
        ) : null}
      </div>
    </section >
  );
}
