import React from "react";
import ImageHeader from "./imageHeader/ImageHeader";
import Introduction from "./introductionsection/Introduction";
import ClassesAndSubjects from "./classes-subjects/ClassesAndSubjects";
import PereferredLocation from "./perferredlocation/PereferredLocation";
import TutorDetail from "./tutor-detail/TutorDetail";

export default function ViewProfile() {
  return (
    <>
      <div className="container mx-auto my-20">
        <ImageHeader />
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-xs-12 col-md-10 col-lg-10">
            <Introduction />
            <ClassesAndSubjects />
            <PereferredLocation />
            <TutorDetail/>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
}
