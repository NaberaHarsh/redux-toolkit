const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// action creator
//generate pending , fulfilled and rejected action types
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  // 1st argument -> action type , 2nd argument -> async api call
  return axios // create asyunk thiunk return promise, which has access to pending, fulflilled, rejected state so we add this in extra reducer
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((ele) => ele.id));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        (state.loading = false),
          (state.users = action.payload),
          (state.error = "");
      });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      (state.loading = false),
        (state.users = []),
        (state.error = action.error.message);
    });
  },
});

module.exports = userSlice.reducer; // export reducer
module.exports.fetchUser = fetchUsers; // export action
