import React from "react";

export default function ViewProfile() {
  return (
    <>
      <div className="container mx-auto my-20">
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-xs-12 col-md-10 col-lg-10">
                <div className="row">
                  <div className="col-md-2 text-center">
                    <img
                      src="https://thetutors.pk/avatars/1571828057FF00B2E4-8C2F-4E90-A7CA-3CCB6AF37BD6.jpeg"
                      className="rounded-full"
                      alt="User Avatar"
                    />
                  </div>
                  <div className="col-md-7">
                    <h4 className="black text-left text-2xl mb-2 font-bold">
                      <i
                        className="fa fa-check-circle text-success"
                        title="Featured &amp; Verified Tutor"
                      ></i>{" "}
                      Muhammad Adeel
                    </h4>
                    <div className="row">
                      <div className="col-lg-8 col-sm-12 col-12 text-left ">
                        <h6 className="text-warning font-semibold mb-2" id="stars">
                          <i className="fa fa-star"></i>{" "}
                          <i className="fa fa-star"></i>{" "}
                          <i className="fa fa-star"></i>{" "}
                          <i className="fa fa-star"></i>{" "}
                          <i className="fa fa-star"></i>
                        </h6>
                        <p className="text-center-sm">
                          <small>
                            <span className="alert alert-info p-1 m-0">
                              Fee starts from{" "}
                              <u className="font-bold">18000</u>
                              <small> /Per Month</small>
                            </span>{" "}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <button
                      type="submit"
                      className="bg-green-500 text-white rounded-full hover:bg-blue-500 mb-2  px-4 py-2 mt-4 f"
                      data-toggle="modal"
                      data-target="#send-request-popup"
                      data-tutor="MjY5"
                      data-tutorname="Muhammad Adeel"
                    >
                      Hire <u>Muhammad</u>
                    </button>
                  </div>
                </div>
                <section className="">
                <h6 className="heading font-semibold mt-4 uppercase">Introduction</h6>
                <div className="mt-6">
                <div className="flex my-2">
                  <p className="font-semibold text-lg">About Tutor </p>
                  <p className="text-left ml-60 text-gray-500">32yrs, Male </p>
                </div>
                <hr/>
                <div className="flex my-2">
                  <p className="font-semibold text-lg">Qualification </p>
                  <p className="text-left ml-60 text-gray-500">CA Finalist </p>
                </div>
                <hr/>
                <div className="flex my-2">
                  <p className="font-semibold text-lg">Experience </p>
                  <p className="text-left ml-60 text-gray-500">4 years </p>
                </div>
                <hr/>
                <div className="flex my-2">
                  <p className="font-semibold text-lg">English Skills </p>
                  <p className="text-left ml-60 text-gray-500">Medium</p>
                </div>
                <hr/>
                <div className="flex my-2">
                  <p className="font-semibold text-lg">Teaching in </p>
                  <p className="text-left ml-60 text-gray-500">Not specified </p>
                </div>
                <hr/>
                </div>
                </section>
                <section className="">
                <h6 className="heading font-semibold mt-4 uppercase">Classes and Subjects</h6>
                <div className="mt-6">
                <div className="flex my-2">
                  <p className="font-semibold text-lg">A Level </p>
                  <div className="flex flex-col ml-60">

                  <p className="text-left my-1 text-gray-500">
                  <i className="fa mx-2 fa-check-circle text-success" title="Featured &amp; Verified Tutor"></i>
                  Computers</p>
                  <p className="text-left my-1 text-gray-500">
                  <i className="fa mx-2 fa-check-circle text-success" title="Featured &amp; Verified Tutor"></i>
                  Accounting</p>
                  <p className="text-left my-1 text-gray-500">
                  <i className="fa mx-2 fa-check-circle text-success" title="Featured &amp; Verified Tutor"></i>
                  Economics</p>
                  <p className="text-left my-1 text-gray-500">
                  <i className="fa mx-2 fa-check-circle text-success" title="Featured &amp; Verified Tutor"></i>
                  Business Study</p>
                  <div className="flex">

                  <p className="my-2 ">
                    <small>
                      <span className="alert alert-info p-1 m-0">
                        Fee starts from{" "}
                        <u className="font-bold">18000</u>
                        <small> /Per Month</small>
                      </span>{" "}
                    </small>
                  </p> <p className="my-2 mx-2">
                    <small>
                      <span className="alert alert-info p-1 m-0">
                        Fee starts from{" "}
                        <u className="font-bold">18000</u>
                        <small> /Per Month</small>
                      </span>{" "}
                    </small>
                  </p>
                  </div>
                  </div>
                </div>
                <hr/>
                </div>
                </section>
                <section className="">
                <h6 className="heading font-semibold mt-4 mb-4 uppercase">Preferred Locations</h6>
                <div className="flex flex-col my-2">
                <p className="text-left my-3 text-gray-500">
                <i class="fa-solid mx-2 fa-location-dot fa-beat text-success"></i>
                  Lahore Cantt, Lahore, Pakistan</p>
                <hr/>
                <p className="text-left my-3 text-gray-500">
                <i class="fa-solid mx-2 fa-location-dot fa-beat text-success"></i>
                Gulberg 2, Lahore, Pakistan</p>
                <hr/>

                <p className="text-left my-3 text-gray-500">
                <i class="fa-solid mx-2 fa-location-dot fa-beat text-success"></i>
                Mughalpura, Lahore, Pakistan</p>
                <hr/>
                <p className="text-left my-3 text-gray-500">
                <i class="fa-solid mx-2 fa-location-dot fa-beat text-success"></i>
                DHA Phase 8, Lahore, Pakistan</p>
                <hr/>

                </div>
                </section>
                </div>
                </div>
                </div>
                </div>
                </>
);}

// import React from "react";

// export default function ViewProfile() {
//   return (
//     <>
//       <div className="container mx-auto my-20">
//         <h1 className="text-center text-3xl ">View Profile</h1>
//         <div>
//           <div class="container">
//             <div class="row">
//               <div class="col-md-1"></div>
//               <div class="col-xs-12 col-md-10 col-lg-10">
//                 <div class="row">
//                   {" "}
//                   <div class="col-md-2 text-center">
//                     <img
//                       src="https://thetutors.pk/avatars/1571828057FF00B2E4-8C2F-4E90-A7CA-3CCB6AF37BD6.jpeg"
//                       class="user-avatar"
//                     />{" "}
//                   </div>
//                   <div class="col-md-7">
//                     <h4 id="name" class="black text-left bold">
//                       {" "}
//                       <i
//                         class="fa fa-check-circle text-success"
//                         title="Featured &amp; Verified Tutor"
//                       ></i>{" "}
//                       Muhammad Adeel
//                     </h4>
//                     <div class="row">
//                       <div class="col-lg-8 col-sm-12 col-12 text-left">
//                         <h6 class="text-warning semibold" id="stars">
//                           {" "}
//                           <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
//                           <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
//                           <i class="fa fa-star"></i>{" "}
//                         </h6>
//                         <p class="text-center-sm">
//                           {" "}
//                           <small>
//                             {" "}
//                             <span class="alert alert-info p-1 m-0">
//                               Fee starts from <u class="bold">18000</u>
//                               <small> /Per Month</small>
//                             </span>{" "}
//                           </small>{" "}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="col-md-3">
//                     {" "}
//                     <button
//                       type="submit"
//                       class="btn btn-primary mb-2 mx-4 mx-md-0 mr-lg-2 py-2 mt-4 form-control-inline3 btn-block btn-hire"
//                       data-toggle="modal"
//                       data-target="#send-request-popup"
//                       data-tutor="MjY5"
//                       data-tutorname="Muhammad Adeel"
//                     >
//                       Hire <u>Muhammad</u>
//                     </button>{" "}
//                   </div>{" "}
//                 </div>
//                 <h6 class="black bold mt-4 uppercase">Introduction</h6>
//                 <div class="separator "></div>
//                 <ul class="single-tour-container" style={{padding: "0px;"}}>
//                   {" "}
//                   <li>
//                     {" "}
//                     <div class="tour-item-title list-font">About Tutor</div>
//                     <div class="tour-item-description list-font">
//                       32yrs, Male
//                     </div>
//                   </li>{" "}
//                   <li>
//                     {" "}
//                     <div class="tour-item-title list-font">
//                       Qualification
//                     </div>{" "}
//                     <div class="tour-item-description list-font">
//                       CA Finalist
//                     </div>{" "}
//                   </li>{" "}
//                   <li>
//                     {" "}
//                     <div class="tour-item-title list-font">Experience</div>{" "}
//                     <div class="tour-item-description list-font">4 years</div>{" "}
//                   </li>{" "}
//                   <li>
//                     {" "}
//                     <div class="tour-item-title list-font">
//                       English Skills
//                     </div>{" "}
//                     <div class="tour-item-description list-font">Medium</div>{" "}
//                   </li>{" "}
//                   <li>
//                     {" "}
//                     <div class="tour-item-title list-font">
//                       Teaching In
//                     </div>{" "}
//                     <div class="tour-item-description list-font">
//                       Not specified
//                     </div>{" "}
//                   </li>{" "}
//                 </ul>{" "}
//                 <h6 class="black bold mt-4 uppercase">
//                   Classes &amp; Subjects
//                 </h6>{" "}
//                 <div class="separator "></div>{" "}
//                 <ul class="single-tour-container" style={{padding: "0px"}}>
//                   {" "}
//                   <li>
//                     {" "}
//                     <div class="tour-item-title list-font">A LEVEL </div>{" "}
//                     <div class="tour-item-description list-font">
//                       {" "}
//                       <div class="">
//                         <i class="fa fa-check-circle text-success"></i>Computer
//                       </div>{" "}
//                       <div class="">
//                         <i class="fa fa-check-circle text-success"></i>
//                         Accounting
//                       </div>{" "}
//                       <div class="">
//                         <i class="fa fa-check-circle text-success"></i>Economics
//                       </div>{" "}
//                       <div class="mb-3">
//                         <i class="fa fa-check-circle text-success"></i>Business
//                         study
//                       </div>{" "}
//                       <p class="fee">
//                         {" "}
//                         <span class="alert alert-info">
//                           <b>18,000</b>
//                           <small>
//                             {" "}
//                             /Per Month <b>(For all subjects)</b>
//                           </small>
//                         </span>{" "}
//                         <span class="alert alert-info ml-2">
//                           <b>11,000</b>
//                           <small>
//                             {" "}
//                             /Per Month <b>(Per Subject)</b>
//                           </small>
//                         </span>{" "}
//                       </p>{" "}
//                     </div>{" "}
//                   </li>{" "}
//                   <li>
//                     {" "}
//                     <div class="tour-item-title list-font">O LEVEL </div>{" "}
//                     <div class="tour-item-description list-font">
//                       {" "}
//                       <div class="">
//                         <i class="fa fa-check-circle text-success"></i>Computer
//                       </div>{" "}
//                       <div class="">
//                         <i class="fa fa-check-circle text-success"></i>
//                         Accounting
//                       </div>{" "}
//                       <div class="">
//                         <i class="fa fa-check-circle text-success"></i>Economics
//                       </div>{" "}
//                       <div class="mb-3">
//                         <i class="fa fa-check-circle text-success"></i>Business
//                         study
//                       </div>{" "}
//                       <p class="fee">
//                         {" "}
//                         <span class="alert alert-info">
//                           <b>18,000</b>
//                           <small>
//                             {" "}
//                             /Per Month <b>(For all subjects)</b>
//                           </small>
//                         </span>{" "}
//                         <span class="alert alert-info ml-2">
//                           <b>8,000</b>
//                           <small>
//                             {" "}
//                             /Per Month <b>(Per Subject)</b>
//                           </small>
//                         </span>{" "}
//                       </p>{" "}
//                     </div>{" "}
//                   </li>{" "}
//                 </ul>{" "}
//                 <h6 class="black bold mt-4 uppercase">Courses</h6>{" "}
//                 <div class="separator "></div>{" "}
//                 <ul class="single-tour-container" style={{padding: "0px"}}>
//                   {" "}
//                 </ul>{" "}
//                 <h6 class="black bold mt-4 uppercase">Preferred Locations</h6>{" "}
//                 <div class="separator "></div>{" "}
//                 <ul class="single-tour-container" style={{padding: "0px"}}>
//                   {" "}
//                   <li>
//                     {" "}
//                     <div class="tour-item-description list-font float-left">
//                       {" "}
//                       <div>
//                         <i class="fa fa-map-marker text-success mr-2"></i>Lahore
//                         Cantt., Lahore, Pakistan
//                       </div>{" "}
//                     </div>{" "}
//                   </li>{" "}
//                   <li>
//                     {" "}
//                     <div class="tour-item-description list-font float-left">
//                       {" "}
//                       <div>
//                         <i class="fa fa-map-marker text-success mr-2"></i>
//                         Gulberg 2, Lahore, Pakistan
//                       </div>{" "}
//                     </div>{" "}
//                   </li>{" "}
//                   <li>
//                     {" "}
//                     <div class="tour-item-description list-font float-left">
//                       {" "}
//                       <div>
//                         <i class="fa fa-map-marker text-success mr-2"></i>
//                         Mughalpura, Lahore, Pakistan
//                       </div>{" "}
//                     </div>{" "}
//                   </li>{" "}
//                   <li>
//                     {" "}
//                     <div class="tour-item-description list-font float-left">
//                       {" "}
//                       <div>
//                         <i class="fa fa-map-marker text-success mr-2"></i>DHA
//                         Phase 8, Lahore, Pakistan
//                       </div>{" "}
//                     </div>{" "}
//                   </li>{" "}
//                 </ul>{" "}
//                 <div class="">
//                   {" "}
//                   <div class="tour-schedule">
//                     {" "}
//                     <h6 class="black bold mt-4 uppercase">Tutor Detail</h6>{" "}
//                     <div class="separator "></div>{" "}
//                     <p>
//                       {" "}
//                       Passionate to teach Financial Accounting &amp; Reporting
//                       Strategic Business Management Cost &amp; Management
//                       Accounting IT Management{" "}
//                     </p>{" "}
//                   </div>{" "}
//                 </div>{" "}
//               </div>{" "}
//               <div class="col-md-1"></div>{" "}
//             </div>{" "}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
