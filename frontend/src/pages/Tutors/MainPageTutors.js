import React, { useEffect, useState } from 'react';
import SearchFilterCard from '../SearchFilterCard/SearchFilterCard';
import { useSelector } from 'react-redux';
import TutorList from '../../components/TutorList.js/TutorList';
import { useParams } from 'react-router-dom';

export default function MainPageTutors() {
  const { filter } = useParams();
  const tutors = useSelector((state) => state.tutor.teachers)|| [];
  const [filteredTutors, setFilteredTutors] = useState([]);

  useEffect(() => {
    if (filter) {
      const [locationFilter, classFilter, subjectFilter] = filter.split('-');

      const filteredTutorsResult = tutors.filter((tutor) => {
        let isMatch = true;
  
        if (locationFilter && !tutor.location.includes(locationFilter)) {
          isMatch = false;
        }
  
        if (classFilter && !tutor.classes.includes(classFilter)) {
          isMatch = false;
        }
  
        if (subjectFilter && !tutor.subjects.includes(subjectFilter)) {
          isMatch = false;
        }
  
        return isMatch;
      });
      setFilteredTutors(filteredTutorsResult);
    } else {

      setFilteredTutors(tutors);
    }
  }, [filter, tutors]);

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
