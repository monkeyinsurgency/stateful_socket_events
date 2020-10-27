import {
  FETCH_EVENTS,
  FETCH_EVENTS_ERROR,
  FETCH_EVENTS_PENDING,
  FETCH_EVENTS_SUCCESS,
  UPDATE_EVENT_STATE,
  SELECT_EVENT,
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

export const fetchEvents = () => (dispatch, getState) => {
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
