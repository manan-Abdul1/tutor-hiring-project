import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    requests: [],
};

const requestSlice = createSlice({
    name: "request",
    initialState,
    reducers: {
        getAllRequests: (state, action) => {
            state.requests = action.payload;
        },
        requestAccepted: (state, action) => {
            state.requests = state.requests.map((request) =>
                request.id === action.payload.id
                    ? { ...request, status: "accepted" }
                    : request
            );
        },
        requestRejected: (state, action) => {
            state.requests = state.requests.filter(
                (request) => request.id !== action.payload.id
            );
        },
        getAcceptedRequests: (state) => {
            return state.requests.filter((request) => request.status === "accepted");
        },
    },
});

export const {
    getAllRequests,
    requestAccepted,
    requestRejected,
    getAcceptedRequests,
} = requestSlice.actions;
export default requestSlice.reducer;
