import { useState } from "react";
import Form from "./components/form";
import List from "./components/List";
import "./App.css";

function App() {
  // const [formEntries, setFormEntries] = useState({});

  // function FormDataHandler(entries) {
  //   setFormEntries({ ...formEntries, entries });
  // }

  return (
    <>
      <div className="form">
        <h2>Form Section</h2>
        <Form />
      </div>
      <div className="list">
        <h2>List View Section</h2>
        <List />
      </div>
    </>
  );
}

export default App;
