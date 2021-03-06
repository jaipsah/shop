import { createStore, combineReducers } from "redux";

import { listLoader, cardLoader, isCheckboxChecked } from "./reducers/list-reducer";

const rootReducer = combineReducers({
  list:listLoader,
  cards: cardLoader,
  checked: isCheckboxChecked
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
