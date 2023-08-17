import React from "react";
import "./App.scss";
import "./theme/kendo-theme.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Page/Homepage/Homepage";
import Inbox from "./Page/Inbox/Inbox";
import DrawerRouterContainer from "./Components/Drawer/DrawerRouterContainer";

function App() {
  return (
    <div className="App">
      <DrawerRouterContainer>
        <Routes>
          <Route path="inbox" element={<Homepage />} />
          <Route path="homepage" element={<Inbox />} />
        </Routes>
      </DrawerRouterContainer>
    </div>
  );
}

export default App;
