const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { iceCreamAction } = require("./features/iceCream/iceCreamSlice");
const { fetchUser } = require("./features/user/userSlice");

console.log("Initial State", store.getState());

const unSubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(fetchUser()); // calling actions directly
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(10));

store.dispatch(iceCreamAction.ordered());
store.dispatch(iceCreamAction.ordered());
store.dispatch(iceCreamAction.restocked(10));

unSubscribe(); // end the store subscription, after this can not access state.
