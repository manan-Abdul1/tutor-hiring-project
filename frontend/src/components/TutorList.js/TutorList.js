import React from 'react';
import TutorCard from '../TutorCard/TutorCard';

export default function TutorList({tutors}) {
  return (
    <>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-4 mt-4">
      {tutors.map(tutor => (
        <TutorCard
          key={tutor.name}
          name={tutor.name}
          image={tutor.image}
          qualification={tutor.qualification}
          experience={tutor.experience}
          classes={tutor.classes}
          subjects={tutor.subjects}
          rating={tutor.rating}
          age={tutor.age}
          verified={tutor.verified}
          gender={tutor.gender}
        />
      ))}
     </div>
    </>
  );
}
