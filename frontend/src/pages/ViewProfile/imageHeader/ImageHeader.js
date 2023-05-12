import React from 'react'

export default function ImageHeader() {
  return (
    <>
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
        </div>
        </div>
    </>
  )
}
