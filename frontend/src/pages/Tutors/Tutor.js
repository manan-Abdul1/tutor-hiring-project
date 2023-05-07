import React, { useState } from "react";
import TutorCard from "../../components/TutorCard/TutorCard";

function Tutor() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTutors, setFilteredTutors] = useState([]);

  // Sample data for the tutor list
  const tutorList = [
    { name: "John Doe", subject: "Mathematics", rating: 4.5 },
    { name: "Jane Doe", subject: "English", rating: 4.2 },
    { name: "James Smith", subject: "Science", rating: 4.8 },
    { name: "Jenny Smith", subject: "History", rating: 4.0 },
    { name: "Bob Johnson", subject: "Geography", rating: 3.9 },
    { name: "Alice Johnson", subject: "Physics", rating: 4.6 },
    { name: "Mark Brown", subject: "Chemistry", rating: 4.7 },
    { name: "Emily Brown", subject: "Biology", rating: 4.1 },
    { name: "Tom Wilson", subject: "Social Studies", rating: 4.3 },
  ];

  // Filter the tutors based on the search query
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const filtered = tutorList.filter((tutor) =>
      tutor.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredTutors(filtered);
  };

  // Show 3 tutors at a time
  const tutorsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastTutor = currentPage * tutorsPerPage;
  const indexOfFirstTutor = indexOfLastTutor - tutorsPerPage;
  const currentTutors = filteredTutors.slice(
    indexOfFirstTutor,
    indexOfLastTutor
  );

  // Calculate the number of pages for pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredTutors.length / tutorsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex justify-between">
        <div className="w-1/3">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for a tutor..."
            className="w-full rounded-md border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="w-2/3 pl-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentTutors.map((tutor, index) => (
              <TutorCard key={index} tutor={tutor} />
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                className={`mx-2 px-2 py-1 rounded-full ${
                  currentPage === pageNumber
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
 
  );}
  export default Tutor;