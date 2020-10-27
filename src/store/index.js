import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { SelectionReducer } from "../reducers/Selection";
import { EventsListReducer } from "../reducers/EventsList";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    events: EventsListReducer,
    selections: SelectionReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
