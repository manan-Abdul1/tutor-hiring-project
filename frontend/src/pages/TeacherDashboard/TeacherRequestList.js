import React from "react";
import TeacherRequestItem from "./TeacherRequestItem";

const TeacherRequestList = ({ requests }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Requests</h2>
      {requests.length > 0 ? (
        <ul className="space-y-4">
          {requests.map((request) => (
            <TeacherRequestItem key={request.id} request={request} />
          ))}
        </ul>
      ) : (
        <p>No requests found.</p>
      )}
    </div>
  );
};

export default TeacherRequestList;
