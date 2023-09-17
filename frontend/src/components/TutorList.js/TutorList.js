import React from 'react';
import TutorCard from '../TutorCard/TutorCard';

export default function TutorList({ tutors }) {

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 mt-4">
        {tutors?.map(tutor => (
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
          />
        ))}
      </div>
    </>
  );
}
