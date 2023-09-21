import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchFilterCard from '../SearchFilterCard/SearchFilterCard';
import { useSelector, useDispatch } from 'react-redux';
import { addTeachers } from '../../redux/features/teachers/teacherSlice';
import TutorList from '../../components/TutorList.js/TutorList';

export default function MainPageTutors() {
  const dispatch = useDispatch();
  const tutors = useSelector((state) => state?.tutor?.teachers);
  const [filteredTutors, setFilteredTutors] = useState(tutors);


  useEffect(() => {
    const apiUrl = 'http://localhost:5500/api/tutors/get-all-teachers';
    axios
      .get(apiUrl)
      .then((response) => {
        dispatch(addTeachers(response.data.teachers));
        console.log(response.data.teachers)
      })
      .catch((error) => {
        console.error('Error fetching teacher data:', error);
      });
  }, []);
  return (
    <>
      <div className="mx-10">
        <div class="row">
          <div class="col-md-3">
            <SearchFilterCard
              tutors={tutors}
              setFilteredTutors={setFilteredTutors}
            />
          </div>
          <div class="col-md-9 pt-5">
            {filteredTutors.length===0||tutors.length === 0 ?
              <p className='mx-auto flex justify-center items-center h-96 '>No tutors found with the selected filters.</p>
              :
              <TutorList tutors={filteredTutors.length > 0 ? filteredTutors: tutors} />
            }
          </div>
        </div>
      </div>
    </>
  );
}
