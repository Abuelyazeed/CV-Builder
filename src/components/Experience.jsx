import React from "react";
import { useState } from "react";
import "../App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AddEditExperience from "./AddEditExperience";

function Experience({
  experienceList,
  onChangeExperienceList,
  isActive,
  onChangeIsActive,
}) {
  function handleEdit(exId) {
    setSelectedExperienceId(exId);
    onChangeIsActive(true);
  }

  function handleAddNew() {
    setSelectedExperienceId(null);
    onChangeIsActive(true);
  }

  function handleIsVisible(exId) {
    onChangeExperienceList(
      experienceList.map((ex) => {
        if (ex.id === exId) {
          return { ...ex, isVisible: !ex.isVisible };
        } else {
          return ex;
        }
      })
    );
  }
  const [selectedExperienceId, setSelectedExperienceId] = useState(null);
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
                  <React.Fragment key={ex.id}>
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
                          onClick={() => handleEdit(ex.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="visible-btn"
                          onClick={() => handleIsVisible(ex.id)}
                        >
                          {ex.isVisible ? (
                            <i className="bi bi-eye"></i>
                          ) : (
                            <i className="bi bi-eye-slash"></i>
                          )}
                        </button>
                      </div>
                    </div>
                    <hr className="w-100 my-2" />
                  </React.Fragment>
                );
              })}
            {isActive && (
              <AddEditExperience
                experienceList={experienceList}
                onChangeExperienceList={onChangeExperienceList}
                selectedExperienceId={selectedExperienceId}
                onChangeIsActive={onChangeIsActive}
              />
            )}
            {!isActive && (
              <button
                type="button"
                className="btn btn-outline-primary mt-3 ed-btn"
                onClick={handleAddNew}
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
