import React from 'react'
import HomeTutorSectionCard from './HomeTutorSectionCard'

export default function HomeTutorSectionList({tutor}) {
  return (
    <>
     <div className="mt-3">
     <HomeTutorSectionCard
          key={tutor.name}
          id={tutor._id}
          name={tutor.name}
          image={tutor.profileImageUrl}
          qualification={tutor.education}
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
