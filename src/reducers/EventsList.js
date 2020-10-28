import _ from "lodash";

import {
  FETCH_EVENTS_ERROR,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_PENDING,
  UPDATE_EVENT_STATE,
  UPDATE_SELECTION_PRICE,
  UPDATE_SELECTION_STATE,
} from "../actions/EventsList/types";

const initialState = {
  pending: false,
  events: [],
  error: null,
};

export const EventsListReducer = (state = initialState, action) => {
  var updatedState;
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
      updatedState = _.cloneDeep(state);

      for (const event of updatedState.events) {
        for (const subcatItem of event.subcat) {
          const foundEvent = subcatItem.event.find(
            (node) => node.id === action.payload.id
          );
          if (foundEvent) foundEvent.active = action.payload.active;
        }
      }

    return updatedState;

    case UPDATE_SELECTION_STATE:
      updatedState = _.cloneDeep(state);

      for (const event of updatedState.events) {
        for (const subcatItem of event.subcat) {
          for (const eventItem of subcatItem.event) {
            const foundSelection = eventItem.selection.find(
              (node) => node.id === action.payload.id
            );
            if (foundSelection) foundSelection.active = action.payload.active;
          }
        }
      }

    return updatedState;

    case UPDATE_SELECTION_PRICE:
      updatedState = _.cloneDeep(state);

      for (const event of updatedState.events) {
        for (const subcatItem of event.subcat) {
          for (const eventItem of subcatItem.event) {
            const foundSelection = eventItem.selection.find(
              (node) => node.id === action.payload.id
            );
            if (foundSelection) foundSelection.price = action.payload.newPrice;
          }
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
