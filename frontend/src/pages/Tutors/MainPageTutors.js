import React, { useState } from 'react';
import SearchFilterCard from '../SearchFilterCard/SearchFilterCard';
import { useSelector } from 'react-redux';
import TutorList from '../../components/TutorList.js/TutorList';

export default function MainPageTutors() {
  const tutors = useSelector((state) => state.tutor.teachers)|| [];
  const [filteredTutors, setFilteredTutors] = useState(tutors);

  return (
    <>
      <div className="mx-10">
        <div className="row">
          <div className="col-md-3">
            <SearchFilterCard tutors={tutors} setFilteredTutors={setFilteredTutors} />
          </div>
          <div className="col-md-9 pt-5">
            {tutors.length===0 ? (
              <p className="mx-auto flex justify-center items-center h-96">Loading...</p>
            ) : filteredTutors.length === 0 ? (
              <p className="mx-auto flex justify-center items-center h-96">No tutors found with the selected filters.</p>
            ) : (
              <TutorList tutors={filteredTutors} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
