import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  requests: [],
  meetings: [], 
};

const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    requestAccepted: (state, action) => {
      const acceptedRequest = state.requests.find(
        (request) => request._id === action.payload._id
      );
      if (acceptedRequest) {
        acceptedRequest.status = "accepted";
        state.meetings.push(acceptedRequest);
        state.requests = state.requests.filter(
          (request) => request._id !== action.payload._id
        );
      }
    },
    requestRejected: (state, action) => {
      state.requests = state.requests.filter(
        (request) => request._id !== action.payload._id
      );
    },
    addRequests: (state, action) => {
      state.requests = action.payload;
    },
    getAcceptedMeetings: (state, action) => {
        state.meetings = action.payload;
      },
    markMeetingAsCompleted: (state, action) => {
        const _id = action.payload;
        state.meetings = state.meetings.map((meeting) =>
        meeting._id === _id ? { ...meeting, status: "completed" } : meeting
        );
      },
  },
});

export const {
  getAllRequests,
  requestAccepted,
  requestRejected,
  getAcceptedRequests,
  addRequests,
  getAcceptedMeetings,
  markMeetingAsCompleted
} = requestSlice.actions;

export default requestSlice.reducer;
