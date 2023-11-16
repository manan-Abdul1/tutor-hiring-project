import React, { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import { useSelector } from "react-redux";
import MeetingItem from "../../components/MeetingItem/MeetingItem";
import Loader from "../../components/Loader/Loader"; // Update the path

const Meetings = () => {
  const meetings = useSelector((state) =>
    state.requests.meetings.filter((meet) => meet.status === "accepted")
  );

  const itemsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastMeeting = currentPage * itemsPerPage;
  const indexOfFirstMeeting = indexOfLastMeeting - itemsPerPage;
  const currentMeetings = meetings.slice(
    indexOfFirstMeeting,
    indexOfLastMeeting
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={`h-screen flex ${meetings.length >= 4 && "mb-48"} flex-col items-center mt-36`}>
      {meetings.length > 0 ? (
        <>
          <ul className="space-y-4 w-[50%]">
            {currentMeetings.map((meeting) => (
              <MeetingItem key={meeting._id} meeting={meeting} />
            ))}
          </ul>
          <div className="mt-10">
            {meetings.length >= itemsPerPage ? (
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={meetings.length}
                currentPage={currentPage}
                paginate={paginate}
              />
            ) : null}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-full">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Meetings;
