import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchFilterCard from '../SearchFilterCard/SearchFilterCard';
import Tutor from './Tutor';
import { useDispatch } from 'react-redux';
import { addTeachers } from '../../redux/features/teachers/teacherSlice';

export default function MainPageTutors() {
  const dispatch = useDispatch();

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
      {/* Pass the fetched teacher data as a prop to the Tutor component */}
      <Tutor  />
    </>
  );
}
