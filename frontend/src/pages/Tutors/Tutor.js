import React, { useState } from "react";
import TutorList from "../../components/TutorList.js/TutorList";
import SearchFilterCard from "../SearchFilterCard/SearchFilterCard";
import { useSelector } from "react-redux";

function Tutor() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredTutors, setFilteredTutors] = useState([]);

//   // Sample data for the tutor list
//   const tutorList = [
//     { name: "John Doe", subject: "Mathematics", rating: 4.5 },
//     { name: "Jane Doe", subject: "English", rating: 4.2 },
//     { name: "James Smith", subject: "Science", rating: 4.8 },
//     { name: "Jenny Smith", subject: "History", rating: 4.0 },
//     { name: "Bob Johnson", subject: "Geography", rating: 3.9 },
//     { name: "Alice Johnson", subject: "Physics", rating: 4.6 },
//     { name: "Mark Brown", subject: "Chemistry", rating: 4.7 },
//     { name: "Emily Brown", subject: "Biology", rating: 4.1 },
//     { name: "Tom Wilson", subject: "Social Studies", rating: 4.3 },
//   ];

//   // Filter the tutors based on the search query
//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//     const filtered = tutorList.filter((tutor) =>
//       tutor.name.toLowerCase().includes(event.target.value.toLowerCase())
//     );
//     setFilteredTutors(filtered);
//   };

//   // Show 3 tutors at a time
//   const tutorsPerPage = 3;
//   const [currentPage, setCurrentPage] = useState(1);
//   const indexOfLastTutor = currentPage * tutorsPerPage;
//   const indexOfFirstTutor = indexOfLastTutor - tutorsPerPage;
//   const currentTutors = filteredTutors.slice(
//     indexOfFirstTutor,
//     indexOfLastTutor
//   );

//   // Calculate the number of pages for pagination
//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(filteredTutors.length / tutorsPerPage); i++) {
//     pageNumbers.push(i);
//   }
// const tutors = [
//     {
//       name: 'John Doe',
//       image: 'https://thetutors.pk/avatars/1570165374581DA1A0-8960-49AC-9BCE-953EAF7240AF.jpeg',
//       qualification: 'BSC Engineering',
//       experience: '5 years',
//       classes: '6th to 10th grade',
//       subjects: 'Mathematics, Physics',
//       rating: 4.5,
//       age: 35,
//       gender: 'Female',
//       verified: true
//     },
//     {
//       name: 'Jane Smith',
//       image: 'https://thetutors.pk/avatars/1570165374581DA1A0-8960-49AC-9BCE-953EAF7240AF.jpeg',
//       qualification: 'Bachelors in English Literature',
//       experience: '3 years',
//       classes: '11th and 12th grade',
//       subjects: 'English',
//       rating: 4.0,
//       age: 28,
//       gender: 'Male',
//       verified: false
//     },
//     {
//       name: 'Jane Smith',
//       image: 'https://thetutors.pk/avatars/16804287502020_07_02%2010_53%20AM%20Office%20Lens_11zon.jpg',
//       qualification: 'Bachelors in English Literature',
//       experience: '3 years',
//       classes: '11th and 12th grade',
//       subjects: 'English',
//       rating: 4.0,
//       age: 28,
//       gender: 'Male',
//       verified: false
//     },
//     {
//       name:"Abdul Manan"   ,
//       image:"https://thetutors.pk/avatars/16804287502020_07_02%2010_53%20AM%20Office%20Lens_11zon.jpg",
//       qualification:"Bachelors in English Literature",
//       experience:"17 years",
//       classes:"9th",
//       subjects:"Math",
//       rating:4,
//       age: 21,
//       gender:"Male",
//       verified:true,
//     },
//     {
//       name:"Abdul Manan"   ,
//       image:"https://thetutors.pk/avatars/16804287502020_07_02%2010_53%20AM%20Office%20Lens_11zon.jpg",
//       qualification:"Bachelors in English Literature",
//       experience:"17 years",
//       classes:"9th",
//       subjects:"Math",
//       rating:4,
//       age: 21,
//       gender:"Male",
//       verified:true,
//     },
//     {
//       name:"Abdul Manan"   ,
//       image:"https://thetutors.pk/avatars/16804287502020_07_02%2010_53%20AM%20Office%20Lens_11zon.jpg",
//       qualification:"Bachelors in English Literature",
//       experience:"17 years",
//       classes:"9th",
//       subjects:"Math",
//       rating:4,
//       age: 21,
//       gender:"Female",
//       verified:true,
//     },
//     {
//       name:"Abdul Manan"   ,
//       image:"https://thetutors.pk/avatars/16804287502020_07_02%2010_53%20AM%20Office%20Lens_11zon.jpg",
//       qualification:"Bachelors in English Literature",
//       experience:"17 years",
//       classes:"9th",
//       subjects:"Math",
//       rating:4,
//       age: 21,
//       gender:"Female",
//       verified:true,
//     },
//     {
//       name:"Abdul Manan"   ,
//       image:"https://thetutors.pk/avatars/16804287502020_07_02%2010_53%20AM%20Office%20Lens_11zon.jpg",
//       qualification:"Bachelors in English Literature",
//       experience:"17 years",
//       classes:"9th",
//       subjects:"Math",
//       rating:4,
//       age: 21,
//       gender:"Male",
//       verified:true,
//     }
//   ];
  // const [filterValues, setFilterValues] = useState({});
  // const handleFilterChange = (values) => {
    // setFilterValues(values);
  // };
  // const filteredTutors = tutors.filter((tutor) => {
    // Location filter
    // if (filterValues.location && tutor.location !== filterValues.location) {
    //   return false;
    // }
    // // Class filter
    // if (filterValues.selectedClass && tutor.classes !== filterValues.selectedClass) {
    //   return false;
    // }
    // // Subject filter
    // if (filterValues.selectedSubject && tutor.subjects !== filterValues.selectedSubject) {
    //   return false;
    // }
    // // Experience filter
    // if (filterValues.experience && tutor.experience !== filterValues.experience) {
    //   return false;
    // }
    // Gender filter
    // if (filterValues.gender && tutor.gender !== filterValues.gender) {
      // return false;
    // }
    // Fee filter
    // if (filterValues.fee && tutor.fee !== filterValues.fee) {
    //   return false;
    // }
    // return true;
  // });
  const tutors = useSelector(state=>state.tutor.teachers)
  console.log(tutors,'tutors')
  // const [filterValues, setFilterValues] = useState({
  //   location: '',
  //   selectedClass: '',
  //   selectedSubject: '',
  //   experience: '',
  //   gender: 'Any',
  //   fee: '',
  // });

  const [filteredTutors, setFilteredTutors] = useState(tutors); // State to store filtered tutors

  // Callback function to update filter values
  // const handleFilterChange = (newFilterValues) => {
  //   setFilterValues(newFilterValues);
  // };
  // // Filter your tutors based on filterValues and update filteredTutors state
  // const applyFilters = () => {
  //   // Implement filtering logic here based on filterValues
  //   // Update the filteredTutors state with the filtered list of tutors
  //   const filteredTutorsResult = tutors.filter((tutor) => {
  //     // Implement your filtering logic here
  //     // Example: filter by location
  //     return tutor.location.includes(filterValues.location);
  //   });

  //   setFilteredTutors(filteredTutorsResult);
  // };
console.log(filteredTutors,'filtered-ttuotors')
  return (
    <>
      <div className="mx-10">
        <div class="row">
          <div class="col-md-3">
          <SearchFilterCard tutors={tutors} setFilteredTutors={setFilteredTutors} />

        {/* <SearchFilterCard handleFilterChange={handleFilterChange} /> */}
        </div>
        <div class="col-md-9 pt-5">
        <TutorList tutors={filteredTutors} />

        {/* <TutorList tutors={filteredTutors.length > 0 ? filteredTutors : tutors} /> */}
        </div>
        </div>
    </div>


    </>
  );}
  export default Tutor;