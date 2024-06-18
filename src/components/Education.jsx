import React, { useState } from "react";
import "../App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AddEditEducation from "./AddEditEducation";

function Education({
  educationList,
  onChangeEducationList,
  isActive,
  onChangeIsActive,
}) {
  function handleEdit(edId) {
    setSelectedEducationId(edId);
    onChangeIsActive(true);
  }

  function handleAddNew() {
    setSelectedEducationId(null);
    onChangeIsActive(true);
  }

  function handleIsVisible(edId) {
    onChangeEducationList(
      educationList.map((ed) => {
        if (ed.id === edId) {
          return { ...ed, isVisible: !ed.isVisible };
        } else {
          return ed;
        }
      })
    );
  }
  const [selectedEducationId, setSelectedEducationId] = useState(null);
  return (
    <div className="accordion mb-4" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
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
          className="accordion-collapse collapse"
        >
          <div className="accordion-body d-flex flex-column">
            {educationList.length > 0 &&
              !isActive &&
              educationList.map((ed, index) => {
                return (
                  <React.Fragment key={ed.id}>
                    {index === 0 && <hr className="w-100 my-2" />}
                    <div
                      key={ed.id}
                      className="d-flex flex-row justify-content-between align-items-center m-2 ed"
                    >
                      {ed.school}
                      <div className="d-flex">
                        <button
                          type="button"
                          className="btn btn-outline-secondary me-3"
                          onClick={() => handleEdit(ed.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="visible-btn"
                          onClick={() => handleIsVisible(ed.id)}
                        >
                          {ed.isVisible ? (
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
              <AddEditEducation
                educationList={educationList}
                onChangeEducationList={onChangeEducationList}
                selectedEducationId={selectedEducationId}
                onChangeIsActive={onChangeIsActive}
              />
            )}
            {!isActive && (
              <button
                type="button"
                className="btn btn-outline-primary mt-3 ed-btn"
                onClick={handleAddNew}
              >
                + Education
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
