import React, { useState } from "react";
import TutorList from "../../components/TutorList.js/TutorList";
import SearchFilterCard from "../SearchFilterCard/SearchFilterCard";
import { useSelector } from "react-redux";

function Tutor() {
  const tutors = useSelector((state) => state.tutor.teachers);
  const [filteredTutors, setFilteredTutors] = useState(tutors);

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
            <TutorList tutors={filteredTutors.length > 0 ? filteredTutors: tutors} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tutor;
