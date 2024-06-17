import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function AddEducation() {
  return (
    <div>
      <div className="mb-3">
        <label for="school" class="form-label">
          School
        </label>
        <input
          type="text"
          class="form-control"
          id="school"
          placeholder="Enter school / university"
        />
      </div>
      <div className="mb-3">
        <label for="degree" class="form-label">
          Degree
        </label>
        <input
          type="text"
          class="form-control"
          id="degree"
          placeholder="Enter degree / field of study"
        />
      </div>
      <div className="row mb-3">
        <div className="col">
          <label for="startDate" class="form-label">
            Start Date
          </label>
          <input
            type="date"
            class="form-control"
            id="startDate"
            placeholder="Enter degree / field of study"
          />
        </div>
        <div className="col">
          <label for="endDate" class="form-label">
            End Date
          </label>
          <input
            type="date"
            class="form-control"
            id="endDate"
            placeholder="Enter degree / field of study"
          />
        </div>
      </div>
      <div className="mb-3">
        <label for="location" class="form-label">
          Location
        </label>
        <input
          type="text"
          class="form-control"
          id="location"
          placeholder="Enter degree / field of study"
        />
      </div>
      <div className="d-flex flex-row justify-content-between">
        <button type="button" class="btn btn-outline-danger mt-3">
          <i class="bi bi-trash3 me-2"></i>
          Delete
        </button>
        <div className="d-flex flex-row">
          <button type="button" class="btn btn-outline-secondary mt-3">
            Cancel
          </button>
          <button type="button" class="btn btn-outline-primary mt-3 ms-2">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEducation;
