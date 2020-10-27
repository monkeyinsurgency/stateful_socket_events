import {
  UPDATE_SELECTION_STATE,
  UPDATE_SELECTION_PRICE,
  UPDATE_COUNTER,
} from "./types";

export const updateSelectionState = (id, active) => {
  return {
    type: UPDATE_SELECTION_STATE,
    payload: {
      id,
      active,
    },
  };
};

export const updateSelectionPrice = (id, price) => {
  return {
    type: UPDATE_SELECTION_PRICE,
    payload: {
      id,
      price,
    },
  };
};
