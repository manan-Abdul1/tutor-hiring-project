import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teachers: [], // Store teacher profiles here
};

const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    addTeacher: (state, action) => {
      state.teachers.push(action.payload);
    },
    updateTeacher: (state, action) => {
      // Find and update the teacher in the array based on teacher ID
      const updatedTeacher = action.payload;
      const index = state.teachers.findIndex(teacher => teacher.id === updatedTeacher.id);
      if (index !== -1) {
        state.teachers[index] = updatedTeacher;
      }
    },
    deleteTeacher: (state, action) => {
      // Find and remove the teacher from the array based on teacher ID
      const teacherId = action.payload;
      const index = state.teachers.findIndex(teacher => teacher.id === teacherId);
      if (index !== -1) {
        state.teachers.splice(index, 1);
      }
    },
  },
});

export const { addTeacher, updateTeacher, deleteTeacher } = teachersSlice.actions;
export default teachersSlice.reducer;
