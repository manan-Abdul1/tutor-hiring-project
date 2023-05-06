import React from "react";
import './HomeSection.css'
import SubjectSelect from "../../components/SubjectChanges/SubjectChanges";
import ClassSelect from "../../components/ClassSelect/ClassSelect";
export default function HomeSection() {
  return (
    <>
    <div className="search-form mt-12">
      <div class="container shadow-gray-500 shadow-2xl border rounded-lg  text-center justify-center">
        <h2 class="mx-2 my-5 text-center text-4xl banner-heading">
          FIND YOUR <span className="text-warning"> DESIRED</span> HOME TUTOR
        </h2>
        <form
          method="get"
        //   action="https://thetutors.pk/tutors"
        >
          <div class="grid grid-cols-2 gap-4">
            <div class="mb-2 p-lr-5">
              <input
                className="px-16 py-2 border rounded-lg"
                style={{ width: "281.646px;" }}
                type="text"
                placeholder="Your Location"
                name="location"
                autocomplete="off"
              />
              <input type="hidden" name="latitude" value="" />
              <input type="hidden" name="longitude" value="" />
            </div>
            <ClassSelect/>
            <SubjectSelect/>

            <div>
              <button type="submit" className="text-white bg-green-600 hover:bg-green-500 w-full py-2 px-6 rounded">
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
