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
      id: 1,
      school: "Nefertari American International Schools",
      degree: "High School Degree",
      startDate: "2009",
      endDate: "2018",
      location: "Cairo",
    },
    {
      id: 2,
      school: "German University In Cairo",
      degree: "High School Degree",
      startDate: "2018",
      endDate: "2023",
      location: "Cairo",
    },
  ]);

  const [experienceList, setExperienceList] = useState([
    {
      id: 1,
      companyName: "Link Developments",
      positionTitle: "Front-end Intern",
      startDate: "07/2022",
      endDate: "08/2022",
      location: "Cairo",
      description:
        "Implemented a website adhering to web coding standards with a focus on performance, SEO, and accessibility. Applied responsive web design principles to ensure compatibility across variousdevices and screen sizes. Worked within an Agile framework using Microsoft Azure DevOps.",
    },
    {
      id: 2,
      companyName: "Egyproperty",
      positionTitle: "Sales Intern",
      startDate: "07/2023",
      endDate: "10/2023",
      location: "Cairo",
      description:
        "Cultivated strong interpersonal skills through client interactions and negotiation. Demonstrated resilience and adaptability in a challenging sales environment.",
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
            <Resume
              userInfo={userInfo}
              educationInfo={educationList}
              experienceInfo={experienceList}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
