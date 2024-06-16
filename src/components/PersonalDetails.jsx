import React from "react";

function PersonalDetails() {
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
            Personal Details
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
