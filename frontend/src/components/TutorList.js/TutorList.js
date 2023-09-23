import React, { useState } from 'react';
import TutorCard from '../TutorCard/TutorCard';
import Pagination from '../Pagination/Pagination';

export default function TutorList({ tutors }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const indexOfLastTutor = currentPage * itemsPerPage;
  const indexOfFirstTutor = indexOfLastTutor - itemsPerPage;
  const currentTutors = tutors.slice(indexOfFirstTutor, indexOfLastTutor);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 mt-4">
        {currentTutors?.map((tutor) => (
          <TutorCard
            key={tutor._id}
            name={tutor.name}
            image={tutor?.profileImageUrl}
            qualification={tutor.education}
            experience={tutor.experience}
            classes={tutor.classes.join(', ')}
            subjects={tutor.subjects.join(', ')}
            rating={tutor.rating}
            age={tutor.age}
            verified={tutor.isVerified}
            gender={tutor.gender}
            id={tutor._id}
          />
        ))}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={tutors.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
}
