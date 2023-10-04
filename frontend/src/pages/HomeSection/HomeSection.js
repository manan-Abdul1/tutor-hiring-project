import React from "react";
import './HomeSection.css'
import SubjectSelect from "../../components/SubjectChanges/SubjectChanges";
import ClassSelect from "../../components/ClassSelect/ClassSelect";
import LocationSelect from "../../components/LocationSelect/LocationSelect";
export default function HomeSection() {
  return (
    <>
    <div className="search-form mt-16">
      <div className="container shadow-gray-500 shadow-2xl border rounded-lg  md:text-center justify-center">
        <h2 className="mx-2 md:my-5 md:text-center md:text-3xl mb-3 banner-heading">
          FIND YOUR <span className="text-warning"> DESIRED</span> HOME TUTOR
        </h2>
        <form
          method="get"
        //   action="https://thetutors.pk/tutors"
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <LocationSelect/>
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
