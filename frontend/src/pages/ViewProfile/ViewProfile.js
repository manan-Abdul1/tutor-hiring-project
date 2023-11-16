import React, { useEffect, useState } from "react";
import ImageHeader from "./imageHeader/ImageHeader";
import Introduction from "./introductionsection/Introduction";
import ClassesAndSubjects from "./classes-subjects/ClassesAndSubjects";
import PereferredLocation from "./perferredlocation/PereferredLocation";
import TutorDetail from "./tutor-detail/TutorDetail";
import EducationalApproach from "./educational-Approach/EducationalApproach";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import InstructionalZone from "./zone/InstructionalZone";
import TeachingDetails from "./teaching-details/TeachingDetails";

export default function ViewProfile() {
  const { id } = useParams();
  const [teacherProfile, setTeacherProfile] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    axios
      .get(`http://localhost:5500/api/tutors/get-teacher-by-id?id=${id}`)
      .then((response) => {
        setTeacherProfile(response.data.teacher);
      })
      .catch((error) => {
        console.error("Error fetching teacher by ID:", error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false when the request is complete
      });
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Show loader while loading
      ) : (
        <div className="container mx-auto my-20">
          <ImageHeader teachersData={teacherProfile} />
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-xs-12 col-md-10 col-lg-10">
              <Introduction teachersData={teacherProfile} />
              <ClassesAndSubjects teachersData={teacherProfile} />
              <TeachingDetails teachersData={teacherProfile} />
              <PereferredLocation teachersData={teacherProfile} />
              <EducationalApproach teachersData={teacherProfile} />
              <InstructionalZone teachersData={teacherProfile} />
              <TutorDetail teachersData={teacherProfile} />
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      )}
    </>
  );
}
