import { useState } from "react";
import "./App.css";
import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-5">
            <PersonalDetails />
            <Education />
            <Experience />
          </div>
          <div class="col-7 mb-2">
            <Resume />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
