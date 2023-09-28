import { useSelector } from "react-redux";
import MeetingItem from "../../components/MeetingItem/MeetingItem";

const Meetings = () => {
    const meetings = useSelector(state => state.requests.meetings);
  
    return (
      <div className="h-screen flex flex-col items-center mt-36">
        {meetings.length > 0 ? (
          <ul className="space-y-4 w-[50%]">
            {meetings.map(meeting => (
              <MeetingItem key={meeting._id} meeting={meeting} />
            ))}
          </ul>
        ) : (
          <p>No meetings scheduled found.</p>
        )}
      </div>
    );
  };
  
export default Meetings;