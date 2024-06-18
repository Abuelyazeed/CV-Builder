import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Resume({ userInfo, educationInfo, experienceInfo }) {
  return (
    <div>
      <section className="pers-section">
        <h1 className="mb-3">{userInfo.fullName}</h1>
        <div className="d-flex flex-row justify-content-center gap-5">
          <p>
            <i className="bi bi-envelope me-2"></i>
            {userInfo.email}
          </p>
          <p>
            <i className="bi bi-telephone me-2"></i>
            {userInfo.phone}
          </p>
          <p>
            <i className="bi bi-geo-alt me-2"></i>
            {userInfo.address}
          </p>
        </div>
      </section>
      <div className="resume-bottom d-flex flex-column align-items-center">
        <section className="edu-section">
          <h3 className="resume-bottom-title">Education</h3>
          {educationInfo.map((ed) => {
            if (ed.isVisible) {
              return (
                <div className="d-flex flex-row resume-bottom-details">
                  <div className="me-4 education-left">
                    <p>
                      {ed.startDate} – {ed.endDate}
                    </p>
                    <p>{ed.location}</p>
                  </div>
                  <div className="education-right">
                    <p>
                      <strong>{ed.school}</strong>
                    </p>
                    <p>{ed.degree}</p>
                  </div>
                </div>
              );
            }
          })}
        </section>
        <section className="experience-section">
          <h3 className="resume-bottom-title">Professional Experience</h3>
          {experienceInfo.map((ex) => {
            if (ex.isVisible) {
              return (
                <div className="d-flex flex-row resume-bottom-details">
                  <div className="me-4 experience-left">
                    <p>
                      {ex.startDate} – {ex.endDate}
                    </p>
                    <p>{ex.location}</p>
                  </div>
                  <div className="experience-right">
                    <p>
                      <strong>{ex.companyName}</strong>
                    </p>
                    <p>{ex.positionTitle}</p>
                    <p className="lh-base">{ex.description}</p>
                  </div>
                </div>
              );
            }
          })}
        </section>
      </div>
    </div>
  );
}

export default Resume;
