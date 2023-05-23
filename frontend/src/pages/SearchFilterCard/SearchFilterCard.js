import { useState } from "react";


function SearchFilterCard({handleFilterChange}) {
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
      fee
    };
    handleFilterChange(filterValues);
  };
  
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleFeeChange = (event) => {
    setFee(event.target.value);
  };

  // const handleSearch = () => {
  //   // TODO: Implement search functionality
  // };

  return (
    
    <div className="p-4 bg-gray-100 mx-2 mt-20 mb-20 rounded-lg shadow-2xl ">
  <h3 className="text-2xl font-semibold mb-4 text-center">Refine Search</h3>
  <div className="my-2">
    <input
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="location"
      type="text"
      value={location}
      onChange={handleLocationChange}
      autoComplete="off"
      placeholder="Enter Location"
    />
  </div>
  <div className="my-2">
    <select
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="class"
      value={selectedClass}
      onChange={handleClassChange}
    >
      <option value="">Select Class</option>
      <option value="1">Class 1</option>
      <option value="2">Class 2</option>
      <option value="3">Class 3</option>
    </select>
  </div>
  <div className="my-2">
    <select
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="subject"
      value={selectedSubject}
      onChange={handleSubjectChange}
    >
      <option value="">Select Subject</option>
      <option value="maths">Maths</option>
      <option value="english">English</option>
      <option value="science">Science</option>
    </select>
  </div>
  <div className="my-2">
    <input
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="experience"
      type="text"
      value={experience}
      onChange={handleExperienceChange}
      placeholder="Experience"
    />
  </div>
  <div className="my-2">
    <select
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="gender"
      value={gender}
      onChange={handleGenderChange}
    >
      <option value="any">Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>
  <div className="my-2">
    <select
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="fee"
      value={fee}
      onChange={handleFeeChange}
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

);}
export default SearchFilterCard;