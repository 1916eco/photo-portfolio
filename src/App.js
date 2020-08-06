import React from "react";
import "./App.css";
import Header from "./comps/Header";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Header />
      {/*Header*/}
      <UploadForm />
      {/*MainBody*/}
      <ImageGrid />
      <Modal />
    </div>
  );
}

export default App;
