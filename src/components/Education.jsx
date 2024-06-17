import React, { useState } from "react";
import "../App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AddEducation from "./AddEducation";

function Education({
  educationList,
  onChangeEducationList,
  isActive,
  onChangeIsActive,
}) {
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
                  <>
                    {index === 0 && <hr className="w-100 my-2" />}
                    <div
                      key={index}
                      className="d-flex flex-row justify-content-between m-2 ed"
                      onClick={() => onChangeIsActive(true)}
                    >
                      {ed.school}
                      <button className="visible-btn">
                        <i className="bi bi-eye"></i>
                      </button>
                    </div>
                    <hr className="w-100 my-2" />
                  </>
                );
              })}
            {isActive && (
              <AddEducation
                educationList={educationList}
                onChangeEducationList={onChangeEducationList}
                onChangeIsActive={onChangeIsActive}
              />
            )}

            <button
              type="button"
              className="btn btn-outline-primary mt-3 ed-btn"
              onClick={() => onChangeIsActive(true)}
            >
              + Education
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
