import { useState } from "react";
import "./App.css";
import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";

function App() {
  const [fullName, setFullName] = useState("Ahmed Abuelyazeed");
  const [email, setEmail] = useState("abuelyazeed175@gmail.com");
  const [phone, setPhone] = useState("01149920811");
  const [address, setAddress] = useState("Cairo, Egypt");
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-5">
            <PersonalDetails
              fullName={fullName}
              onChangeName={setFullName}
              email={email}
              onChangeEmail={setEmail}
              phone={phone}
              onChangePhone={setPhone}
              address={address}
              onChangeAddress={setAddress}
            />
            <Education />
            <Experience />
          </div>
          <div class="col-7 mb-2">
            <Resume
              fullName={fullName}
              email={email}
              phone={phone}
              address={address}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
