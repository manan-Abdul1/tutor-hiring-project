import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchFilterCard from '../SearchFilterCard/SearchFilterCard';
import Tutor from './Tutor';
import { useDispatch } from 'react-redux';
import { addTeachers } from '../../redux/features/teachers/teacherSlice';

export default function MainPageTutors() {
  // const [teachers, setTeachers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'http://localhost:5500/api/tutors/get-all-teachers';

    // Make a GET request to fetch teacher data
    axios
      .get(apiUrl)
      .then((response) => {
        // Update the state with the fetched teacher data
        dispatch(addTeachers(response.data.teachers));
        console.log(response.data.teachers)
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error fetching teacher data:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once on component mount.
  // console.log(teachers,'teachers')
  return (
    <>
      {/* Pass the fetched teacher data as a prop to the Tutor component */}
      <Tutor  />
    </>
  );
}
