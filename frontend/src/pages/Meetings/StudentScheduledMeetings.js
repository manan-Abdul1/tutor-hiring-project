import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Meetings from "./Meetings";
import { getAcceptedMeetings } from "../../redux/features/requests/requestSlice";

const StudentScheduledMeetings = () => {
    const studentId = useSelector((state) => state.auth.userData._id);
    const dispatch = useDispatch();
    useEffect(()=>{
    
        axios
        .get(`http://localhost:5500/api/hiringRequest/getAcceptedUserMeetings?id=${studentId}`)
        .then(response=>   
         dispatch(getAcceptedMeetings(response.data.acceptedRequests))
         )
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
  

export default StudentScheduledMeetings