import React from "react";
import "../App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AddEditExperience from "./AddEditExperience";

function Experience({
  experienceList,
  onChangeExperienceList,
  isActive,
  onChangeIsActive,
}) {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
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
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body d-flex flex-column">
            {experienceList.length > 0 &&
              !isActive &&
              experienceList.map((ex, index) => {
                return (
                  <>
                    {index === 0 && <hr className="w-100 my-2" />}
                    <div
                      key={index}
                      className="d-flex flex-row justify-content-between align-items-center m-2"
                    >
                      {ex.companyName}
                      <div className="d-flex">
                        <button
                          type="button"
                          className="btn btn-outline-secondary me-3"
                          onClick={() => handleEdit(ed.id)}
                        >
                          Edit
                        </button>
                        <button className="visible-btn">
                          <i className="bi bi-eye"></i>
                        </button>
                      </div>
                    </div>
                    <hr className="w-100 my-2" />
                  </>
                );
              })}
            {isActive && <AddEditExperience />}
            {!isActive && (
              <button
                type="button"
                className="btn btn-outline-primary mt-3 ed-btn"
              >
                + Experience
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
