const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  numOfCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      // instead of swirtch case we write like this.
      state.numOfCake--; // no need to return and update state manually as it handle everything using immer
    }, // we do direct mutation on state as
    restocked: (state, action) => {
      state.numOfCake += action.payload; // createSlice handles reducers and action in itself
      //no need to write seperately
    },
  },
});

module.exports = cakeSlice.reducer; // export reducer
module.exports.cakeActions = cakeSlice.actions; // export action
