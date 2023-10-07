import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import Meetings from "./Meetings";
import { getAcceptedMeetings } from "../../redux/features/requests/requestSlice";

const TutorScheduledMeetings = () => {
    const teacherId = useSelector((state) => state.auth.userData._id);
    const dispatch = useDispatch();
    useEffect(()=>{
    
        axios
        .get(`http://localhost:5500/api/hiringRequest/getAcceptedMeetings?id=${teacherId}`)
        .then((response) => {
          console.log(response.data.acceptedRequests, 'meetingsResponse');
          dispatch(getAcceptedMeetings(response.data.acceptedRequests));
        })
        .catch((error) => {
          console.error("Error fetching accepted meetings:", error);
        });

    },[])
    return (
        <>
        <Meetings/>
        </>

    );
  };
  

export default TutorScheduledMeetings
