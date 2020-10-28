import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import WebSocketProvider from "./WebSocket";

import EventsList from "./components/EventsList";
import Selection from "./components/Selection";

import "./App.scss";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Provider store={store}>
      <WebSocketProvider>
        <Container>
          <div className="selection-bit">
            <Selection />
          </div>
          <div className="event-list">
            <EventsList />
          </div>
          </Container>
      </WebSocketProvider>
    </Provider>
  );
}

export default App;
