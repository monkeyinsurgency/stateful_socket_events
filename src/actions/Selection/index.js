import { BUILD_SELECTIONS } from "./types";

export const addToSelections = (selection) => (dispatch, getState) => {
  if (!selection.active) return false;

  const selectedEvents = getState().selections.selections.slice();

  let alreadyExists = false;
  selectedEvents.forEach((x) => {
    if (x.id === selection.id) {
      alreadyExists = true;
    }
  });
  if (!alreadyExists && selection.active) {
    selectedEvents.push({ ...selection });
  } else {
    selectedEvents.pop({ ...selection });
  }

  dispatch({
    type: BUILD_SELECTIONS,
    payload: { selection, selectedEvents },
  });
};

