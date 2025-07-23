import _React, { Fragment } from "react";
import "./App.css";

import InputTodo from "./components/InputTodo.tsx";
import ListTodos from "./components/ListTodos.tsx";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
