import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeTutorSectionList from './HomeTutorSectionList';

const tutors = [
    {
      name: 'John Doe',
      image: 'https://thetutors.pk/avatars/1570165374581DA1A0-8960-49AC-9BCE-953EAF7240AF.jpeg',
      qualification: 'BSC Engineering',
      experience: '5 years',
      classes: '6th to 10th grade',
      subjects: 'Mathematics, Physics',
      rating: 4.5,
      age: 35,
      gender: 'Female',
      verified: true
    },
    {
      name: 'Jane Smith',
      image: 'https://thetutors.pk/avatars/1570165374581DA1A0-8960-49AC-9BCE-953EAF7240AF.jpeg',
      qualification: 'Bachelors in English Literature',
      experience: '3 years',
      classes: '11th and 12th grade',
      subjects: 'English',
      rating: 4.0,
      age: 28,
      gender: 'Male',
      verified: false
    },
    {
      name: 'Jane Smith',
      image: 'https://thetutors.pk/avatars/16804287502020_07_02%2010_53%20AM%20Office%20Lens_11zon.jpg',
      qualification: 'Bachelors in English Literature',
      experience: '3 years',
      classes: '11th and 12th grade',
      subjects: 'English',
      rating: 4.0,
      age: 28,
      gender: 'Male',
      verified: false
    },
    {
      name:"Abdul Manan"   ,
      image:"https://thetutors.pk/avatars/16804287502020_07_02%2010_53%20AM%20Office%20Lens_11zon.jpg",
      qualification:"Bachelors in English Literature",
      experience:"17 years",
      classes:"9th",
      subjects:"Math",
      rating:4,
      age: 21,
      gender:"Male",
      verified:true,
    },
    {
      name:"Abdul Manan"   ,
      image:"https://thetutors.pk/avatars/16804287502020_07_02%2010_53%20AM%20Office%20Lens_11zon.jpg",
      qualification:"Bachelors in English Literature",
      experience:"17 years",
      classes:"9th",
      subjects:"Math",
      rating:4,
      age: 21,
      gender:"Male",
      verified:true,
    }
  ];

export default function HomeTutorSection() {
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
            {tutors.map((tutor, index) => (
            <HomeTutorSectionList key={index} tutor={tutor} />
            ))}
        </Slider>
        </div> 
      </div>
    </>
  );
}
