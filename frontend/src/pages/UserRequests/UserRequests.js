import React, { useState, useEffect } from "react";
import Pagination from "../../components/Pagination/Pagination";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserRequestItems from "./UserRequestItems";
import Loader from "../../components/Loader/Loader"; // Update the path

const UserRequests = () => {
  const { status } = useParams();
  const allRequests = useSelector((state) => state.requests.requests);
  const pendingRequests = allRequests.filter(
    (request) => request.status === status
  );
  const itemsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false); // Add loading state

  const indexOfLastRequest = currentPage * itemsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - itemsPerPage;
  const currentRequests = pendingRequests.slice(
    indexOfFirstRequest,
    indexOfLastRequest
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Simulate loading data with setTimeout
  const loadData = async () => {
    setLoading(true);

    // Simulate an asynchronous operation, replace this with your actual data fetching logic
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // Load data when the component mounts
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={`h-screen flex flex-col items-center ${allRequests.length >=4? 'mb-56': '' } mt-36`}>
      {loading ? (
        <Loader />
      ) : currentRequests.length > 0 ? (
        <>
          <ul className="space-y-4 w-[50%]">
            {currentRequests.map((request) => (
              <UserRequestItems key={request._id} request={request} />
            ))}
          </ul>
          <div className="mt-10">
            {pendingRequests.length >= itemsPerPage ? (
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={pendingRequests.length}
                currentPage={currentPage}
                paginate={paginate}
              />
            ) : null}
          </div>
        </>
      ) : (
        <p className="my-40">No requests found.</p>
      )}
    </div>
  );
};

export default UserRequests;
