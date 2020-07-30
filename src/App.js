import React from "react";
import "./style/App.scss";
import Base from "./Layout/Base";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Components/Main";

function App() {
  return (
    <BrowserRouter>
      <Base>
        <Route path="/">
          <Main />
        </Route>
      </Base>
    </BrowserRouter>
  );
}

export default App;
