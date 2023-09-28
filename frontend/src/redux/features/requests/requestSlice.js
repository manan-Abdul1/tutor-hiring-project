import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    requestData : {},
}


const requestSlice = createSlice({
  name: 'hiringRequest',
  initialState,
  reducers: {
   
  },
});

export const {  } = requestSlice.actions;
export default requestSlice.reducer;
