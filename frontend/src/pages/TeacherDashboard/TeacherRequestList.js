import { useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import TeacherRequestItem from './TeacherRequestItem';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const TeacherRequestList = () => {
  const { status } = useParams();

  const allRequests = useSelector(state => state.requests.requests);

  const pendingRequests = allRequests.filter(request => request.status === status);
  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRequest = currentPage * itemsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - itemsPerPage;
  const currentRequests = pendingRequests.slice(indexOfFirstRequest, indexOfLastRequest);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={`h-screen flex flex-col ${allRequests.length>=4 && 'mb-56' } items-center mt-36`}>
      {currentRequests.length > 0 ? (
        <>
          <ul className="space-y-8 w-[50%]">
            {currentRequests.map((request) => (
              <TeacherRequestItem key={request._id} request={request} />
            ))}
          </ul>
          <div className='mt-10'>
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

export default TeacherRequestList;
