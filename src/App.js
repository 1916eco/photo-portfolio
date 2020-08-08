import React, { useState } from "react";
import "./App.css";
import Header from "./comps/Header";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Pricing from "./comps/Pricing";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Header />
      {/*Header*/}
      <UploadForm />
      {/*MainBody*/}
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
