import { useNavigate } from "react-router-dom";

const TeacherDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-32 h-screen">
      <div className="w-1/4 p-4" onClick={()=>navigate('/teacher-requests')}>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-72 transform transition-transform hover:-translate-y-3 hover:text-green-400 hover:cursor-pointer hover:duration-500">
          <div className="p-6">
            <h2 className="text-2xl text-center font-semibold mb-2">Requests</h2>
            {/* Add your content related to requests here */}
          </div>
        </div>
      </div>
      <div className="w-1/4 p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-72 transform transition-transform hover:-translate-y-3 hover:text-green-400 hover:cursor-pointer hover:duration-500">
          <div className="p-6">
            <h2 className="text-2xl text-center font-semibold mb-2">Feedback</h2>
            {/* Add your content related to feedback here */}
          </div>
        </div>
      </div>
      <div className="w-1/4 p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-72 transform transition-transform hover:-translate-y-3 hover:text-green-400 hover:cursor-pointer hover:duration-500">
          <div className="p-6">
            <h2 className="text-2xl text-center font-semibold mb-2">Messages</h2>
            {/* Add your content for the new card here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
