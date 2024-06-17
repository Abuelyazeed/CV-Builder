import React, { useState } from "react";

function PersonalDetails({ userInfo, onChangeUserInfo }) {
  function handleChange(e) {
    const { id, value } = e.target;
    onChangeUserInfo({ ...userInfo, [id]: value });
  }
  return (
    <div className="accordion mb-4" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <strong>Personal Details</strong>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="First and last name"
                value={userInfo.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email (recommended)
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={userInfo.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone number (recommended)
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter phone number"
                value={userInfo.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address (recommended)
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="City, Country"
                value={userInfo.address}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
