import { createSlice } from "@reduxjs/toolkit";
import { usersAPI } from "../../api/users-api";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
  },
  reducers: {
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalUsersCount: (state, action) => {
      state.totalUsersCount = action.payload;
    },
  },
});
//actions
export const {
  setIsFetching,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
} = usersSlice.actions;
//thunk
export const getUsersThunk = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true)); //крутилка
    dispatch(setCurrentPage(page));
    const data = await usersAPI.getUsers(page, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};
export default usersSlice.reducer;
