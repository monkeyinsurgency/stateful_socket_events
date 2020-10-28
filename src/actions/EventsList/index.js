import {
  FETCH_EVENTS_ERROR,
  FETCH_EVENTS_PENDING,
  FETCH_EVENTS_SUCCESS,
  UPDATE_EVENT_STATE,
  UPDATE_SELECTION_PRICE,
  UPDATE_SELECTION_STATE,
} from "./types";

export const fetchEventsPending = () => {
  return {
    type: FETCH_EVENTS_PENDING,
  };
};

export const fetchEventsSuccess = (events) => {
  return {
    type: FETCH_EVENTS_SUCCESS,
    payload: events,
  };
};

export const fetchEventsError = (error) => {
  return {
    type: FETCH_EVENTS_ERROR,
    error: error,
  };
};

export const fetchEvents = () => (dispatch) => {
  dispatch(fetchEventsPending());
  fetch("http://localhost:3001/api/selections/")
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw res.error;
      }
      dispatch(fetchEventsSuccess(res.category));
      return res.category;
    })
    .catch((error) => {
      dispatch(fetchEventsError(error));
    });
};

export const updateEventState = (id, active) => {
  return {
    type: UPDATE_EVENT_STATE,
    payload: {
      id,
      active,
    },
  };
};

export const updateSelectionState = (id, active) => {
  return {
    type: UPDATE_SELECTION_STATE,
    payload: {
      id,
      active,
    },
  };
};

export const updateSelectionPrice = (id, newPrice) => {
  return {
    type: UPDATE_SELECTION_PRICE,
    payload: {
      id,
      newPrice,
    },
  };
};
