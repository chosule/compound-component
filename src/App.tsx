import React from "react";
import "./App.css";
import CompoundForm from "./CompoundForm";

function App() {
  const onChangeCompundInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
  };
  return (
    <div className="App">
      <CompoundForm>
        <CompoundForm.Label title="test" />
        <CompoundForm.Input onChange={onChangeCompundInput} />
      </CompoundForm>
    </div>
  );
}

export default App;
