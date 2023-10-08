import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addRequests } from "../../redux/features/requests/requestSlice";
import axios from "axios";

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const teacherId = useSelector((state) => state.auth.userData._id);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`http://localhost:5500/api/hiringRequest/getTeacherRequestsById?id=${teacherId}`)
      .then((response) => {
        console.log(response.data.requests,'response')
        dispatch(addRequests(response.data.requests));
      })
      .catch((error) => {
        console.error("Error fetching teacher requests:", error);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center mt-36 h-screen ">
      <div className="w-full md:w-1/2 lg:w-1/4 p-4 cursor-pointer" onClick={() => navigate('/teacher-requests/pending')}>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-52 md:h-72 transform transition-transform hover:-translate-y-3 hover:text-green-400 hover:cursor-pointer hover:duration-500">
          <div className="p-6 flex justify-center flex-col items-center">
            <h2 className="text-4xl  text-center font-semibold mb-2">Requests</h2>
                <i className="fa-solid fa-envelope fa-2xl tutor-icons mt-20"></i>
          </div> 
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-4 cursor-pointer" onClick={()=>navigate(`/getFeedbacks/${teacherId}`)}>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-52 md:h-72 transform transition-transform hover:-translate-y-3 hover:text-green-400 hover:cursor-pointer hover:duration-500">
          <div className="p-6 flex justify-center flex-col items-center">
            <h2 className="text-4xl text-center font-semibold mb-2">Feedback</h2>
            <i class="fa-regular fa-comment fa-2xl tutor-icons mt-20"></i>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-4 cursor-pointer" onClick={()=>navigate('/teacher-scheduled-meetings')}>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-52 md:h-72 transform transition-transform hover:-translate-y-3 hover:text-green-400 hover:cursor-pointer hover:duration-500">
          <div className="p-6 flex justify-center flex-col items-center">
            <h2 className="text-4xl text-center font-semibold mb-2" >Meetings</h2>
            <i class="fa-solid fa-handshake fa-2xl tutor-icons mt-20"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
