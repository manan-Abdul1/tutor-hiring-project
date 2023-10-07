import React, { useEffect, useState } from "react";
import "./HomeSection.css";
import SubjectSelect from "../../components/SubjectChanges/SubjectChanges";
import ClassSelect from "../../components/ClassSelect/ClassSelect";
import LocationSelect from "../../components/LocationSelect/LocationSelect";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function HomeSection() {
  const navigate = useNavigate();
  const tutors = useSelector((state) => state.tutor.teachers) || [];
  const [filteredTutors, setFilteredTutors] = useState(tutors);

  const [locationFilter, setLocationFilter] = useState("");
  const [classFilter, setClassFilter] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");

  const handleLocationSelect = (location) => {
    setLocationFilter(location);
  };
  const handleClassSelect = (classFilter) => {
    setClassFilter(classFilter);
  };
  const handleSubjectSelect = (subject) => {
    setSubjectFilter(subject);
  };
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   navigate("/tutors", { state: { filteredTutors } });
  // };
  const handleSearch = (e) => {
    e.preventDefault();
    const filteredTutorsResult = tutors.filter((tutor) => {
      // Add your filtering logic here based on locationFilter, classFilter, and subjectFilter
      let isMatch = true;

      if (locationFilter && !tutor.location.includes(locationFilter)) {
        isMatch = false;
      }

      if (classFilter && !tutor.classes.includes(classFilter)) {
        isMatch = false;
      }

      if (subjectFilter && !tutor.subjects.includes(subjectFilter)) {
        isMatch = false;
      }

      return isMatch;
    });

    setFilteredTutors(filteredTutorsResult);
    navigate(`/tutors/${locationFilter}-${classFilter}-${subjectFilter}`);
  };
  
  return (
    <>
      <div className="search-form mt-16">
        <div className="container shadow-gray-500 shadow-2xl border rounded-lg  md:text-center justify-center">
          <h2 className="mx-2 md:my-5 md:text-center md:text-3xl mb-3 banner-heading">
            FIND YOUR <span className="text-warning"> DESIRED</span> HOME TUTOR
          </h2>
          <form onSubmit={handleSearch}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <LocationSelect onSelect={handleLocationSelect} />
              <ClassSelect onSelect={handleClassSelect} />
              <SubjectSelect onSelect={handleSubjectSelect} />

              <div>
                <button
                  type="submit"
                  className="text-white bg-green-600 hover:bg-green-500 md:w-full w-max px-10  py-2 md:px-6 rounded"
                >
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
