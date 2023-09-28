import TeacherRequestItem from "./TeacherRequestItem";
import { useSelector } from "react-redux";

const TeacherRequestList = () => {
  const requests = useSelector(state=>state.requests.requests.filter(request=>request.status==='pending'));

  return (
    <div className="h-screen flex flex-col items-center mt-36">
      {requests.length > 0 ? (
        <ul className="space-y-4 w-[50%]">
          {requests.map((request) => (
            <TeacherRequestItem key={request._id} request={request} />
          ))}
        </ul>
      ) : (
        <p className="my-40">No requests found.</p>
      )}
    </div>
  );
};

export default TeacherRequestList;
