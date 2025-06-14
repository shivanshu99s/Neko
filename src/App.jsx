import React from "react";

import "./stylesheets/index.css";
import NavBar from "./components/NavBar";
import ChatComponent from "./components/ChatBox";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="chat-container">
        <div className="chat-box">
          <ChatComponent />
        </div>
      </div>
    </div>
  );
}

export default App;