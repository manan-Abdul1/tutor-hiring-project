import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchFilterCard from '../SearchFilterCard/SearchFilterCard';
import { useSelector, useDispatch } from 'react-redux';
import { addTeachers } from '../../redux/features/teachers/teacherSlice';
import TutorList from '../../components/TutorList.js/TutorList';

export default function MainPageTutors() {
  const dispatch = useDispatch();
  const tutors = useSelector((state) => state?.tutor?.teachers);
  const [filteredTutors, setFilteredTutors] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const apiUrl = 'http://localhost:5500/api/tutors/get-all-teachers';
    axios
      .get(apiUrl)
      .then((response) => {
        dispatch(addTeachers(response.data.teachers));
        setFilteredTutors(response.data.teachers); // Set filteredTutors with initial data
        setLoading(false); // Data loading is complete
        console.log(response.data.teachers);
      })
      .catch((error) => {
        console.error('Error fetching teacher data:', error);
        setLoading(false); // Even if there's an error, loading is complete
      });
  }, []);

  return (
    <>
      <div className="mx-10">
        <div className="row">
          <div className="col-md-3">
            <SearchFilterCard tutors={tutors} setFilteredTutors={setFilteredTutors} />
          </div>
          <div className="col-md-9 pt-5">
            {loading ? (
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
