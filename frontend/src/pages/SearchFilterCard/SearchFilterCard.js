import React, { useState } from "react";

export default function SearchFilterCard({ tutors, setFilteredTutors }) {
  const [location, setLocation] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [experience, setExperience] = useState("");
  const [gender, setGender] = useState("Any");
  const [fee, setFee] = useState("");

  const handleSearch = () => {
    const filterValues = {
      location,
      selectedClass,
      selectedSubject,
      experience,
      gender,
      fee,
    };
    applyFilters(filterValues);
  };

  const applyFilters = (filterValues) => {
    const filteredTutorsResult = tutors.filter((tutor) => {
      const lowercaseSubjects = tutor.subjects.map((subject) => subject.toLowerCase());
      const lowercaseClasses = tutor.classes.map((classItem) => classItem.toLowerCase());
      let isMatch = true;

      if (filterValues.location) {
        isMatch = isMatch && tutor.location.includes(filterValues.location);
      }

      if (typeof filterValues.selectedClass === 'string' && filterValues.selectedClass.trim() !== '') {
        const subjectMatch = lowercaseClasses.some((subject) =>
          subject.includes(filterValues.selectedClass.toLowerCase())
        );

        if (!subjectMatch) {
          isMatch = false;
        }
      }

      if (typeof filterValues.selectedSubject === 'string' && filterValues.selectedSubject.trim() !== '') {
        const subjectMatch = lowercaseSubjects.some((subject) =>
          subject.toLowerCase() === filterValues.selectedSubject.toLowerCase()
        );
      
        if (!subjectMatch) {
          isMatch = false;
        }
      }

      if (filterValues.experience && !tutor.experience.includes(filterValues.experience)) {
        isMatch = false;
      }

      if (filterValues.gender !== 'Any' && filterValues.gender !== tutor.gender) {
        isMatch = false;
      }
      
      if (filterValues.fee) {
        const feeRange = filterValues.fee; 
        const tutorFee = tutor.perSubjectFee;

        if (tutorFee < feeRange) {
          isMatch = false;
        }
      }

      return isMatch;
    });

    setFilteredTutors(filteredTutorsResult);
  };

  return (
    <div className="p-4 bg-gray-100 mx-2 mt-20 mb-20 rounded-lg shadow-2xl">
      <h3 className="text-2xl font-semibold mb-4 text-center">Refine Search</h3>
      <div className="my-2">
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          autoComplete="off"
          placeholder="Enter Location"
        />
      </div>
      <div className="my-2">
        <select
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="class"
          value={selectedClass}
          onChange={(event) => setSelectedClass(event.target.value)}
        >
          <option value="">Select Class</option>
          <option value="1">Class 1</option>
          <option value="2">Class 2</option>
          <option value="3">Class 3</option>
          <option value="9">Class 9</option>
        </select>
      </div>
      <div className="my-2">
        <select
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="subject"
          value={selectedSubject}
          onChange={(event) => setSelectedSubject(event.target.value)}
        >
          <option value="">Select Subject</option>
          <option value="maths">Maths</option>
          <option value="english">English</option>
          <option value="science">Science</option>
          <option value="algebra">Algebra</option>
          <option value="dsa">DSA</option>
        </select>
      </div>
      <div className="my-2">
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="experience"
          type="text"
          value={experience}
          onChange={(event) => setExperience(event.target.value)}
          placeholder="Experience"
        />
      </div>
      <div className="my-2">
        <select
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="gender"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option value="Any">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="my-2">
        <select
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fee"
          value={fee}
          onChange={(event) => setFee(event.target.value)}
        >
          <option value="">Fee</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
          <option value="3000">3000</option>
        </select>
      </div>
      <div className="mt-3">
        <button onClick={handleSearch} className="text-white bg-green-600 hover:bg-green-500 md:w-full w-max px-10 py-2 md:px-6 rounded-full">
          Search
        </button>
      </div>
    </div>
  );
}
