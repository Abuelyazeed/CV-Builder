import React, { useState } from "react";

function PersonalDetails({
  fullName,
  onChangeName,
  email,
  onChangeEmail,
  phone,
  onChangePhone,
  address,
  onChangeAddress,
}) {
  return (
    <div class="accordion mb-4" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
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
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="mb-3">
              <label for="fullName" class="form-label">
                Full name
              </label>
              <input
                type="text"
                class="form-control"
                id="fullName"
                placeholder="First and last name"
                value={fullName}
                onChange={(e) => onChangeName(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">
                Email (recommended)
              </label>
              <input
                type="text"
                class="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => onChangeEmail(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="phoneNumber" class="form-label">
                Phone number (recommeded)
              </label>
              <input
                type="text"
                class="form-control"
                id="phoneNumber"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => onChangePhone(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">
                Address (recommended)
              </label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="City, Country"
                value={address}
                onChange={(e) => onChangeAddress(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
