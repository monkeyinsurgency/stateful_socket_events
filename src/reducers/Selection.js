import { update } from "lodash/fp";

import {
  UPDATE_COUNTER,
  UPDATE_SELECTION_STATE,
  UPDATE_SELECTION_PRICE,
} from "../actions/Selection/types";

export const SelectionReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_COUNTER:
      return { items: action.payload };
    case UPDATE_SELECTION_PRICE:
      return update(action.payload.id, action.payload.newPrice, state);
    default:
      return state;
  }
};
