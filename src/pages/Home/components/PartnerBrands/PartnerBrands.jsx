import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from 'react-slick';
import "./PartnerBrands.css";

export default function PartnerBrands() {
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
        <Slider {...settings}>
          <div className="single_brands">
            <img src="./images/Home/PartnerBrands/brand-1.png" />
          </div>
          <div className="single_brands">
            <img src="./images/Home/PartnerBrands/brand-1.png" />
          </div>
          <div className="single_brands">
            <img src="./images/Home/PartnerBrands/brand-1.png" />
          </div>
          <div className="single_brands">
            <img src="./images/Home/PartnerBrands/brand-1.png" />
          </div>
          <div className="single_brands">
            <img src="./images/Home/PartnerBrands/brand-1.png" />
          </div>
          <div className="single_brands">
            <img src="./images/Home/PartnerBrands/brand-1.png" />
          </div>
          <div className="single_brands">
            <img src="./images/Home/PartnerBrands/brand-1.png" />
          </div>
        </Slider>
      </div>
    </section>
  );
}
