import React from "react";
import "./App.css";
import Header from "./comps/Header";
import UploadForm from "./comps/UploadForm";

function App() {
  return (
    <div className="App">
      <Header />
      {/*Header*/}
      <UploadForm />
      {/*MainBody*/}
    </div>
  );
}

export default App;
