import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Resume({ userInfo }) {
  return (
    <div>
      <section className="pers-section">
        <h1 className="mb-3">{userInfo.fullName}</h1>
        <div className="d-flex flex-row justify-content-evenly">
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
          <div className="d-flex flex-row resume-bottom-details">
            <div className="me-4">
              <p>08/2020 – present</p>
              <p>New York City, US</p>
            </div>
            <div>
              <p>
                <strong>London City University</strong>
              </p>
              <p>Bachelors in Economics</p>
            </div>
          </div>
        </section>
        <section className="experience-section">
          <h3 className="resume-bottom-title">Professional Experience</h3>
          <div className="d-flex flex-row resume-bottom-details">
            <div className="me-4 experience-left">
              <p>08/2020 – present</p>
              <p>New York City, US</p>
            </div>
            <div>
              <p>
                <strong>Umbrella Inc.</strong>
              </p>
              <p>UX & UI Designer</p>
              <p className="lh-base">
                Designed and prototyped user interface patterns for various
                clients in various industries, ranging from self-service apps
                within the telecommunications-sector to mobile games for IOS and
                Android
              </p>
            </div>
          </div>
          <div className="d-flex flex-row resume-bottom-details">
            <div className="me-4 experience-left">
              <p>04/2018 – 02/2019</p>
              <p>Berlin, Germany</p>
            </div>
            <div>
              <p>
                <strong>Black Mesa Labs</strong>
              </p>
              <p>UX Research Assistant</p>
              <p className="lh-base">
                Supported senior researchers on accessibility standards for the
                open web. Created and usability tested wireframes and
                prototypes. Produced interactive documentation for quick
                onboarding of new researchers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
