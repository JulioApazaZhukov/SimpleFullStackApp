import _React, { Fragment } from "react";
import "./App.css";

// components

import InputTodo from "./components/InputTodo.tsx";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
      </div>
    </Fragment>
  );
}

export default App;
