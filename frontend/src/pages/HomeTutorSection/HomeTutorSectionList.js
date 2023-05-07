import React from 'react'
import TutorCard from '../../components/TutorCard/TutorCard'

export default function HomeTutorSectionList({tutor}) {
  return (
    <>
     <div className="mb-4 mt-4">
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
        </div>
    </>
  )
}
