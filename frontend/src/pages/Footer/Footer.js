import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div class='container-fluid mt-5 footer'>
    <div class='container text-left'>
      <div class='row footerRow' >
        <div class='col-lg-3 col1  pt-2 pd-4'>
            <h1 class='fs-4'>
            The Tutors
            </h1>
            <div class='mt-4'>
                
            {/* <i class="fa fa-facebook rounded-circle p-2 m-2 icon" style={{border:"1px solid"}}></i> */}
            <i class="fa-brands fa-instagram rounded-circle p-2 mr-2 icon" style={{border:"1px solid"}}></i>
            <i class="fa-brands fa-twitter rounded-circle p-2 m-2 icon" style={{border:"1px solid"}}></i>
            <i class="fa-brands fa-linkedin-in rounded-circle p-2 m-2 icon" style={{border:"1px solid"}}></i>

            </div>
            <ul class='mt-4'>
            <li><a href='#' class='footerul '><i class="fa-solid fa-arrow-right" style={{color: "#ffffff",}} />Home</a></li>
              <li><a href='#' class='footerul'><i class="fa-solid fa-arrow-right" style={{color: "#ffffff",}} />About</a></li>
              <li><a href='#' class='footerul'><i class="fa-solid fa-arrow-right" style={{color: "#ffffff",}} />FAQ's</a></li>
              <li><a href='#' class='footerul'><i class="fa-solid fa-arrow-right" style={{color: "#ffffff",}} />Blogs</a></li>
              <li><a href='#' class='footerul'><i class="fa-solid fa-arrow-right" style={{color: "#ffffff",}} />T&C For Tutors</a></li>
              <li><a href='#' class='footerul'><i class="fa-solid fa-arrow-right" style={{color: "#ffffff",}} />T&C For Students</a></li>
              
            </ul>
            

        </div>
        
        <div class='col-lg-4 col3 pt-2 pd-4 text-center'>
        <p class='footerul'><i class="fa-solid fa-arrow-right" style={{color: "#ffffff",}} />Tutors in DHA phase 1</p>
        
        </div>
        <div class='col-lg-4 col4 pt-2 pd-4'>
        <h1 class='fs-4'>
        Contact Us
        </h1>
        <p class='mt-4'>Get in touch with us today to learn more about our online and home tutoring services. Our experienced tutors are here to help you achieve your academic goals, no matter where you are located. Whether you need help with math, science, English, or any other subject, we have a tutor who can help. Contact us now to schedule your first session and start seeing results.</p>
            <p class='mt-3'><i class="fa-solid fa-location-dot mr-2"></i>43 Raymouth Rd. Baltemoer.</p>
            <p class='mt-3'><i class="fa-solid fa-phone mr-2"></i>(+92)34567892123</p>
            {/* <p class='mt-2'><i class="fa-solid fa-phone mr-2"></i>(+92)34567892123</p> */}
            <p class='mt-3'><i class="fa-solid fa-envelope mr-2"></i>info@gmail.com</p>
        
        </div>
      </div>
      <div class='col-md-8 copyright pb-3 '>
        <p class='text-center mt-3 '>© Copyright 2023 <span style={{color:'green'}}>The Tutors</span></p>
      </div>
      </div>
      
    </div>
  )
}

export default Footer
