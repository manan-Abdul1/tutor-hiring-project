import React, { useEffect } from "react";
import ImageHeader from "./imageHeader/ImageHeader";
import Introduction from "./introductionsection/Introduction";
import ClassesAndSubjects from "./classes-subjects/ClassesAndSubjects";
import PereferredLocation from "./perferredlocation/PereferredLocation";
import TutorDetail from "./tutor-detail/TutorDetail";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function ViewProfile() {
  const { id }= useParams();
  const [teacherProfile, setTeacherProfile]= useState([]);
  useEffect(()=>{
    axios
    .get(`http://localhost:5500/api/tutors/get-teacher-by-id?id=${id}`)
    .then((response) => {
      setTeacherProfile(response.data.teacher);
    })
    .catch((error) => {
      console.error('Error fetching teacher by ID:', error);
    });
  },[])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container mx-auto my-20">
        <ImageHeader teachersData={teacherProfile} />
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-xs-12 col-md-10 col-lg-10">
            <Introduction teachersData={teacherProfile} />
            <ClassesAndSubjects  teachersData={teacherProfile} />
            <PereferredLocation teachersData={teacherProfile}/>
            <TutorDetail teachersData={teacherProfile}/>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
}
