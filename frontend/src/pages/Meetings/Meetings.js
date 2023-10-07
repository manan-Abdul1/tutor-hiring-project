import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import { useSelector } from "react-redux";
import MeetingItem from "../../components/MeetingItem/MeetingItem";

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
    <div className={`h-screen flex ${meetings.length>=4 && 'mb-36' } flex-col items-center mt-36`}>
      {currentMeetings.length > 0 ? (
        <>
          <ul className="space-y-4 w-[50%]">
            {currentMeetings.map((meeting) => (
              <MeetingItem key={meeting._id} meeting={meeting} />
            ))}
          </ul>
          <div className="mt-16">
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
        <p>No meetings scheduled found.</p>
      )}
    </div>
  );
};

export default Meetings;
