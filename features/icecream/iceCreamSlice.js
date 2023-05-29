const { createSlice } = require("@reduxjs/toolkit");
const { cakeActions } = require("../cake/cakeSlice");

const initialState = {
  numOfIceCream: 10,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {   // this is old way
  //       state.numOfIceCream--;
  //     },
  //   },
  extraReducers: (builder) => {
    //  new way
    builder.addCase(cakeActions.ordered, (state) => {
      // 1st argument -> action type
      // 2nd argument -> function with perform updation
      state.numOfIceCream - 1;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamAction = iceCreamSlice.actions;
