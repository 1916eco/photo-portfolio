import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./comps/Header";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Pricing from "./comps/Pricing";
import Contact from "./comps/Contact";
import AboutMe from "./comps/AboutMe";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/Pricing" component={Pricing}>
            <Pricing />
          </Route>
          <Route path="/Contact" component={Contact}>
            <Contact />
          </Route>
          <Route path="/AboutMe" component={AboutMe}>
            <AboutMe />
          </Route>
          <Route path="/" component={(UploadForm, ImageGrid, Modal)}>
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
