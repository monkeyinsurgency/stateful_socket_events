import { BUILD_SELECTIONS } from "../actions/Selection/types";

const initialState = {
  selectionsCount: 0,
  selections: [],
  error: null,
};

export const SelectionReducer = (state = initialState, action) =>{
  switch (action.type) {
    case BUILD_SELECTIONS:
      return {
        ...state,
        selections: action.payload.selectedEvents,
        selectionsCount: action.payload.selectedEvents.length,
      };
    default:
      return state;
  }
};
