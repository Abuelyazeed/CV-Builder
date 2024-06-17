import { useState } from "react";
import "./App.css";
import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";

function App() {
  const [userInfo, setUserInfo] = useState({
    fullName: "Ahmed Abuelyazeed",
    email: "abuelyazeed175@gmail.com",
    phone: "01149920811",
    address: "Cairo, Egypt",
  });

  const [isActive, setIsActive] = useState(false);

  const [educationList, setEducationList] = useState([
    {
      school: "Nefertari American Internation Schools",
      degree: "High School Degree",
      startDate: "21/5/2000",
      endDate: "22/5/2000",
      location: "Cairo",
    },
    {
      school: "German University In Cairo",
      degree: "High School Degree",
      startDate: "21/5/2000",
      endDate: "22/5/2000",
      location: "Cairo",
    },
  ]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-5">
            <PersonalDetails
              userInfo={userInfo}
              onChangeUserInfo={setUserInfo}
            />
            <Education
              educationList={educationList}
              onChangeEducationList={setEducationList}
              isActive={isActive}
              onChangeIsActive={setIsActive}
            />
            <Experience />
          </div>
          <div className="col-7 mb-2">
            <Resume userInfo={userInfo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
