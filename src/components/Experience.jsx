import React from "react";
import "../App.css";

function Experience() {
  const experience = [
    {
      companyName: "Link Developments",
      positionTitle: "Front-end Intern",
      startDate: "21/5/2000",
      endDate: "22/5/2000",
      location: "Cairo",
      description: "lorem ipsum ar arrrr",
    },
    {
      companyName: "Egyproperty",
      positionTitle: "Sales Intern",
      startDate: "21/5/2000",
      endDate: "22/5/2000",
      location: "Cairo",
      description: "lorem ipsum ar arrrr",
    },
  ];
  return (
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <strong>Experience</strong>
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body d-flex flex-column">
            {experience.length > 0 &&
              experience.map((ex, index) => {
                return (
                  <>
                    {index === 0 && <hr className="w-100 my-2" />}
                    <div
                      key={index}
                      className="d-flex flex-row justify-content-between m-2"
                    >
                      {ex.companyName}
                      <button className="visible-btn">
                        <i class="bi bi-eye"></i>
                      </button>
                    </div>
                    <hr className="w-100 my-2" />
                  </>
                );
              })}
            <button type="button" class="btn btn-outline-primary mt-3 ed-btn">
              + Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
