import React from "react";
import io from "socket.io-client";
import store from "./store";
import { Provider } from "react-redux";
import WebSocketProvider, { WebSocketContext } from "./WebSocket";

import EventsList from "./components/EventsList";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// const socket = io("http://localhost:3001");

// socket.on("selectionPriceUpdate", (data) =>
//   console.log("selectionPriceUpdate", data)
// );
// socket.on("SelectionStateUpdate", (data) =>
//   console.log("selectionStateUpdate", data)
// );
// socket.on("eventStateUpdate", (data) => console.log("eventStateUpdate", data));

function App() {
  return (
    <Provider store={store}>
      <WebSocketProvider>
        <div className="content">
          <div className="selections">{""}</div>
          <div className="event-list">
            <EventsList />
          </div>
        </div>
      </WebSocketProvider>
    </Provider>
  );
}

export default App;
