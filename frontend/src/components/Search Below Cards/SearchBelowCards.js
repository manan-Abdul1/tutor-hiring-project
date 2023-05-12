import React from 'react'
import reviewCalendar from "../svg/review-calendar.svg"
import reviewlearn from "../svg/review-learn.svg"
import reviewRating from "../svg/review-rating-old.svg"
import reviewSearch from "../svg/review-search.svg"
const SearchBelowCards = () => {
  return (
    <div className='container my-20'>
        <div className='row'>
        <div class="col-md-3 service-wrapper text-center border-r-[2px]">
                <img class="justify-center mx-auto mb-4" src={reviewSearch} alt="review search"/>
                <h6 class="mb-3"><b>Search</b></h6>
                <p>Find home tutor according to your requirement.Hire tutor on single click.</p>
            </div>
            <div class="col-md-3 service-wrapper text-center border-r-[2px]">
                <img class="justify-center mx-auto mb-3" src={reviewRating} alt="review rating"/>
                <h6 class="mb-3"><b>Select</b></h6>
                <p>View tutors profile and hire a tutor who suits you best according to your need.</p>
            </div>
            <div class="col-md-3 service-wrapper text-center border-r-[2px]">
                <img class="justify-center mx-auto mb-4 " src={reviewCalendar} alt="review calander"/>
                <h6 class="mb-3"><b>Schedule</b></h6>
                <p>Schedule a trial class with your required tutor in just 30 minutes.</p>
            </div>
            <div class="col-md-3 service-wrapper text-center">
                <img class="justify-center mx-auto mb-4" src={reviewlearn} alt="review learn"/>
                <h6 class="mb-3"><b>Study</b></h6>
                <p>TheTutors handles the behind the scenes stuff so you can focus on your study.</p>
            </div>
        </div>
      
    </div>
  )
}

export default SearchBelowCards
