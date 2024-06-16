import { useState } from "react";
import "./App.css";
import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";

function App() {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-5">
            <PersonalDetails />
            <Education />
          </div>
          <div class="col-7">col-sm-6</div>
        </div>
      </div>
    </>
  );
}

export default App;
