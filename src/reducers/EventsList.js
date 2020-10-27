import { update } from "lodash/fp";
import _ from "lodash";
import deepdash from "deepdash-es";

import {
  FETCH_EVENTS,
  FETCH_EVENTS_ERROR,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_PENDING,
  UPDATE_EVENT_STATE,
  SELECT_EVENT,
} from "../actions/EventsList/types";

//const _ = deepdash(lodash);

const initialState = {
  pending: false,
  events: [],
  error: null,
};

export const EventsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        events: action.payload,
      };
    case FETCH_EVENTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case UPDATE_EVENT_STATE:
      var updatedState = _.cloneDeep(state);

      for (const event of updatedState.events) {
        for (const subcatItem of event.subcat) {
          const foundEvent = subcatItem.event.find(
            (node) => node.id === action.payload.id
          );
          if (foundEvent) foundEvent.active = action.payload.active;
        }
      }

      return updatedState;

    default:
      return state;
  }
};

export const getEvents = (state) => state.events;
export const getEventsPending = (state) => state.pending;
export const getEventsError = (state) => state.error;
