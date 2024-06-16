import React from "react";
import "../App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Education() {
  const education = [
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
  ];

  return (
    <div class="accordion mb-4" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            <strong>Education</strong>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse"
        >
          <div class="accordion-body d-flex flex-column">
            {education.length > 0 &&
              education.map((ed, index) => {
                return (
                  <>
                    {index === 0 && <hr className="w-100 my-2" />}
                    <div
                      key={index}
                      className="d-flex flex-row justify-content-between m-2 ed"
                    >
                      {ed.school}
                      <button className="visible-btn">
                        <i class="bi bi-eye"></i>
                      </button>
                    </div>
                    <hr className="w-100 my-2" />
                  </>
                );
              })}
            <button type="button" class="btn btn-outline-primary mt-3 ed-btn">
              + Education
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
