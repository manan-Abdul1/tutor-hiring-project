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
    console.log('Filter Values:', filterValues);

    // Implement filtering logic based on filterValues
    const filteredTutorsResult = tutors.filter((tutor) => {
      // Implement your filtering logic here
      let isMatch = true;

      if (filterValues.location) {
        isMatch = isMatch && tutor.location.includes(filterValues.location);
        console.log(isMatch, 'ismatch-')
        // isMatch = false;
      }

      if (filterValues.selectedClass && !tutor.classes.includes(filterValues.selectedClass)) {
        isMatch = false;
      }

      // Handle selectedSubject filter
      if (Array.isArray(filterValues.selectedSubject) && filterValues.selectedSubject.length > 0) {
        // Check if any of the selected subjects match the tutor's subjects
        const subjectMatch = filterValues.selectedSubject.some((selectedSubject) =>
          tutor.subjects.includes(selectedSubject.toLowerCase()) // convert to lowercase for case-insensitive comparison
        );

        if (!subjectMatch) {
          isMatch = false;
        }
      }
      console.log('filterValues.selectedSubject:', filterValues.selectedSubject);
      console.log('tutor.subjects:', tutor.subjects);
      

      if (filterValues.experience && !tutor.experience.includes(filterValues.experience)) {
        isMatch = false;
      }

      if (filterValues.gender !== 'Any' && filterValues.gender !== tutor.gender) {
        isMatch = false;
      }

      if (filterValues?.fee && !tutor?.fee?.includes(filterValues.fee)) {
        isMatch = false;
      }

      return isMatch;
    });
    console.log(filteredTutorsResult, 'filteredTutorsResult')

    // Update the filteredTutors state with the filtered list of tutors
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
          <option value="5kto10k">5k to 10k</option>
          <option value="10kto15k">10k to 15k</option>
          <option value="15kto20k">15k to 20k</option>
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
