import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeTutorSectionList from './HomeTutorSectionList';
import { useSelector } from 'react-redux';

export default function HomeTutorSection() {
  const tutors = useSelector((state) => state?.tutor?.teachers);

  const filteredTutors = tutors?.filter((tutor) => tutor.rating > 4).slice(10, 15);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        swipeToSlide: false,
        arrows: true,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 720,
            settings: {
              className: 'mx-6',
              slidesToShow: 1,
              dots: true,
              arrows: false,
            },
          }
        ]
      };

  return (
    <>
      <div className="mt-20 mb-20 px-6 ">
        <div className="row mb-3">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-center">
            <h4 className="text-black uppercase font-bold text-3xl">
              Best <span className="text-green-500 underline">Home</span> Tutors
            </h4>
            <p className="text-gray-600 text-lg pt-4 px-4">
              We are working with best home tutors. We are providing home tutors in Lahore, home tutor in Islamabad,
              home tutor in Karachi as well as students can find tutors online. Each tutor has an overview and interview
              with us.
            </p>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className=''>
        <Slider {...settings}>
            {filteredTutors?.map((tutor, index) => (
            <HomeTutorSectionList key={index} tutor={tutor} />
            ))}
        </Slider>
        </div> 
      </div>
    </>
  );
}
