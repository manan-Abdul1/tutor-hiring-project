import React from "react";
import './HomeSection.css'
import SubjectSelect from "../../components/SubjectChanges/SubjectChanges";
import ClassSelect from "../../components/ClassSelect/ClassSelect";
export default function HomeSection() {
  return (
    <>
    <div className="search-form mt-12">
      <div className="container shadow-gray-500 shadow-2xl border rounded-lg  md:text-center justify-center">
        <h2 className="mx-2 md:my-5 md:text-center md:text-3xl mb-3 banner-heading">
          FIND YOUR <span className="text-warning"> DESIRED</span> HOME TUTOR
        </h2>
        <form
          method="get"
        //   action="https://thetutors.pk/tutors"
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="mb-2">
              <input
                className="md:px-16 py-2 md:w-full px-2 border rounded-lg"
                // style={{ width: "281.646px;" }}
                type="text"
                placeholder="Your Location"
                name="location"
                autoComplete="off"
              />
              <input type="hidden" name="latitude" value="" />
              <input type="hidden" name="longitude" value="" />
            </div>
            <ClassSelect/>
            <SubjectSelect/>

            <div>
              <button type="submit" className="text-white bg-green-600 hover:bg-green-500 md:w-full w-max px-10  py-2 md:px-6 rounded">
                <i className="fa fa-search pr-2"></i> Find Tutors
              </button>
            </div>
            </div>
            </form>
        </div>
        </div>
        </>
    );
    }
