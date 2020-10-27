import React, { createContext } from "react";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { updateEventState } from "./actions/EventsList";
import {
  updateSelectionPrice,
  updateSelectionState,
} from "./actions/Selection";

const WebSocketContext = createContext(null);

export { WebSocketContext };

export default ({ children }) => {
  let socket;
  let ws;

  const dispatch = useDispatch();

  if (!socket) {
    socket = io.connect("http://localhost:3001");

    socket.on("selectionPriceUpdate", (data) => {
      console.log("selectionPriceUpdate", data);
      dispatch(updateSelectionPrice(data.id, data.newPrice));
    });

    socket.on("SelectionStateUpdate", (data) => {
      console.log("selectionStateUpdate", data);
      dispatch(updateSelectionState(data.id, data.active));
    });

    socket.on("eventStateUpdate", (data) => {
      console.log("eventStateUpdate", data);
      dispatch(updateEventState(data.id, data.active));
    });

    ws = {
      socket: socket,
    };
  }

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
};
